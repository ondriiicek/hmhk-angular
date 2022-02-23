import { Injectable } from "@angular/core";
import { Article } from "../shared/models/article.model";
import { DataService } from "../shared/data.service";

@Injectable({
  providedIn: 'root'
})

export class BlogService{

  constructor( private dataService : DataService ){}

  getArticles(){
    return this.dataService.getArticles();
  }

  getArticle( id : number ) : Article{
    const articles = this.getArticles();
    let currentArticle : Article;

    articles.forEach( 
      article => {
        if( article.id === id ) currentArticle = article;
      }
    )

    return currentArticle!;
  }
}