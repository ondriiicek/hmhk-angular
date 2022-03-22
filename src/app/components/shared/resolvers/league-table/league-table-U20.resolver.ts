import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { DataService } from "../../data.service";
import { LeagueTable } from "../../models/league-table.model";

@Injectable({
  providedIn: 'root'
})

export class LeaugueTableU20Resolver implements Resolve<LeagueTable[]>{
  constructor( private dateService : DataService ){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): LeagueTable[] | Observable<LeagueTable[]> | Promise<LeagueTable[]> {
    return this.dateService.fetchTableU20();
  }

}