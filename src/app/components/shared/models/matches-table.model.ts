import { Team } from "./teams.model";


export interface MatchStats{
  status : string;
  homeTeam : Team;
  awayTeam : Team; 
  date? : Date;
}