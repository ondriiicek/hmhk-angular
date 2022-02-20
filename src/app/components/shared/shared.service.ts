import { Injectable } from "@angular/core";
import { ArticleDataService } from "./article-data.service";
import { Article } from "./article.model";

@Injectable({
  providedIn: 'root'
})

export class SharedService{

  constructor( private articleDataService : ArticleDataService ){}

  getArticles(){
    return this.articleDataService.getArticles();
  }
  getTitles() : string[]{
    const titles : string[] = [];
    const articles : Article[] = this.articleDataService.getArticles().slice();
    articles.forEach( title => titles.push(title.title));
    return titles;
  }
}