import {ChangeDetectorRef,Component,ElementRef,Input,ViewChild,inject} from '@angular/core';
import {CharacterService} from '../../core/character.service';
import {SrdService,SrdDetail} from '../../core/srd.service';
import {ITALIAN_SPELLS,ItalianSpellRef} from '../../core/spells-it';
type SpellResult=ItalianSpellRef & {edition:'2014'|'2024'};
@Component({selector:'app-spell-search',standalone:true,templateUrl:'./spell-search.component.html',styleUrl:'./spell-search.component.css'})
export class SpellSearchComponent {
 @Input() query=''; @Input() level='';
 c=inject(CharacterService); api=inject(SrdService); cdr=inject(ChangeDetectorRef);
 selected:SpellResult|null=null; detail:SrdDetail|null=null; loading=false; error=''; sequence=0;
 include2024=false; loadingList=false; listError=''; list2024:SpellResult[]=[];
 @ViewChild('spellDialog') set dialog(element:ElementRef<HTMLDialogElement>|undefined){if(element && !element.nativeElement.open)element.nativeElement.showModal()}
 backdropClick(event:MouseEvent){if(event.target===event.currentTarget)this.close()}
 normalize(s:string){return s.toLocaleLowerCase('it').normalize('NFD').replace(/[\u0300-\u036f]/g,'').trim()}
 get results():SpellResult[]{const q=this.normalize(this.query);if(!q)return [];const base:SpellResult[]=ITALIAN_SPELLS.map(x=>({...x,edition:'2014'}));return [...base,...(this.include2024?this.list2024:[])].filter(x=>(this.level===''||String(x.level)===this.level)&&(this.normalize(x.italian).includes(q)||this.normalize(x.name).includes(q)))}
 async toggle2024(event:Event){this.include2024=(event.target as HTMLInputElement).checked;if(this.include2024&&!this.list2024.length)await this.load2024()}
 async load2024(){this.loadingList=true;this.listError='';try{const data=await this.api.cachedGet('/api/2024/spells');if(!Array.isArray(data.results))throw Error();this.list2024=data.results.filter((x:any)=>x.index&&x.name&&x.url&&Number.isInteger(x.level)).map((x:any)=>({index:x.index,name:x.name,italian:x.index==='chromatic-orb'?'Globo Cromatico':x.name,level:x.level,url:x.url,edition:'2024'}))}catch{this.listError='Catalogo 2024 non disponibile. Controlla la connessione e riprova.'}finally{this.loadingList=false;this.cdr.markForCheck()}}
 exists(x:SpellResult){return this.c.state.spells.some(s=>s.srdIndex===x.index&&(s.srdEdition||'2014')===x.edition)}
 async open(x:SpellResult){const n=++this.sequence;this.selected=x;this.detail=null;this.error='';this.loading=true;try{const d=await this.api.cachedGet(x.url);if(n===this.sequence)this.detail=d}catch{if(n===this.sequence)this.error='Impossibile caricare i dettagli. Controlla la connessione e riprova.'}finally{if(n===this.sequence){this.loading=false;this.cdr.markForCheck()}}}
 description(x:SpellResult,d:SrdDetail){return (x.edition==='2014'&&this.api.spellDescription(x.index))||this.api.description(d)}
 add(){const d=this.detail,x=this.selected;if(!d||!x||this.exists(x))return;this.c.state.spells.push({nome:x.italian,livello:String(d['level']),scuola:d['school']?.name||'',lancio:d['casting_time']||'',gittata:d['range']||'',durata:d['duration']||'',componenti:(d['components']||[]).join(', ')+(d['material']?' ('+d['material']+')':''),descrizione:this.description(x,d),effetti:'',srdIndex:x.index,srdEdition:x.edition});this.c.save();this.close()}
 close(){this.sequence++;this.detail=null;this.selected=null;this.loading=false;this.error=''}
}
