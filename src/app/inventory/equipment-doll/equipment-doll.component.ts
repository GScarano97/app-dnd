import {Component,inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CharacterService,Item} from '../../core/character.service';
interface EquipmentSlot {id:string;label:string;icon:string}
@Component({selector:'app-equipment-doll',standalone:true,imports:[FormsModule],templateUrl:'./equipment-doll.component.html',styleUrl:'./equipment-doll.component.css'})
export class EquipmentDollComponent {
 c=inject(CharacterService);
 slots:EquipmentSlot[]=[{id:'testa',label:'Testa',icon:'♜'},{id:'collo',label:'Collo',icon:'◇'},{id:'corpo',label:'Corpo',icon:'♜'},{id:'mantello',label:'Mantello',icon:'♧'},{id:'mano-principale',label:'Mano principale',icon:'⚔'},{id:'mano-secondaria',label:'Mano secondaria',icon:'◈'},{id:'mani',label:'Mani',icon:'✧'},{id:'anello',label:'Anello',icon:'◌'},{id:'cintura',label:'Cintura',icon:'⌁'},{id:'piedi',label:'Piedi',icon:'♟'}];
 dragging:number|null=null; selected=''; notice='';
 getAt(slot:string):Item|undefined{return this.c.state.items.find(x=>x.equipaggiato&&x.slot===slot)}
 indexOf(item:Item){return this.c.state.items.indexOf(item)}
 assign(index:number,slot:string){const items=this.c.state.items,item=items[index];if(!item||!this.slots.some(s=>s.id===slot))return;const prior=this.getAt(slot);if(prior&&prior!==item){prior.equipaggiato=false;delete prior.slot}item.slot=slot;item.equipaggiato=true;this.c.save();this.notice=`${item.nome} equipaggiato: ${this.slots.find(s=>s.id===slot)?.label}.`;this.selected=''}
 unassign(slot:string){const item=this.getAt(slot);if(!item)return;item.equipaggiato=false;delete item.slot;this.c.save();this.notice=`${item.nome} riposto nell’inventario.`}
 dragStart(event:DragEvent,index:number){this.dragging=index;event.dataTransfer?.setData('text/plain',String(index));if(event.dataTransfer)event.dataTransfer.effectAllowed='move'}
 drop(event:DragEvent,slot:string){event.preventDefault();const raw=event.dataTransfer?.getData('text/plain');const index=raw!==undefined&&raw!==''?Number(raw):this.dragging;if(index!==null&&Number.isInteger(index))this.assign(index,slot);this.dragging=null}
 choose(slot:string){if(this.selected!=='')this.assign(Number(this.selected),slot);else if(this.getAt(slot))this.unassign(slot);else this.notice='Seleziona prima un oggetto dalla lista.'}
}
