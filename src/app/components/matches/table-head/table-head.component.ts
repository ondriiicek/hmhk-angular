import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchesService } from '../matches.service';

@Component({
  selector: 'app-table-head',
  templateUrl: './table-head.component.html',
  styleUrls: ['./table-head.component.scss']
})
export class TableHeadComponent implements OnInit {
  categorie! : string;

  constructor( private matchesService : MatchesService,
               private router : Router ) { }

  ngOnInit(): void {
    this.categorie = this.matchesService.getCategorie();
  }

  showLeagueTable(){
    this.router.navigate(['tabulka'])
  }

}
