import { Injectable } from '@angular/core';
import { DataService } from '../shared/data.service';
import { Article } from '../shared/models/article.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService{
  articles : Article[] = [];
  previews : Article[] = [];

  constructor( private dataService : DataService ) {
    this.articles = this.dataService.getArticles();
   }
  

  //vyberie 4 najnovsie clanky, pole je usporiadanie podla datumu
  getMostRecentArticles(){
    const mostRecent : Article[] = this.articles.slice();
    return mostRecent.splice(0,4);
  }
}
