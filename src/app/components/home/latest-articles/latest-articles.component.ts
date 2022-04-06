import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/data.service';
import { Article } from '../../shared/models/article.model';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-latest-articles',
  templateUrl: './latest-articles.component.html',
  styleUrls: ['./latest-articles.component.scss']
})
export class LatestArticlesComponent implements OnInit {
  articles : Article[] = [];

  constructor( private homeService : HomeService,
               private dataService : DataService ) { }

  ngOnInit(): void {
    this.dataService.fetchArticles().subscribe(
      data => this.articles = this.homeService.getMostRecentArticles(data)
    )
    
  }
}
