import { Component, Input, OnChanges }              from '@angular/core';
import { FormArray,
         FormBuilder,
         FormGroup,
         Validators }             from '@angular/forms';
import { states, Hero, heroes, Address }                 from './data-model';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  providers: [Hero, Address]
})
export class HeroDetailComponent implements OnChanges {
  @Input() hero:Hero;

  heroForm: FormGroup;

  states = states;
  selectedHero: Hero;


  constructor(private fb: FormBuilder) { // <--- inject FormBuilder
    this.createForm();
  }

  createForm() {
    this.heroForm = this.fb.group({
      name: ['',Validators.required], // <--- the FormControl called "name"
      address: this.fb.group(new Address()),
      power: 'Flight',
      sidekick: ''
    });
  }

  ngOnChanges(){
    this.heroForm.reset({
      name:    this.selectedHero.name,
      address: this.selectedHero.addresses[0] || new Address()
    });
  }

  select (hero:Hero){
    this.selectedHero = hero;
  }
}
