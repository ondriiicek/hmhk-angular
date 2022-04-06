import { Injectable } from '@angular/core';
import { DataService } from '../shared/data.service';
import { Article } from '../shared/models/article.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService{

  constructor() {}
  
  //vyberie 4 najnovsie clanky, pole je usporiadanie podla datumu
  getMostRecentArticles( articles : Article[] ) : Article[] {
    articles.sort((a : Article, b: Article) => {
      return <any>new Date(b.date) - <any>new Date(a.date);
    });

    return articles.splice(0,4);
  }
}
