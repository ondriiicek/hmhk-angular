import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SubheaderComponent } from './components/header/subheader/subheader.component';
import { MainNavComponent } from './components/header/main-nav/main-nav.component';
import { HomeComponent } from './components/home/home.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { TournamentsComponent } from './components/tournaments/tournaments.component';
import { MatchesComponent } from './components/matches/matches.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { MostReadComponent } from './components/home/most-read/most-read.component';
import { LatestArticlesComponent } from './components/home/latest-articles/latest-articles.component';
import { SidebarComponent } from './components/home/sidebar/sidebar.component';
import { SocialComponent } from './components/home/sidebar/social/social.component';
import { TopArticlesComponent } from './components/home/sidebar/top-articles/top-articles.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SubheaderComponent,
    MainNavComponent,
    HomeComponent,
    CategoriesComponent,
    TournamentsComponent,
    MatchesComponent,
    BlogComponent,
    ContactComponent,
    MostReadComponent,
    LatestArticlesComponent,
    SidebarComponent,
    SocialComponent,
    TopArticlesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
