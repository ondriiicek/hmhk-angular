import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainNavComponent } from './components/header/main-nav/main-nav.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { TournamentsComponent } from './components/tournaments/tournaments.component';
import { FooterComponent } from './components/footer/footer.component';
import { FooterNavigationComponent } from './components/footer/footer-navigation/footer-navigation.component';
import { FooterSocialComponent } from './components/footer/footer-social/footer-social.component';
import { FooterContactComponent } from './components/footer/footer-contact/footer-contact.component';
import { HttpClientModule } from '@angular/common/http';
import { ChangeBooleanDirective } from './components/shared/directives/change-boolean.directive';
import { SubNavComponent } from './components/header/main-nav/sub-nav/sub-nav.component';
import { LeagueTableComponent } from './components/league-table/league-table.component';
import { CategoriePreviewComponent } from './components/categories/categorie-preview/categorie-preview.component';
import { CategorieU12Component } from './components/categories/categorie-u12/categorie-u12.component';
import { CategorieU17Component } from './components/categories/categorie-u17/categorie-u17.component';
import { CategorieU20Component } from './components/categories/categorie-u20/categorie-u20.component';
import { CategorieSeniorComponent } from './components/categories/categorie-senior/categorie-senior.component';
import { MatchesModule } from './components/matches/matches.module';
import { SharedModule } from './components/shared/shared.module';
import { BlogModule } from './components/blog/blog.module';
import { ContactModule } from './components/contact/contact.module';
import { HomeModule } from './components/home/home.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainNavComponent,
    CategoriesComponent,
    TournamentsComponent,
    FooterComponent,
    FooterNavigationComponent,
    FooterSocialComponent,
    FooterContactComponent,
    ChangeBooleanDirective,
    SubNavComponent,
    LeagueTableComponent,
    CategoriePreviewComponent,
    CategorieU12Component,
    CategorieU17Component,
    CategorieU20Component,
    CategorieSeniorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatchesModule,
    SharedModule,
    BlogModule,
    ContactModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
