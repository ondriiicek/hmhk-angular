export class Team{
  public name : string;
  public goals : number | string;

  constructor( name : string, goals : number | string ){
    this.name = name;
    this.goals = goals;
  }
}