import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './navigation/header/header.component';
import { CharactersComponent } from './home/characters/characters.component';
import { BbapiService } from './service/bbapi.service';
import { HttpClientModule } from '@angular/common/http';
import {
  RouterModule,
  Routes
} from '@angular/router';
import { FooterComponent } from './navigation/footer/footer.component';
import { EpisodesComponent } from './home/episodes/episodes.component';
import { DeathcountComponent } from './home/deathcount/deathcount.component';
import { AboutComponent } from './home/about/about.component';
import { CharactersbynameComponent } from './home/charactersbyname/charactersbyname.component';
import { HomepageComponent } from './home/homepage/homepage.component';
import { QuotesComponent } from './home/quotes/quotes.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomepageComponent},
  {path: 'personaggi', component: CharactersComponent},
  {path: 'episodi', component: EpisodesComponent},
  {path: 'random', component: DeathcountComponent},
  {path: 'ab', component: AboutComponent},
  {path: 'charname', component: AboutComponent},
  {path: 'citazioni', component: QuotesComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CharactersComponent,
    FooterComponent,
    EpisodesComponent,
    DeathcountComponent,
    CharactersbynameComponent,
    QuotesComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    BbapiService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
