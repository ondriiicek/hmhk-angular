import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DataService } from '../../shared/data.service';
import { Article } from '../../shared/models/article.model';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  article! : Article;
  isLoaded : boolean = false;

  constructor( private blogService : BlogService,
               private dataService : DataService,
               private route : ActivatedRoute ) { }

  ngOnInit(): void {
    this.dataService.fetchArticles().subscribe({
      next: articles => this.onInitSettings(articles)
    })
  }

  private onInitSettings( articles : Article[] ){
    const id = this.getId();
    this.article = this.blogService.getArticle(id, articles);
    this.isLoaded = true;
  }

  //ziska id clanku na ktory som klikol
  private getId(): number{
    let id : number;

    this.route.params.subscribe( 
      ( params : Params ) => {
        id = +params['id'];
      } 
    )
    
    return id!;
  }

}
