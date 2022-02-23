import { Injectable } from '@angular/core';
import { DataService } from '../shared/data.service';
import { Article } from '../shared/models/article.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  articles : Article[] = [];
  previews : Article[] = [];

  constructor( private dataService : DataService ) { }

  getArticles(){
    this.articles = this.dataService.getArticles();
    return this.articles.slice();
  }

  getPreviews(){
    
  }
}
