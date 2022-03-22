import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { LeagueTable } from '../shared/models/league-table.model';

@Component({
  selector: 'app-league-table',
  templateUrl: './league-table.component.html',
  styleUrls: ['./league-table.component.scss']
})
export class LeagueTableComponent implements OnInit {
  leagueTable : LeagueTable[] = [];

  constructor( private dataService : DataService ) { }

  ngOnInit(): void {
    this.leagueTable = this.dataService.getLeagueTable();    
  }

}
