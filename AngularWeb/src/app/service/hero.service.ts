import { HEROES } from './../mock/mock-heroes';
import { Hero } from './../object/hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Hero[]{
    return HEROES
  }

}
