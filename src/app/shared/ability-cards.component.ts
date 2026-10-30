import {Component,inject} from '@angular/core';import {FormsModule} from '@angular/forms';import {CharacterService,ABILITIES} from '../core/character.service';
@Component({selector:'app-ability-cards',standalone:true,imports:[FormsModule],templateUrl:'./ability-cards.component.html'})export class AbilityCardsComponent {c=inject(CharacterService);names=ABILITIES}
