import {Injectable} from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of }         from 'rxjs/observable/of';
import 'rxjs/add/operator/delay';

import { Hero, heroes } from './data-model';


@Injectable()
export class HeroService {

  //假的伺服器 get 行為, 預設模擬沒有出錯
  getHeroes(): Observable<Hero[]> {
    return of(heroes).delay(500);
  }



}
