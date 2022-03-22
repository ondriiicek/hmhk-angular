export interface LeagueTable{
  id: number;
  rank: number;
  club: string;
  gamePlayed: number;
  win: number;
  lost: number;
  overtimeWin: number;
  shootoutWin: number;
  shootoutLost: number;
  overtimeLost: number;
  score: string;
  points: number;
}