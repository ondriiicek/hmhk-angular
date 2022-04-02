import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-categorie-preview',
  templateUrl: './categorie-preview.component.html',
  styleUrls: ['./categorie-preview.component.scss']
})
export class CategoriePreviewComponent implements OnInit {
  @Input() categorieInfo! : {id: number, title : string};
  constructor() { }

  ngOnInit(): void {
  }

}
