import {Component,inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CharacterService,ClassResource} from '../../core/character.service';
import {CLASS_RESOURCES,classKey,ResourceDefinition} from '../../core/class-rules';
import {CounterComponent} from '../../shared/counter.component';
@Component({selector:'app-class-resources',standalone:true,imports:[FormsModule,CounterComponent],templateUrl:'./class-resources.component.html',styleUrl:'./class-resources.component.css'})
export class ClassResourcesComponent {
 c=inject(CharacterService);showAdd=false;newName='';newDescription='';newRest='Riposo lungo';
 get key(){return classKey(this.c.state.identity['classe'])}
 get bucketKey(){return this.key||('custom:'+String(this.c.state.identity['classe']||'').trim().toLocaleLowerCase('it'))}
 get level(){return Number(this.c.state.identity['livello'])||0}
 get definitions():ResourceDefinition[]{const sub=String(this.c.state.identity['sottoclasse']||'').toLocaleLowerCase('it');return this.key?(CLASS_RESOURCES[this.key]||[]).filter(d=>(!this.level||d.level<=this.level)&&(!d.subclass||d.subclass.includes(sub))):[]}
 get custom(){return Object.entries(this.c.state.classResources?.[this.bucketKey]||{}).filter(([id])=>id.startsWith('custom:')).map(([id,data])=>({id,...data}))}
 get(id:string):ClassResource{return this.c.state.classResources?.[this.bucketKey]?.[id]||{current:0,max:0}}
 private ensure(id:string){const groups=this.c.state.classResources ||= {};const bucket=groups[this.bucketKey] ||= {};return bucket[id] ||= {current:0,max:0}}
 setMax(id:string,value:number){const r=this.ensure(id);r.max=value;r.current=Math.min(r.current,value);this.c.save()}
 setCurrent(id:string,value:number){this.ensure(id).current=value;this.c.save()}
 add(){const name=this.newName.trim();if(!name)return;const id='custom:'+(globalThis.crypto?.randomUUID?.()||Date.now().toString(36)+Math.random().toString(36).slice(2));const r=this.ensure(id);r.label=name;r.description=this.newDescription.trim();r.rest=this.newRest;this.newName='';this.newDescription='';this.newRest='Riposo lungo';this.showAdd=false;this.c.save()}
 remove(id:string){if(confirm('Rimuovere questa risorsa personalizzata?')){delete this.c.state.classResources?.[this.bucketKey]?.[id];this.c.save()}}
}
