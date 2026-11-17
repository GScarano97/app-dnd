import {ChangeDetectorRef, Component, Input, OnChanges, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {SrdService, SrdRef} from '../../core/srd.service';
import {classKey} from '../../core/class-rules';
import {FEATURES_IT} from './features-it';
import {eligibleLevels} from './feature-selection';

type Origin = 'Classe'|'Sottoclasse'|'Razza'|'Sottorazza';
interface Feature {ref:SrdRef; origin:Origin; level?:number; description?:string; choice?:boolean; detailStatus?:'loading'|'error'|'ready'}
const subclasses:Record<string,Record<string,string>>={
 barbarian:{'path of the berserker':'berserker','cammino del berserker':'berserker'}, bard:{'college of lore':'lore','collegio della sapienza':'lore'}, cleric:{'life domain':'life','dominio della vita':'life'}, druid:{'circle of the land':'land','circolo della terra':'land'}, fighter:{'champion':'champion','campione':'champion'}, monk:{'way of the open hand':'open-hand','via della mano aperta':'open-hand'}, paladin:{'oath of devotion':'devotion','giuramento di devozione':'devotion'}, ranger:{'hunter':'hunter','cacciatore':'hunter'}, rogue:{'thief':'thief','ladro':'thief'}, sorcerer:{'draconic bloodline':'draconic','discendenza draconica':'draconic'}, warlock:{'the fiend':'fiend',"l'immondo":'fiend'}, wizard:{'school of evocation':'evocation','scuola di invocazione':'evocation'}
};
const races:Record<string,string>={'dragonide':'dragonborn','dragonborn':'dragonborn','nano':'dwarf','dwarf':'dwarf','elfo':'elf','elf':'elf','gnomo':'gnome','gnome':'gnome','mezzelfo':'half-elf','half-elf':'half-elf','mezzorco':'half-orc','half-orc':'half-orc','halfling':'halfling','umano':'human','human':'human','tiefling':'tiefling'};
const subraces:Record<string,Record<string,string>>={elf:{'elfo alto':'high-elf','high elf':'high-elf'},dwarf:{'nano delle colline':'hill-dwarf','hill dwarf':'hill-dwarf'},halfling:{'halfling piedelesto':'lightfoot-halfling','lightfoot halfling':'lightfoot-halfling'},gnome:{'gnomo delle rocce':'rock-gnome','rock gnome':'rock-gnome'}};
const norm=(value:unknown)=>String(value||'').trim().toLocaleLowerCase('it');
@Component({selector:'app-automatic-features',standalone:true,imports:[FormsModule],templateUrl:'./automatic-features.component.html'})
export class AutomaticFeaturesComponent implements OnChanges {
 @Input() classe:unknown; @Input() sottoclasse:unknown; @Input() livello:unknown; @Input() razza:unknown; @Input() sottorazza:unknown;
 private api=inject(SrdService); private change=inject(ChangeDetectorRef); private generation=0;
 features:Feature[]=[]; messages:string[]=[]; loading=false; hasError=false; search='';
 translation(f:Feature): {name:string;description:string}|undefined {return FEATURES_IT[f.ref.index]}
 get filtered(){const q=norm(this.search);return this.features.filter(f=>norm(f.ref.name).includes(q)||norm(this.translation(f)?.name).includes(q)||norm(f.origin).includes(q))}
 ngOnChanges(){void this.load()}
 async load(){
  const generation=++this.generation; this.loading=true; this.hasError=false; this.features=[]; this.messages=[];
  const key=classKey(this.classe), race=races[norm(this.razza)]; const level=Number(this.livello); const tasks:Promise<void>[]=[];
  const addLevels=(path:string,origin:Origin)=>tasks.push(this.api.cachedGet(path).then(data=>{
   if(!Array.isArray(data))throw new Error('Risposta inattesa');
   for(const entry of eligibleLevels(data,level))this.add(buffer,entry.ref,origin,entry.level)
  }).catch(()=>{if(generation===this.generation){this.hasError=true;this.messages.push(`${origin}: dati non disponibili. Riprova quando la connessione è disponibile.`)}}));
  const addTraits=(path:string,origin:Origin)=>tasks.push(this.api.cachedGet(path).then(data=>{
   if(!Array.isArray(data.results))throw new Error('Risposta inattesa');for(const ref of data.results)this.add(buffer,ref,origin);
  }).catch(()=>{if(generation===this.generation){this.hasError=true;this.messages.push(`${origin}: dati non disponibili. Riprova quando la connessione è disponibile.`)}}));
  // Collect into a request-local buffer so older requests cannot overwrite a newer selection.
  const buffer:Feature[]=[];
  if(this.classe){if(!key||key==='artificer')this.messages.push('Classe non disponibile nello SRD 2014: usa le note manuali.');else if(!Number.isInteger(level)||level<1||level>20)this.messages.push('Imposta il livello per visualizzare i privilegi di classe.');else addLevels(`/api/2014/classes/${key}/levels`,'Classe')}
  if(this.sottoclasse&&key){const sub=subclasses[key]?.[norm(this.sottoclasse)];if(!sub)this.messages.push('Sottoclasse non disponibile nello SRD 2014: usa le note manuali.');else if(level>=1&&level<=20)addLevels(`/api/2014/subclasses/${sub}/levels`,'Sottoclasse')}
  if(this.razza){if(race)addTraits(`/api/2014/races/${race}/traits`,'Razza');else this.messages.push('Razza non disponibile nello SRD 2014: usa le note manuali.')}
  if(this.sottorazza){const sub=race&&subraces[race]?.[norm(this.sottorazza)];if(sub)addTraits(`/api/2014/subraces/${sub}/traits`,'Sottorazza');else this.messages.push('Sottorazza non disponibile nello SRD 2014: usa le note manuali.')}
  await Promise.all(tasks); if(generation!==this.generation)return; this.features=buffer.sort((a,b)=>(a.level||0)-(b.level||0)||a.ref.name.localeCompare(b.ref.name));this.loading=false;this.change.markForCheck();
 }
 private add(buffer:Feature[],ref:SrdRef,origin:Origin,level?:number){if(!ref?.index||!ref.url?.startsWith('/api/2014/'))return;if(!buffer.some(f=>f.ref.url===ref.url))buffer.push({ref,origin,level})}
 async detail(f:Feature,event:Event){if(!(event.target as HTMLDetailsElement).open||f.detailStatus==='ready'||f.detailStatus==='loading')return;f.detailStatus='loading';try{const d=await this.api.cachedGet(f.ref.url);f.description=this.api.description(d);f.choice=!!(d.feature_specific?.choices||d.feature_specific?.subfeature_options||d.feature_specific?.expertise_options||d.trait_specific?.subtrait_options||d.trait_specific?.spell_options||d.proficiencies?.choose||d.prerequisites?.length);f.detailStatus='ready'}catch{f.detailStatus='error'}finally{this.change.markForCheck()}}
}
