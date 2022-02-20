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
import { TopArticleCategoriesComponent } from './components/home/sidebar/top-article-categories/top-article-categories.component';
import { CategorieComponent } from './components/home/sidebar/top-article-categories/categorie/categorie.component';
import { ContactCardComponent } from './components/contact/contact-card/contact-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { FooterNavigationComponent } from './components/footer/footer-navigation/footer-navigation.component';
import { FooterSocialComponent } from './components/footer/footer-social/footer-social.component';
import { FooterContactComponent } from './components/footer/footer-contact/footer-contact.component';
import { AboutUsComponent } from './components/home/about-us/about-us.component';
import { TitleComponent } from './components/home/about-us/title/title.component';
import { ClubImageComponent } from './components/home/about-us/club-image/club-image.component';
import { RatingsComponent } from './components/home/about-us/ratings/ratings.component';

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
    TopArticleCategoriesComponent,
    CategorieComponent,
    ContactCardComponent,
    FooterComponent,
    FooterNavigationComponent,
    FooterSocialComponent,
    FooterContactComponent,
    AboutUsComponent,
    TitleComponent,
    ClubImageComponent,
    RatingsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
