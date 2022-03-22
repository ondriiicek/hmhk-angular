import { Injectable } from '@angular/core';
import { DataService } from '../../data.service';
import { LeagueTable } from '../../models/league-table.model';
import { Observable } from 'rxjs';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class LeagueTableResolver implements Resolve<LeagueTable[]> {
  constructor( private dataService : DataService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): LeagueTable[] | Observable<LeagueTable[]> | Promise<LeagueTable[]> {
    return this.dataService.fetchSeniorTable();
  }
}
