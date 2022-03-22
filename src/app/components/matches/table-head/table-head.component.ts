import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../shared/data.service';
import { MatchesService } from '../matches.service';

@Component({
  selector: 'app-table-head',
  templateUrl: './table-head.component.html',
  styleUrls: ['./table-head.component.scss']
})
export class TableHeadComponent implements OnInit {
  categorie! : string;

  constructor( private matchesService : MatchesService,
               private router : Router,
               private dataService : DataService ) { }

  ngOnInit(): void {
    this.categorie = this.matchesService.getCategorie();
  }

  showLeagueTable(){
    let categorie : string | string[] = this.router.url;
    categorie = categorie.split('/');
    categorie = categorie[categorie.length - 1];    
    categorie = 'tabulka-' + categorie;  
      
    this.router.navigate([categorie])
  }

}
