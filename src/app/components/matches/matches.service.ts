import { Injectable } from "@angular/core";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { filter } from "rxjs/operators";
import { DataService } from "../shared/data.service";
import { MatchStats } from "../shared/models/matches-table.model";

@Injectable({
  providedIn: 'root'
})

export class MatchesService {
  matchTable : MatchStats[] = [];

  constructor( private dataService : DataService,
               private router : Router,
               private route : ActivatedRoute ){}

  //data ziskame podla url adresy, tym ze sa spusti resolver pre danu routu potom sa z data servicu posle tabulka pre urcitu kategoriu
  getMatchTable() : MatchStats[]{
    this.matchTable = this.dataService.getMatchTable();
    return this.matchTable;
  }

  getCategorie(){
    let currentRoute = this.router.url;
    const splitedRoute = currentRoute.split('/');
    
    currentRoute = splitedRoute[splitedRoute.length - 1];
    if( currentRoute === 'muzi' ) currentRoute = 'Muži';

    return currentRoute;
    
  }

}




















// table : MatchStats[] = [
  //   {
  //     status : 'Koniec',
  //     homeTeam : new Team('Hmhk Vranov', 5),
  //     awayTeam : new Team('Kometa Vrutky', 1)
  //   },
  //   {
  //     status : 'Koniec',
  //     homeTeam : new Team('Hmhk Vranov', 0),
  //     awayTeam : new Team('Pruske', 2)
  //   },
  //   {
  //     status : 'Koniec',
  //     homeTeam : new Team('Svidnik', 2),
  //     awayTeam : new Team('Hmhk Vranov', 6)
  //   }
  // ]