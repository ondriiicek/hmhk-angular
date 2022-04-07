import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeService } from '../home.service';

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

  constructor( private homeService : HomeService,
               private router : Router,
               private route : ActivatedRoute ) { 
  }

  ngOnInit(): void {
    this.homeService.articleSubject.subscribe(
      articles => {
         //ziska nazvy najcitanejsich clankov, ktore zatial nesu najcitanejsie :)
         this.articleTitles = this.homeService.getMostReadArticleTitles(articles);
         //spusti interval
         this.showMostReadArticles();
      }
    )
  }
  
  toBlog(){
    this.router.navigate(['../blog'], {relativeTo: this.route});
  }
  
  //kazde tri sekundy ukaze iny najcitanejsi clanok
  private showMostReadArticles(){
    this.title = this.articleTitles[0];
    this.int = setInterval(() => {
      if( this.index === this.articleTitles.length ) this.index = 0;
      this.title = this.articleTitles[this.index];
      this.index++;
    }, 3000);
    
  }

  ngOnDestroy(): void {
    clearInterval(this.int);
  }
}
