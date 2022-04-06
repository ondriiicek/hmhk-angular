import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/data.service';
import { Article } from '../../shared/models/article.model';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-preview-page',
  templateUrl: './preview-page.component.html',
  styleUrls: ['./preview-page.component.scss']
})
export class PreviewPageComponent implements OnInit {
  previews : Article[] = [];

  constructor( private blogService : BlogService,
               private dataService : DataService ) { }

  ngOnInit(): void {
    this.dataService.fetchArticles().subscribe(
      articles =>{
        this.previews = articles
        this.blogService.setArticles(articles);
      } 
    )
  }

}
