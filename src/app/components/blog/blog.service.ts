import { Injectable } from "@angular/core";
import { Article } from "../shared/models/article.model";
import { DataService } from "../shared/data.service";

@Injectable({
  providedIn: 'root'
})

export class BlogService{
  articles : Article[] = [];

  constructor( private dataService : DataService ){}

  setArticles( articles : Article[]){
    console.log(articles);
    
    this.articles = articles;
  }

  //pre clanok, najde konkretny clanok na ktory klikol user podla id v url adrese
  getArticle( id : number ) : Article{
    const articles = this.articles;
    let currentArticle : Article;

    articles.forEach( 
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