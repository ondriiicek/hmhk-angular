import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './components/blog/article/article.component';
import { BlogComponent } from './components/blog/blog.component';
import { PreviewPageComponent } from './components/blog/preview-page/preview-page.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { MatchesComponent } from './components/matches/matches.component';
import { TournamentsComponent } from './components/tournaments/tournaments.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'blog', component: BlogComponent, children:[
    { path: '', component: PreviewPageComponent, pathMatch: 'full' },
    { path: ':id', component: ArticleComponent }
  ] },
  { path: 'categories', component: CategoriesComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'matches', component: MatchesComponent},
  { path: 'tournaments', component: TournamentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
