import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { AboutUsComponent } from "./about-us/about-us.component";
import { ClubImageComponent } from "./about-us/club-image/club-image.component";
import { HistoryComponent } from "./about-us/history/history.component";
import { IntroComponent } from "./about-us/intro/intro.component";
import { TitleComponent } from "./about-us/title/title.component";
import { HomeComponent } from "./home.component";
import { LatestArticlesComponent } from "./latest-articles/latest-articles.component";
import { MostReadComponent } from "./most-read/most-read.component";

@NgModule({
  declarations: [
    HomeComponent,
    MostReadComponent,
    LatestArticlesComponent,
    AboutUsComponent,
    ClubImageComponent,
    HistoryComponent,
    IntroComponent,
    TitleComponent
  ],
  imports:[
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: '', component: HomeComponent }
    ])
  ]
})

export class HomeModule{}