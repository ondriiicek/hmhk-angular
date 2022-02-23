import { Component, OnInit } from '@angular/core';
import { Article } from '../../shared/models/article.model';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-preview-page',
  templateUrl: './preview-page.component.html',
  styleUrls: ['./preview-page.component.scss']
})
export class PreviewPageComponent implements OnInit {
  previews : Article[] = [];

  constructor( private blogService : BlogService ) { }

  ngOnInit(): void {
    this.previews = this.blogService.getArticles();
  }

}
