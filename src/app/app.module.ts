import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
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
import { ClubImageComponent } from './components/home/about-us/club-image/club-image.component';
import { HistoryComponent } from './components/home/about-us/history/history.component';
import { IntroComponent } from './components/home/about-us/intro/intro.component';
import { ContactFormComponent } from './components/contact/contact-form/contact-form.component';
import { PreviewPageComponent } from './components/blog/preview-page/preview-page.component';
import { PreviewComponent } from './components/blog/preview-page/preview/preview.component';
import { ArticleComponent } from './components/blog/article/article.component';
import { BadgeComponent } from './components/shared/components/badge/badge.component';
import { HttpClientModule } from '@angular/common/http';
import { ArticleHeaderComponent } from './components/blog/article/article-header/article-header.component';
import { ArticleContentComponent } from './components/blog/article/article-content/article-content.component';
import { ArticleFooterComponent } from './components/blog/article/article-footer/article-footer.component';
import { ArticleSidebarComponent } from './components/blog/article/article-sidebar/article-sidebar.component';
import { TruncatePipe } from './components/shared/pipes/truncate.pipe';
import { TableHeadComponent } from './components/matches/table-head/table-head.component';
import { TableButtonsComponent } from './components/matches/table-buttons/table-buttons.component';
import { TableBodyComponent } from './components/matches/table-body/table-body.component';
import { ChangeBooleanDirective } from './components/shared/directives/change-boolean.directive';
import { SubNavComponent } from './components/header/main-nav/sub-nav/sub-nav.component';
import { LeagueTableComponent } from './components/league-table/league-table.component';
import { CategoriePreviewComponent } from './components/categories/categorie-preview/categorie-preview.component';
import { CategorieU12Component } from './components/categories/categorie-u12/categorie-u12.component';
import { CategorieU17Component } from './components/categories/categorie-u17/categorie-u17.component';
import { CategorieU20Component } from './components/categories/categorie-u20/categorie-u20.component';
import { CategorieSeniorComponent } from './components/categories/categorie-senior/categorie-senior.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
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
    ClubImageComponent,
    HistoryComponent,
    IntroComponent,
    ContactFormComponent,
    PreviewPageComponent,
    PreviewComponent,
    ArticleComponent,
    BadgeComponent,
    ArticleHeaderComponent,
    ArticleContentComponent,
    ArticleFooterComponent,
    ArticleSidebarComponent,
    TruncatePipe,
    TableHeadComponent,
    TableButtonsComponent,
    TableBodyComponent,
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
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
