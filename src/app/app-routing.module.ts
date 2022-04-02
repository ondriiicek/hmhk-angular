import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './components/blog/article/article.component';
import { BlogComponent } from './components/blog/blog.component';
import { PreviewPageComponent } from './components/blog/preview-page/preview-page.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { LeagueTableComponent } from './components/league-table/league-table.component';
import { ArticlesResolverService } from './components/shared/resolvers/articles-resolver.service';
import { ContactsResolverService } from './components/shared/resolvers/contacts-resolver.service';
import { LeagueTableU12Resolver } from './components/shared/resolvers/league-table/league-table-U12.resolver';
import { LeagueTableU17Resolver } from './components/shared/resolvers/league-table/league-table-U17.resolver';
import { LeaugueTableU20Resolver } from './components/shared/resolvers/league-table/league-table-U20.resolver';
import { LeagueTableResolver } from './components/shared/resolvers/league-table/league-table.resolver';
import { TournamentsComponent } from './components/tournaments/tournaments.component';

const routes: Routes = [
  { path: '', redirectTo: 'domov', pathMatch: 'full'},
  { path: 'domov', component: HomeComponent, resolve: [ArticlesResolverService] },
  { path: 'kategorie', component: CategoriesComponent},
  { path: 'kontakt', component: ContactComponent, resolve: [ContactsResolverService]},
  { path: 'turnaje', component: TournamentsComponent},
  { path: 'tabulka-muzi', component: LeagueTableComponent, resolve: [LeagueTableResolver] },
  { path: 'tabulka-U12', component: LeagueTableComponent, resolve: [LeagueTableU12Resolver] },
  { path: 'tabulka-U17', component: LeagueTableComponent, resolve: [LeagueTableU17Resolver] },
  { path: 'tabulka-U20', component: LeagueTableComponent, resolve: [LeaugueTableU20Resolver] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
