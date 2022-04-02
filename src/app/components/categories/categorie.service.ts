import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class CategorieService{
  private allCategories : { id : number, title: string }[] = [
    {
      id: 1,
      title: 'U12'
    },
    {
      id: 2,
      title: 'U17'
    },
    {
      id: 3,
      title: 'U20'
    },
    {
      id: 4,
      title: 'Muži'
    },
  ]

  getAllCategories(){
    return this.allCategories.slice();
  }
}