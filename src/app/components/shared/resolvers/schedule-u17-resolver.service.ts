import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';
import { MatchStats } from '../models/matches-table.model';

@Injectable({
  providedIn: 'root'
})
export class ScheduleU17ResolverService {
  
  constructor( private dataService : DataService ) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MatchStats[] | Observable<MatchStats[]> | Promise<MatchStats[]> {
    return this.dataService.fetchScheduleU17();
  }
}
