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
  fullTable : MatchStats[] = [];

  isFullyLoad : boolean = false;
  isLong : boolean = false;

  constructor( private matchesService : MatchesService ) { }

  ngOnInit(): void {
    this.tableData = this.handleTable();
  }

  //po kliknuti na viac vypise celu tabulku
  //po kliknuti na menej vypise tabulku s piatimi zapasmi
  //TODO: ach asi to bude treba zmenit
  toggleTable(){
    this.isFullyLoad = !this.isFullyLoad;
    this.tableData.splice(0, this.tableData.length);

    if( this.isFullyLoad ){
      this.tableData = this.fullTable;
    }
    else{
      this.tableData = this.handleTable();
    }
    //this.tableData.splice(0, this.tableData.length, ...this.fullTable);
  }

  //ak sa v tabulke nachadza viac ako 5 zapasov vrati skratenu tabulku
  private handleTable(): MatchStats[]{
    this.fullTable = this.matchesService.getMatchTable();

    if( this.fullTable.length > 5 ) {
      this.isLong = true;
      return this.matchesService.getShortenTable();
    }

    return this.fullTable;
  }
}
