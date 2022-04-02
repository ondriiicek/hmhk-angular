import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './components/categories/categories.component';
import { LeagueTableComponent } from './components/league-table/league-table.component';
import { LeagueTableU12Resolver } from './components/shared/resolvers/league-table/league-table-U12.resolver';
import { LeagueTableU17Resolver } from './components/shared/resolvers/league-table/league-table-U17.resolver';
import { LeaugueTableU20Resolver } from './components/shared/resolvers/league-table/league-table-U20.resolver';
import { LeagueTableResolver } from './components/shared/resolvers/league-table/league-table.resolver';
import { TournamentsComponent } from './components/tournaments/tournaments.component';

const routes: Routes = [
  { path: '', redirectTo: 'domov', pathMatch: 'full'},
  { path: 'domov', loadChildren: () => import('./components/home/home.module').then(module => module.HomeModule)},
  { path: 'blog', loadChildren: () => import('./components/blog/blog.module').then(module => module.BlogModule)},
  { path: 'odohrate-zapasy', loadChildren: () => import('./components/matches/matches.module').then(module => module.MatchesModule)},
  { path: 'kontakt', loadChildren: () => import('./components/contact/contact.module').then(module => module.ContactModule)},

  //To este neviem jak bude
  { path: 'turnaje', component: TournamentsComponent},
  { path: 'kategorie', component: CategoriesComponent},
  { path: 'tabulka-muzi', component: LeagueTableComponent, resolve: [LeagueTableResolver] },
  { path: 'tabulka-U12', component: LeagueTableComponent, resolve: [LeagueTableU12Resolver] },
  { path: 'tabulka-U17', component: LeagueTableComponent, resolve: [LeagueTableU17Resolver] },
  { path: 'tabulka-U20', component: LeagueTableComponent, resolve: [LeaugueTableU20Resolver] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
