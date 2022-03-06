import { Component, OnInit } from '@angular/core';
import { MatchesService } from '../matches.service';

@Component({
  selector: 'app-table-head',
  templateUrl: './table-head.component.html',
  styleUrls: ['./table-head.component.scss']
})
export class TableHeadComponent implements OnInit {
  categorie! : string;

  constructor( private matchesService : MatchesService ) { }

  ngOnInit(): void {
    this.categorie = this.matchesService.getCategorie();
  }

}
