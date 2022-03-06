import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './components/blog/article/article.component';
import { BlogComponent } from './components/blog/blog.component';
import { PreviewPageComponent } from './components/blog/preview-page/preview-page.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { MatchesComponent } from './components/matches/matches.component';
import { TableBodyComponent } from './components/matches/table-body/table-body.component';
import { ArticlesResolverService } from './components/shared/resolvers/articles-resolver.service';
import { ContactsResolverService } from './components/shared/resolvers/contacts-resolver.service';
import { MatchesSeniorResolverService } from './components/shared/resolvers/matches-senior-resolver.service';
import { MatchesU12ResolverService } from './components/shared/resolvers/matches-u12-resolver.service';
import { MatchesU17ResolverService } from './components/shared/resolvers/matches-u17-resolver.service';
import { MatchesU20ResolverService } from './components/shared/resolvers/matches-u20-resolver.service';
import { TournamentsComponent } from './components/tournaments/tournaments.component';

const routes: Routes = [
  { path: '', redirectTo: 'domov', pathMatch: 'full'},
  { path: 'domov', component: HomeComponent, resolve: [ArticlesResolverService] },
  { path: 'blog', component: BlogComponent, resolve: [ArticlesResolverService],
    children:[
      { path: '', component: PreviewPageComponent, pathMatch: 'full' },
      { path: ':id', component: ArticleComponent }
    ] 
  },
  { path: 'kategorie', component: CategoriesComponent},
  { path: 'kontakt', component: ContactComponent, resolve: [ContactsResolverService]},
  { path: 'zapasy', component: MatchesComponent,
    children:[
      { path: '', redirectTo: 'muzi', pathMatch: 'full'},
      { path: 'U12', component: TableBodyComponent, resolve: [MatchesU12ResolverService] },
      { path: 'U17', component: TableBodyComponent, resolve: [MatchesU17ResolverService]},
      { path: 'U20', component: TableBodyComponent, resolve: [MatchesU20ResolverService]},
      { path: 'muzi', component: TableBodyComponent, resolve: [MatchesSeniorResolverService] }
    ]
  },
  { path: 'turnaje', component: TournamentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
