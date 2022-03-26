import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { DataService } from "../../data.service";
import { LeagueTable } from "../../models/league-table.model";

@Injectable({
  providedIn: 'root'
})

export class LeagueTableU17Resolver implements Resolve<LeagueTable[]>{
  constructor( private dataService : DataService ){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): LeagueTable[] | Observable<LeagueTable[]> | Promise<LeagueTable[]> {
    return this.dataService.fetchLeagueTable('http://localhost:3000/tabulka-U17');
  }

}