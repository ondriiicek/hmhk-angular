import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/components/shared/models/article.model';

@Component({
  selector: 'app-article-content',
  templateUrl: './article-content.component.html',
  styleUrls: ['./article-content.component.scss']
})
export class ArticleContentComponent implements OnInit {
  @Input() article! : Article;

  constructor() { }

  ngOnInit(): void {
  }

}
