import { Injectable } from "@angular/core";
import { Article } from "../shared/models/article.model";
import { DataService } from "../shared/data.service";
import { ActivatedRoute, Params } from "@angular/router";

@Injectable({
  providedIn: 'root'
})

export class BlogService{
  articles : Article[] = [];
  constructor(){}

  setArticles( articles : Article[] ){
    this.articles = articles;
  }


  //pre clanok, najde konkretny clanok na ktory klikol user podla id v url adrese
  //tiez ulozi clanky, aby boli k dispozicii pre sidebar v clanku
  getArticle( id : number, articles : Article[] ) : Article{
    let currentArticle : Article;
    this.setArticles(articles);

    this.articles.forEach(
      article => {
        if( article.id === id ) currentArticle = article;
      }
    )

    return currentArticle!;
  }

  //pre sidebar v clanku, nahodne vybere tri clanky
  pickRandomArticles( id : number ): Article[]{
    let articles = this.articles;
    let randomArticles : Article[] = [];

    while( randomArticles.length < 3 ){
      let index =  Math.floor(Math.random() * (articles.length - 0));

      if( articles[index].id !== id ){
        randomArticles.push(articles[index]);
        articles.splice(index, 1);
      }

    }
    
    return randomArticles;
  }


}