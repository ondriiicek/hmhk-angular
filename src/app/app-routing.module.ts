import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './components/blog/article/article.component';
import { BlogComponent } from './components/blog/blog.component';
import { PreviewPageComponent } from './components/blog/preview-page/preview-page.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { LeagueTableComponent } from './components/league-table/league-table.component';
import { MatchesComponent } from './components/matches/matches.component';
import { TableBodyComponent } from './components/matches/table-body/table-body.component';
import { ArticlesResolverService } from './components/shared/resolvers/articles-resolver.service';
import { ContactsResolverService } from './components/shared/resolvers/contacts-resolver.service';
import { MatchesSeniorResolverService } from './components/shared/resolvers/ended-matches/matches-senior-resolver.service';
import { MatchesU12ResolverService } from './components/shared/resolvers/ended-matches/matches-u12-resolver.service';
import { MatchesU17ResolverService } from './components/shared/resolvers/ended-matches/matches-u17-resolver.service';
import { MatchesU20ResolverService } from './components/shared/resolvers/ended-matches/matches-u20-resolver.service';
import { LeagueTableU12Resolver } from './components/shared/resolvers/league-table/league-table-U12.resolver';
import { LeagueTableU17Resolver } from './components/shared/resolvers/league-table/league-table-U17.resolver';
import { LeaugueTableU20Resolver } from './components/shared/resolvers/league-table/league-table-U20.resolver';
import { LeagueTableResolver } from './components/shared/resolvers/league-table/league-table.resolver';
import { ScheduleSeniorResolverService } from './components/shared/resolvers/schedule/schedule-senior-resolver.service';
import { ScheduleU12ResolverService } from './components/shared/resolvers/schedule/schedule-u12-resolver.service';
import { ScheduleU17ResolverService } from './components/shared/resolvers/schedule/schedule-u17-resolver.service';
import { ScheduleU20ResolverService } from './components/shared/resolvers/schedule/schedule-u20-resolver.service';
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
  { path: 'odohrate-zapasy', component: MatchesComponent,
    children:[
      { path: '', redirectTo: 'muzi', pathMatch: 'full'},
      { path: 'U12', component: TableBodyComponent, resolve: [MatchesU12ResolverService] },
      { path: 'U17', component: TableBodyComponent, resolve: [MatchesU17ResolverService] },
      { path: 'U20', component: TableBodyComponent, resolve: [MatchesU20ResolverService] },
      { path: 'muzi', component: TableBodyComponent, resolve: [MatchesSeniorResolverService] },
      { path: 'tabulka', component: LeagueTableComponent }
    ]
  },
  { path: 'rozpis-zapasov', component: MatchesComponent,
    children:[
      { path: '', redirectTo: 'muzi', pathMatch: 'full'},
      { path: 'U12', component: TableBodyComponent, resolve: [ScheduleU12ResolverService] },
      { path: 'U17', component: TableBodyComponent, resolve: [ScheduleU17ResolverService] },
      { path: 'U20', component: TableBodyComponent, resolve: [ScheduleU20ResolverService] },
      { path: 'muzi', component: TableBodyComponent, resolve: [ScheduleSeniorResolverService] },
    ]
  },
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
