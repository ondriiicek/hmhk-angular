import { Component, OnInit } from '@angular/core';
import { MatchStats } from '../shared/models/matches-table.model';
import { Team } from '../shared/models/teams.model';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss']
})
export class MatchesComponent implements OnInit {
  table : MatchStats[] = [
    {
      status : 'Koniec',
      homeTeam : new Team('Hmhk bauska Vranov U12', 5),
      awayTeam : new Team('Humenske Levicata U12', 2)
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
