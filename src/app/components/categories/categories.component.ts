import { Component, OnInit } from '@angular/core';
import { CategorieService } from './categorie.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categories : { id : number, title: string }[] = [];

  constructor( private categorieService : CategorieService ) { }

  ngOnInit(): void {
    this.categories = this.categorieService.getAllCategories();
  }

}
