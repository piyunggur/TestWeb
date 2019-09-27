import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './module/home/home.component';
import { HeroesAppComponent } from './module/HeroesApp/heroes-app/heroes-app.component';
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'HeroesApp', component: HeroesAppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
