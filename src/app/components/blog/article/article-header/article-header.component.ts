import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/components/shared/models/article.model';

@Component({
  selector: 'app-article-header',
  templateUrl: './article-header.component.html',
  styleUrls: ['./article-header.component.scss']
})
export class ArticleHeaderComponent implements OnInit {
  @Input() article! : Article;

  constructor() { }

  ngOnInit(): void {
  }

  getImage(){
    return "url('" + this.article.previewImage + "')";
  }
}
