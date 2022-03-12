import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sub-nav',
  templateUrl: './sub-nav.component.html',
  styleUrls: ['./sub-nav.component.scss'],
})
export class SubNavComponent implements OnInit {
  @Input() linksContent! : string[];

  constructor( private route : ActivatedRoute,
               private router : Router ) { }

  ngOnInit(): void {
  }

  onNavigate( link : string ){
    let parse = link.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    const newRoute = parse.split(' ').join('-').toLowerCase();
    this.router.navigate([newRoute], {relativeTo: this.route});
  }

}
