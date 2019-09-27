import { HeroService } from './../../../service/hero.service';
import { HEROES } from './../../../mock/mock-heroes';
import { Hero } from './../../../object/hero'
import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-hero',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes2: Hero[]
  heroes = HEROES
  selectHero: Hero
  onSelect(hero: Hero): void{
    this.selectHero = hero
  }
  constructor(private heroService: HeroService) { }

  ngOnInit() {
  }

  getHeroes(): void{
    this.heroes2 = this.heroService.getHeroes()
  }

}
