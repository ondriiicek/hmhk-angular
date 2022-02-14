import { Component, OnInit } from '@angular/core';
import { ArticlePreview } from '../../shared/article-preview.model';
import { SharedService } from '../../shared/shared.service';

@Component({
  selector: 'app-latest-articles',
  templateUrl: './latest-articles.component.html',
  styleUrls: ['./latest-articles.component.scss']
})
export class LatestArticlesComponent implements OnInit {
  articles : ArticlePreview[] = [];

  constructor( private sharedService : SharedService ) { }

  ngOnInit(): void {
    this.articles = this.sharedService.getArticles();
  }

}
