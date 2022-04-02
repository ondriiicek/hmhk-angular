import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LeagueTableComponent } from "../league-table/league-table.component";
import { MatchesSeniorResolverService } from "../shared/resolvers/ended-matches/matches-senior-resolver.service";
import { MatchesU12ResolverService } from "../shared/resolvers/ended-matches/matches-u12-resolver.service";
import { MatchesU17ResolverService } from "../shared/resolvers/ended-matches/matches-u17-resolver.service";
import { MatchesU20ResolverService } from "../shared/resolvers/ended-matches/matches-u20-resolver.service";
import { ScheduleSeniorResolverService } from "../shared/resolvers/schedule/schedule-senior-resolver.service";
import { ScheduleU12ResolverService } from "../shared/resolvers/schedule/schedule-u12-resolver.service";
import { ScheduleU17ResolverService } from "../shared/resolvers/schedule/schedule-u17-resolver.service";
import { ScheduleU20ResolverService } from "../shared/resolvers/schedule/schedule-u20-resolver.service";
import { MatchesComponent } from "./matches.component";
import { TableBodyComponent } from "./table-body/table-body.component";

const routes: Routes = [
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
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MatchesRoutingModule{}