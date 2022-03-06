import { Component, OnInit } from '@angular/core';
import { MatchStats } from '../../shared/models/matches-table.model';
import { MatchesService } from '../matches.service';

@Component({
  selector: 'app-table-body',
  templateUrl: './table-body.component.html',
  styleUrls: ['./table-body.component.scss']
})
export class TableBodyComponent implements OnInit {
  tableData : MatchStats[] = [];

  constructor( private matcheService : MatchesService ) { }

  ngOnInit(): void {
    this.tableData = this.matcheService.getMatchTable();
    
  }

}
