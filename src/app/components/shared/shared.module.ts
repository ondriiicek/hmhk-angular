import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SidebarComponent } from "../home/sidebar/sidebar.component";
import { SocialComponent } from "../home/sidebar/social/social.component";
import { CategorieComponent } from "../home/sidebar/top-article-categories/categorie/categorie.component";
import { TopArticleCategoriesComponent } from "../home/sidebar/top-article-categories/top-article-categories.component";
import { BadgeComponent } from "./components/badge/badge.component";
import { TruncatePipe } from "./pipes/truncate.pipe";

@NgModule({
  declarations: [
    SidebarComponent,
    TruncatePipe,
    SocialComponent,
    TopArticleCategoriesComponent,
    CategorieComponent,
    BadgeComponent
  ],
  imports:[
    CommonModule
  ],
  exports:[
    SidebarComponent,
    TruncatePipe,
    BadgeComponent
  ]
})

export class SharedModule{}