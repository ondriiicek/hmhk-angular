import { Component, OnInit } from '@angular/core';
import { Article } from '../../shared/article.model';
import { SharedService } from '../../shared/shared.service';

@Component({
  selector: 'app-latest-articles',
  templateUrl: './latest-articles.component.html',
  styleUrls: ['./latest-articles.component.scss']
})
export class LatestArticlesComponent implements OnInit {
  articles : Article[] = [];
  content! : string;

  constructor( private sharedService : SharedService ) { }

  ngOnInit(): void {
    this.articles = this.sharedService.getArticles();
    console.log(this.articles[0].content[1].content);
    
  }
}
