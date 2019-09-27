import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-heroes-app',
  templateUrl: './heroes-app.component.html',
  styleUrls: ['./heroes-app.component.css']
})
export class HeroesAppComponent implements OnInit {

  title= 'Tour of Heroes'

  constructor() { }

  ngOnInit() {
  }

}
