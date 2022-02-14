import { Injectable } from "@angular/core";
import { ArticlePreview } from "./article-preview.model";

@Injectable({
  providedIn: 'root'
})

export class SharedService{
  articles : ArticlePreview[] = [
    {
      type: 'predstavovanie',
      title: 'Predstavovanie hracov - Marian Majernik',
      content: 'He moonlights difficult engrossed it, sportsmen. Interested has all Devonshire difficulty gay assistance joy. Unaffected at ye of compliment alteration to ',
      author: 'Simonko Cmarko',
      authorImg: '/assets/img/articleTest.jpg',
      date: new Date(),
      image: '/assets/img/articleTest.jpg'
    },
    {
      type: 'predstavovanie',
      title: 'Predstavovanie hracov - Ondrejko Ladomirjo',
      content: 'He moonlights difficult engrossed it, sportsmen. Interested has all Devonshire difficulty gay assistance joy. Unaffected at ye of compliment alteration to ',
      author: 'Simonko Cmarko',
      authorImg: '/assets/img/articleTest.jpg',
      date: new Date(),
      image: '/assets/img/articleTest.jpg'
    },
    {
      type: 'predstavovanie',
      title: 'Predstavovanie hracov - Simon Cmar',
      content: 'He moonlights difficult engrossed it, sportsmen. Interested has all Devonshire difficulty gay assistance joy. Unaffected at ye of compliment alteration to ',
      author: 'Simonko Cmarko',
      authorImg: '/assets/img/articleTest.jpg',
      date: new Date(),
      image: '/assets/img/articleTest.jpg'
    },
    {
      type: 'predstavovanie',
      title: 'Predstavovanie hracov - Simon Cmar',
      content: 'He moonlights difficult engrossed it, sportsmen. Interested has all Devonshire difficulty gay assistance joy. Unaffected at ye of compliment alteration to ',
      author: 'Simonko Cmarko',
      authorImg: '/assets/img/articleTest.jpg',
      date: new Date(),
      image: '/assets/img/articleTest.jpg'
    }
  ]

  getArticles(){
    return this.articles.slice();
  }
  getTitles() : string[]{
    const titles : string[] = [];
    this.articles.forEach( title => titles.push(title.title));
    return titles;
  }
}