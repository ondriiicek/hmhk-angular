import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Article } from '../../shared/article.model';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  article! : Article;

  constructor( private blogService : BlogService,
               private route : ActivatedRoute ) { }

  ngOnInit(): void {
    this.route.params.subscribe( 
      ( params : Params ) => {
        const id = +params['id'];
        this.article = this.blogService.getArticle(id);
      }
    )
  }

}
