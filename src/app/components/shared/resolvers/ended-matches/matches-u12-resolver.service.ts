import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../../data.service';
import { MatchStats } from '../../models/matches-table.model';

@Injectable({
  providedIn: 'root'
})
export class MatchesU12ResolverService implements Resolve<MatchStats[]>{

  constructor( private dataService : DataService ) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MatchStats[] | Observable<MatchStats[]> | Promise<MatchStats[]> {
    return this.dataService.fetchMatches('http://localhost:3000/end-U12');
  }
}
