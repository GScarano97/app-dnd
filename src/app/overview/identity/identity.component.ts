import {Component,inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CharacterService} from '../../core/character.service';
import {CLASS_OPTIONS} from './class-options';

type Choice={name:string;label:string;source?:string};
const CLASS_IT:Record<string,string>={artificer:'Artefice',barbarian:'Barbaro',bard:'Bardo',cleric:'Chierico',druid:'Druido',fighter:'Guerriero',monk:'Monaco',paladin:'Paladino',ranger:'Ranger',rogue:'Ladro',sorcerer:'Stregone',warlock:'Warlock',wizard:'Mago'};
const SUB_IT:Record<string,string>={'Berserker':'Berserker','Totem Warrior':'Guerriero Totemico','Lore':'Sapienza','Valor':'Valore','Life':'Vita','Knowledge':'Conoscenza','Light':'Luce','Nature':'Natura','Tempest':'Tempesta','Trickery':'Inganno','War':'Guerra','Land':'Terra','Moon':'Luna','Champion':'Campione','Battle Master':'Maestro di Battaglia','Eldritch Knight':'Cavaliere Mistico','Open Hand':'Mano Aperta','Shadow':'Ombra','Four Elements':'Quattro Elementi','Devotion':'Devozione','Ancients':'Antichi','Vengeance':'Vendetta','Hunter':'Cacciatore','Beast Master':'Signore delle Bestie','Thief':'Ladro','Assassin':'Assassino','Arcane Trickster':'Mistificatore Arcano','Draconic Bloodline':'Discendenza Draconica','Wild Magic':'Magia Selvaggia','Archfey':'ArciFata','Fiend':'Immondo','Great Old One':'Grande Antico','Abjuration':'Abiurazione','Conjuration':'Evocazione','Divination':'Divinazione','Enchantment':'Ammaliamento','Evocation':'Invocazione','Illusion':'Illusione','Necromancy':'Necromanzia','Transmutation':'Trasmutazione'};
Object.assign(SUB_IT, {"Path of the Berserker": "Cammino del Berserker", "Path of the Totem Warrior": "Cammino del Guerriero Totemico", "College of Lore": "Collegio della Sapienza", "College of Valor": "Collegio del Valore", "Knowledge Domain": "Dominio della Conoscenza", "Life Domain": "Dominio della Vita", "Light Domain": "Dominio della Luce", "Nature Domain": "Dominio della Natura", "Tempest Domain": "Dominio della Tempesta", "Trickery Domain": "Dominio dell'Inganno", "War Domain": "Dominio della Guerra", "Circle of the Land": "Circolo della Terra", "Circle of the Moon": "Circolo della Luna", "Way of the Open Hand": "Via della Mano Aperta", "Way of Shadow": "Via dell'Ombra", "Way of the Four Elements": "Via dei Quattro Elementi", "Oath of Devotion": "Giuramento di Devozione", "Oath of the Ancients": "Giuramento degli Antichi", "Oath of Vengeance": "Giuramento di Vendetta", "The Archfey": "L'ArciFata", "The Fiend": "L'Immondo", "The Great Old One": "Il Grande Antico", "School of Abjuration": "Scuola di Abiurazione", "School of Conjuration": "Scuola di Evocazione", "School of Divination": "Scuola di Divinazione", "School of Enchantment": "Scuola di Ammaliamento", "School of Evocation": "Scuola di Invocazione", "School of Illusion": "Scuola di Illusione", "School of Necromancy": "Scuola di Necromanzia", "School of Transmutation": "Scuola di Trasmutazione"});
const RACES:Record<string,string[]>={'Dragonide':[],'Nano':['Nano delle Colline','Nano delle Montagne'],'Elfo':['Elfo Alto','Elfo dei Boschi','Elfo Oscuro (Drow)'],'Gnomo':['Gnomo delle Foreste','Gnomo delle Rocce'],'Mezzelfo':[],'Mezzorco':[],'Halfling':['Halfling Piedelesto','Halfling Tozzo'],'Umano':[],'Tiefling':[]};
const RACE_EN:Record<string,string>={'Dragonborn':'Dragonide','Dwarf':'Nano','Elf':'Elfo','Gnome':'Gnomo','Half-Elf':'Mezzelfo','Half-Orc':'Mezzorco','Halfling':'Halfling','Human':'Umano','Tiefling':'Tiefling'};
const BACKGROUNDS=['Accolito','Ciarlatano','Criminale','Eroe Popolare','Eremita','Forestiero','Artigiano di Gilda','Intrattenitore','Marinaio','Nobile','Sapiente','Soldato','Monello'];
const BACKGROUND_EN:Record<string,string>={Acolyte:'Accolito',Charlatan:'Ciarlatano',Criminal:'Criminale','Folk Hero':'Eroe Popolare',Hermit:'Eremita',Outlander:'Forestiero','Guild Artisan':'Artigiano di Gilda',Entertainer:'Intrattenitore',Sailor:'Marinaio',Noble:'Nobile',Sage:'Sapiente',Soldier:'Soldato',Urchin:'Monello'};
@Component({selector:'app-character-identity',standalone:true,imports:[FormsModule],templateUrl:'./identity.component.html',styleUrl:'./identity.component.css'})
export class IdentityComponent {
 c=inject(CharacterService); levels=Array.from({length:20},(_,i)=>i+1); error='';
 get identity(){return this.c.state.identity} get level(){return Number(this.identity['livello'])||0}
 get classKey(){const v=String(this.identity['classe']||'').toLocaleLowerCase('it');return Object.keys(CLASS_OPTIONS).find(k=>[k,CLASS_OPTIONS[k].name,CLASS_IT[k]].some(n=>n.toLocaleLowerCase('it')===v))||''}
 get subclassLevel(){return this.classKey?CLASS_OPTIONS[this.classKey].level:0}
 get raceName(){const v=String(this.identity['razza']||'');return RACE_EN[v]||v}
 options(field:string):Choice[]{let parent='';let list:Choice[]=[];
  if(field==='classe')list=Object.keys(CLASS_OPTIONS).map(k=>({name:CLASS_IT[k],label:CLASS_IT[k]}));
  if(field==='sottoclasse'&&this.classKey){parent=this.classKey;list=CLASS_OPTIONS[parent].subclasses.map(s=>({name:s.name,label:SUB_IT[s.name]||s.name,source:s.source}));}
  if(field==='razza')list=Object.keys(RACES).map(name=>({name,label:name}));
  if(field==='sottorazza'){parent=this.raceName;list=(RACES[parent]||[]).map(name=>({name,label:name}));}
  if(field==='background')list=BACKGROUNDS.map(name=>({name,label:name}));
  const custom=(this.c.state.identityOptions?.[field]||[]).filter(x=>!x.parent||x.parent===parent).map(x=>({name:x.name,label:x.name}));
  const existing=String(this.identity[field]||'');const alias=field==='classe'?this.classKey&&CLASS_IT[this.classKey]:field==='razza'?this.raceName:field==='background'?BACKGROUND_EN[existing]:'';
  if(existing&&alias&&!list.some(x=>x.name===existing))list.push({name:existing,label:alias});
  if(existing&&!list.some(x=>x.name===existing)&&!custom.some(x=>x.name===existing))custom.push({name:existing,label:existing+' (già salvato)'});
  return [...list,...custom];
 }
 change(field:string,value:string){this.error='';const old=String(this.identity[field]||'');if(value==='__custom'){const name=prompt('Inserisci il nome della tua opzione personalizzata:')?.trim();if(!name){this.identity[field]=old;return}value=name;let store=this.c.state.identityOptions ||= {};let parent=field==='sottoclasse'?this.classKey:field==='sottorazza'?this.raceName:'';let entries=store[field] ||= [];if(!entries.some(x=>x.name===name&&x.parent===parent))entries.push({name,parent});}
  this.identity[field]=value;
  if(field==='classe'&&value!==old)this.identity['sottoclasse']='';
  if(field==='razza'&&value!==old)this.identity['sottorazza']='';
  this.c.save();
 }
 setLevel(v:string){this.identity['livello']=v?Number(v):'';this.c.save()}
 get subclassWarning(){return !!this.identity['sottoclasse']&&this.level>0&&this.subclassLevel>0&&this.level<this.subclassLevel}
}
