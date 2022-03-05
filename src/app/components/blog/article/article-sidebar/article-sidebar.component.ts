import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/components/shared/models/article.model';
import { BlogService } from '../../blog.service';

@Component({
  selector: 'app-article-sidebar',
  templateUrl: './article-sidebar.component.html',
  styleUrls: ['./article-sidebar.component.scss']
})
export class ArticleSidebarComponent implements OnInit {
  @Input() id! : number;
  articlePreviews : Article[] = [];
  preview! : Article;
  index : number = 0;
  test = 'ahoj som marian majernik a mam vela rokov'

  constructor( private blogService : BlogService ) { }

  ngOnInit(): void {
    this.articlePreviews = this.blogService.pickRandomArticles(this.id);
    this.preview = this.articlePreviews[this.index];
  }

  onNextPreview(){

    if( this.index === 2 ) return;

    this.index++;
    this.preview = this.articlePreviews[this.index]; 
  }

  onPreviousPreview(){
    if( this.index === 0 ) return;

    this.index--;
    this.preview = this.articlePreviews[this.index];
  }

  getImage(){
    return "url('" + this.preview.previewImage + "')";
  }

}
