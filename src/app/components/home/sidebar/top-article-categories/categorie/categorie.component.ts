import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.scss']
})
export class CategorieComponent implements OnInit {
  @Input() categoryName! : string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
