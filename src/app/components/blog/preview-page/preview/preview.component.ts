import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/components/shared/article.model';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {
  @Input() preview! : Article;

  constructor( private router : Router,
               private route : ActivatedRoute ) { }

  ngOnInit(): void {
  }

  showArticle(){
    this.router.navigate([this.preview.id], {relativeTo: this.route });
    
  }
}
