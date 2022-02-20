import { Injectable } from "@angular/core";
import { Article } from "../shared/article.model";
import { SharedService } from "../shared/shared.service";

@Injectable({
  providedIn: 'root'
})

export class BlogService{

  constructor( private sharedService : SharedService ){}

  getArticles(){
    return this.sharedService.getArticles();
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