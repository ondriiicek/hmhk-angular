import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Article } from '../shared/models/article.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService{
  private articles : Article[] = [];
  articleSubject = new Subject<Article[]>();

  constructor() {}

  //vyberie 4 najnovsie clanky, pole je usporiadanie podla datumu
  getMostRecentArticles( articles : Article[] ) : Article[] {
    
    //subscribe na subject vykonavam v most-read komponente, akonahle sa stiahnu clanky posle ich tam
    this.articleSubject.next(articles);
    articles.sort((a : Article, b: Article) => {
      return <any>new Date(b.date) - <any>new Date(a.date);
    });

    return articles.splice(0,4);
  }

  //vrati iba nazvy najcitanejsich clankov, posiela do most-read komponentu
  //!Zatial nevracia najcitanejsie, neni tam pocet citatelov
  getMostReadArticleTitles( articles : Article[]) : string[]{
    let titles : string[] = [];
    articles.forEach( article => titles.push(article.title));
    titles.splice(0, 3);
    return titles;
  }

}
