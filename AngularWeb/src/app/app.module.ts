import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './module/home/home.component';
import { HeroesAppComponent } from './module/HeroesApp/heroes-app/heroes-app.component';
import { HeroesComponent } from './module/HeroesApp/heroes/heroes.component';
import { HeroDetailComponent } from './module/HeroesApp/hero-detail/hero-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeroesAppComponent,
    HeroesComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
