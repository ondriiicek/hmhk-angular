import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { ArticleContentComponent } from "./article/article-content/article-content.component";
import { ArticleFooterComponent } from "./article/article-footer/article-footer.component";
import { ArticleHeaderComponent } from "./article/article-header/article-header.component";
import { ArticleSidebarComponent } from "./article/article-sidebar/article-sidebar.component";
import { ArticleComponent } from "./article/article.component";
import { BlogComponent } from "./blog.component";
import { PreviewPageComponent } from "./preview-page/preview-page.component";
import { PreviewComponent } from "./preview-page/preview/preview.component";

@NgModule({
  declarations:[
    BlogComponent,
    ArticleComponent,
    PreviewPageComponent,
    ArticleContentComponent,
    ArticleFooterComponent,
    ArticleHeaderComponent,
    ArticleSidebarComponent,
    PreviewComponent,
    PreviewPageComponent
  ],
  imports:[
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: '', component: BlogComponent,
        children:[
          { path: '', component: PreviewPageComponent, pathMatch: 'full' },
          { path: ':id', component: ArticleComponent }
        ] 
      }
    ])
  ]
})

export class BlogModule{}