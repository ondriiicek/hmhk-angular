import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../../shared/shared.service';

@Component({
  selector: 'app-most-read',
  templateUrl: './most-read.component.html',
  styleUrls: ['./most-read.component.scss']
})
export class MostReadComponent implements OnInit {
  articleTitles! : string[];
  title! : string;
  index : number = 1;
  int : any;

  constructor( private sharedService : SharedService,
               private router : Router,
               private route : ActivatedRoute ) { 
  }

  ngOnInit(): void {
    this.articleTitles = this.sharedService.getTitles();
    this.title = this.articleTitles[0];
    this.int = setInterval(() => {
      if( this.index === this.articleTitles.length ) this.index = 0;
      this.title = this.articleTitles[this.index];
      this.index++;
    }, 4000);
  }

  toBlog(){
    this.router.navigate(['../blog'], {relativeTo: this.route});
  }

  ngOnDestroy(): void {
    clearInterval(this.int);
  }
}
