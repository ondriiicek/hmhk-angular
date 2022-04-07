import { Injectable } from "@angular/core";
import { Article } from "./models/article.model";
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs/operators";
import { Contact } from "./models/contact.model";
import { ArticleContent } from "./models/article-content.model";
import { MatchStats } from "./models/matches-table.model";
import { LeagueTable } from "./models/league-table.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class DataService{
  private articles : Article[] = [];
  private contacts : Contact[] = [];
  private matchTable : MatchStats[] = [];
  private leagueTable : LeagueTable[] = [];

  constructor( private http : HttpClient ){}

  getArticles(){    
    return this.articles.slice();
  }

  getContacts(){
    return this.contacts.slice();
  }

  getMatchTable(){
    return this.matchTable.slice();
  }

  getLeagueTable(){
    return this.leagueTable.slice();
  }

  //vsetky clanky pre blog
  fetchArticles(){
    const url = 'https://hmhk-4b0d7-default-rtdb.firebaseio.com/articles.json';

    return this.http.get<Article[]>(url).pipe(
      tap( 
        articles => {
          this.articles = articles;          
        }
      )
    );
  }

  //Kontakty pre contact page
  fetchContacts(): Observable<Contact[]>{
    const url ='https://hmhk-4b0d7-default-rtdb.firebaseio.com/contacts.json';

    return this.http.get<Contact[]>(url);
  }

  //Odohrate zapasy, natiahne ich resolver pre danu kategoriu
  fetchMatches( url : string ){
    return this.http.get<MatchStats[]>(url).pipe(
      tap( table => {
        this.handleMatchTable(table);
      })
    )
  }

  //Program zapasov, natiahne ich resolver pre danu kategoriu
  fetchSchedule( url : string ){
    return this.http.get<MatchStats[]>(url).pipe(
      tap( table => {
        this.handleMatchTable(table);
      })
    )
  }

  //Ligova tabulka, natiahne ju resolver pre danu kategoriu
  fetchLeagueTable( url : string ){
    return this.http.get<LeagueTable[]>(url).pipe(
      tap( leagueTable => {
        this.handleLeaugueTable(leagueTable)
      })
    );
  }

  /*
    TODO: Spojit handleMatchTable a handelLeagueTable do jednej funkcie
  */
  private handleMatchTable( responseTableData : MatchStats[] ){
    if( this.matchTable.length > 0 ){
      this.matchTable.splice(0,this.matchTable.length);
    }
    this.matchTable = responseTableData;
  }

  private handleLeaugueTable( responseTableData : LeagueTable[] ){
    if( this.leagueTable.length > 0 ){
      this.leagueTable.splice(0,this.leagueTable.length);
    }
    this.leagueTable = responseTableData;
  }

  //preusporiada, clanok ktory je najnovsi (datumovo) bude v poli prvy
  private sortByDate( articles : Article[] ){
    return articles.sort((a : Article, b: Article) => {
      return <any>new Date(b.date) - <any>new Date(a.date);
    });
  }
}
