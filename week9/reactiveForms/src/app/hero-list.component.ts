import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/finally';

import { Hero } from './data-model';
import { HeroService } from './hero.service';

@Component({
  selector: 'hero-list',
  templateUrl: './hero-list.component.html'
})
export class HeroListComponent implements OnInit {

  heroes:Observable<Hero[]>;
  selectedHero: Hero;

  constructor (private heroService:HeroService ){ }


  ngOnInit() {
    this.getHeroes()
  }

  select(hero: Hero) { this.selectedHero = hero; }

  getHeroes() {
    // this.isLoading = true;
    this.heroes = this.heroService.getHeroes()
                      // Todo: error handling
                      // .finally(() => this.isLoading = false);
    this.selectedHero = undefined;
  }
}

