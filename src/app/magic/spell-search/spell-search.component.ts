import {ChangeDetectorRef,Component,Input,inject} from '@angular/core';
import {CharacterService} from '../../core/character.service';
import {SrdService,SrdDetail} from '../../core/srd.service';
import {ITALIAN_SPELLS,ItalianSpellRef} from '../../core/spells-it';
@Component({selector:'app-spell-search',standalone:true,templateUrl:'./spell-search.component.html',styleUrl:'./spell-search.component.css'})
export class SpellSearchComponent {
 @Input() query='';@Input() level='';
 c=inject(CharacterService);api=inject(SrdService);cdr=inject(ChangeDetectorRef); selected:ItalianSpellRef|null=null;detail:SrdDetail|null=null;loading=false;error='';message='';sequence=0;
 normalize(s:string){return s.toLocaleLowerCase('it').normalize('NFD').replace(/[\u0300-\u036f]/g,'').trim()}
 get results(){const q=this.normalize(this.query);if(!q)return [];return ITALIAN_SPELLS.filter(x=>(this.level===''||String(x.level)===this.level)&&(this.normalize(x.italian).includes(q)||this.normalize(x.name).includes(q)))}
 exists(x:ItalianSpellRef){return this.c.state.spells.some(s=>s.srdIndex===x.index)}
 async open(x:ItalianSpellRef){const n=++this.sequence;this.selected=x;this.detail=null;this.message='';this.error='';this.loading=true;try{let d=await this.api.get(x.url);if(n===this.sequence)this.detail=d}catch{if(n===this.sequence)this.error='Impossibile caricare i dettagli. Controlla la connessione e riprova.'}finally{if(n===this.sequence){this.loading=false;this.cdr.markForCheck()}}}
 add(){let d=this.detail,x=this.selected;if(!d||!x||this.exists(x))return;this.c.state.spells.push({nome:x.italian,livello:String(d['level']),scuola:d['school']?.name||'',lancio:d['casting_time']||'',gittata:d['range']||'',durata:d['duration']||'',componenti:(d['components']||[]).join(', ')+(d['material']?' ('+d['material']+')':''),descrizione:this.api.spellDescription(x.index)||this.api.description(d),effetti:'',srdIndex:x.index});this.c.save();this.message='Aggiunto al tuo libro degli incantesimi.'}
 close(){this.sequence++;this.detail=null;this.selected=null;this.loading=false;this.error='';this.message=''}
}
