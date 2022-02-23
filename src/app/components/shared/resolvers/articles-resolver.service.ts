import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';
import { Article } from '../models/article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticlesResolverService implements Resolve<Article[]>{

  constructor( private dataService : DataService ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Article[] | Observable<Article[]> | Promise<Article[]> {
      return this.dataService.fetchArticles();
  }
}
