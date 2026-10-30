import { Injectable } from '@angular/core';
export const ABILITIES = ['Forza','Destrezza','Costituzione','Intelligenza','Saggezza','Carisma'];
export const SKILLS: [string,number][] = [['Acrobazia',1],['Addestrare Animali',4],['Arcano',3],['Atletica',0],['Furtività',1],['Indagare',3],['Inganno',5],['Intimidire',5],['Intuizione',4],['Intrattenere',5],['Medicina',4],['Natura',3],['Percezione',4],['Persuasione',5],['Rapidità di mano',1],['Religione',3],['Sopravvivenza',4],['Storia',3]];
export interface Spell {nome:string;livello:string;scuola:string;lancio:string;gittata:string;durata:string;componenti:string;descrizione:string;effetti:string;srdIndex?:string}
export interface Item {nome:string;quantita:number;tipo:string;peso:number;valore:number;descrizione:string;equipaggiato:boolean;slot?:string;srdIndex?:string}
export interface CatalogEntry {type:string;index:string;name:string;kind:string;description:string}
export interface Character {identity:Record<string,string|number>;stats:Record<string,string|number>;hp:{attuali:number;massimi:number;temporanei:number};death:Record<'successi'|'fallimenti',boolean[]>;abilities:{score:string|number;save:number|boolean}[];skills:number[];slots:{max:number;current:number}[];sorcery:{current:number;max:number};coins:Record<string,number>;spells:Spell[];items:Item[];notes:Record<string,string>;inspiration:boolean;catalog:CatalogEntry[]}
const KEY='registro-arcano-v1';
export function defaults():Character{return {identity:{nome:'',classe:'',sottoclasse:'',razza:'',livello:'',background:'',xp:''},stats:{ca:'',velocita:'',competenza:'',iniziativa:''},hp:{attuali:0,massimi:0,temporanei:0},death:{successi:[false,false,false],fallimenti:[false,false,false]},abilities:ABILITIES.map(()=>({score:'',save:0})),skills:SKILLS.map(()=>0),slots:Array.from({length:9},()=>({max:0,current:0})),sorcery:{current:0,max:0},coins:{MR:0,MA:0,MO:0,MP:0},spells:[],items:[],notes:{tratti:'',privilegi:'',talenti:'',capacita:'',metamagie:'',equipaggiamento:'',condizioni:'',personali:''},inspiration:false,catalog:[]}}
function valid(x: any): x is Character {return !!x && !!x.identity && !!x.stats && !!x.hp && !!x.sorcery && !!x.coins && !!x.notes && !!x.death && Array.isArray(x.abilities)&&x.abilities.length===6&&Array.isArray(x.skills)&&x.skills.length===18&&Array.isArray(x.slots)&&x.slots.length===9&&Array.isArray(x.spells)&&Array.isArray(x.items)}
@Injectable({providedIn:'root'}) export class CharacterService {
 state:Character=this.load();
 private load():Character {try{let v=JSON.parse(localStorage.getItem(KEY)||'null');return valid(v)?{...defaults(),...v,catalog:v.catalog||[]}:defaults()}catch{return defaults()}}
 save(){localStorage.setItem(KEY,JSON.stringify(this.state))}
 reset(){this.state=defaults();this.save()}
 import(text:string){const v:unknown=JSON.parse(text);if(!valid(v))throw new Error('Formato scheda non valido');this.state={...defaults(),...v,catalog:v.catalog||[]};this.save()}
 export(){const a=document.createElement('a');const url=URL.createObjectURL(new Blob([JSON.stringify(this.state,null,2)],{type:'application/json'}));a.href=url;a.download='registro-arcano.json';a.click();URL.revokeObjectURL(url)}
 modifier(value:string|number){return value===''||value===null?'—':this.signed(Math.floor((Number(value)-10)/2))}
 signed(n:number){return n>=0?'+'+n:String(n)}
 pct(a:number,b:number){return b>0?Math.max(0,Math.min(100,a/b*100)):0}
}
