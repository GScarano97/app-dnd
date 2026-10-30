import {Component,Input,Output,EventEmitter} from '@angular/core';
import {FormsModule} from '@angular/forms';
@Component({selector:'app-counter',standalone:true,imports:[FormsModule],templateUrl:'./counter.component.html'})
export class CounterComponent {@Input() label='';@Input() value=0;@Input() max=Infinity;@Output() valueChange=new EventEmitter<number>();change(value:number){this.valueChange.emit(Math.max(0,Math.min(this.max,Math.floor(Number(value)||0))))}}
