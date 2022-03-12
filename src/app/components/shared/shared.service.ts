import { Injectable } from "@angular/core";
import { DataService } from "./data.service";
import { Article } from "./models/article.model";

@Injectable({
  providedIn: 'root'
})

export class SharedService{

  constructor( private dataService : DataService ){}
  getTitles() : string[]{
    const titles : string[] = [];
    const articles : Article[] = this.dataService.getArticles().slice();
    articles.forEach( title => titles.push(title.title));
    return titles;
  }
  
}