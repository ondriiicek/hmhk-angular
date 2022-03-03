import { Injectable } from "@angular/core";
import { Article } from "./models/article.model";
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs/operators";
import { Contact } from "./models/contact.model";
import { ArticleContent } from "./models/article-content.model";

@Injectable({
  providedIn: 'root'
})

export class DataService{
  private articles : Article[] = [];
  private contacts : Contact[] = [];

  constructor( private http : HttpClient ){}

  getArticles(){
    return this.articles.slice();
  }

  getContacts(){
    return this.contacts.slice();
  }

  fetchArticles(){
    const url = 'https://hmhk-4b0d7-default-rtdb.firebaseio.com/articles.json';

    return this.http.get<Article[]>(url).pipe(
      tap( articles => {
        this.articles = this.sortByDate(articles);
      })
    );
  }

  fetchContacts(){
    const url ='https://hmhk-4b0d7-default-rtdb.firebaseio.com/contacts.json';

    return this.http.get<Contact[]>(url).pipe(
      tap( contacts => {
        this.contacts = contacts;
      })
    )
  }

  //preusporiada, clanok ktory je najnovsi (datumovo) bude v poli prvy
  private sortByDate( articles : Article[] ){
    return articles.sort((a : Article, b: Article) => {
      return <any>new Date(b.date) - <any>new Date(a.date);
    });
  }

  // newArticles : Article[] =[
  // new Article(
  //     1,
  //     "Predstavovanie",
  //     "Predstavovanie hracov Matej Dzamba",
  //     "Ondrej Ladomirjak",
  //     new Date(),
  //     [
  //       new ArticleContent( 'Kedy a prečo si začal s hokejbalom ? '),

  //       new ArticleContent( 
  //         'Hokejbal som hrával už dlhšiu dobu vo voľnom čase s kamarátmi a približne pred 2-3 rokmi za mnou prišiel Maximilián, či by som nemal záujem skúsiť popri hokeji hrať aj hokejbal vo Vranove a odvtedy ho hrávam aj súťažne. '
  //       ),

  //       new ArticleContent( 'Keďže si z Bardejova, nerozmýšľal si o inom hokejbalovom klube z východného Slovenska ? Alebo Vranov bol pre teba voľba číslo 1 ? '),

  //       new ArticleContent('Popravde som veľmi neriešil kde pôjdem. Zo začiatku som bral hokejbal len ako doplnok k hokeju a keďže do Vranova išli aj viacerí spoluhráči z Bardejova, tak som ani nad inými tímami nerozmýšľal. '
  //       ),

  //       new ArticleContent( 'Kedy a prečo si začal s hokejbalom ? '),

  //       new ArticleContent( 
  //         'Hokejbal som hrával už dlhšiu dobu vo voľnom čase s kamarátmi a približne pred 2-3 rokmi za mnou prišiel Maximilián, či by som nemal záujem skúsiť popri hokeji hrať aj hokejbal vo Vranove a odvtedy ho hrávam aj súťažne. '
  //       ),

  //       new ArticleContent( 'Keďže si z Bardejova, nerozmýšľal si o inom hokejbalovom klube z východného Slovenska ? Alebo Vranov bol pre teba voľba číslo 1 ? '),

  //       new ArticleContent('Popravde som veľmi neriešil kde pôjdem. Zo začiatku som bral hokejbal len ako doplnok k hokeju a keďže do Vranova išli aj viacerí spoluhráči z Bardejova, tak som ani nad inými tímami nerozmýšľal. '
  //       ),

  //       new ArticleContent( 'Kedy a prečo si začal s hokejbalom ? '),

  //       new ArticleContent( 
  //         'Hokejbal som hrával už dlhšiu dobu vo voľnom čase s kamarátmi a približne pred 2-3 rokmi za mnou prišiel Maximilián, či by som nemal záujem skúsiť popri hokeji hrať aj hokejbal vo Vranove a odvtedy ho hrávam aj súťažne. '
  //       ),

  //       new ArticleContent( 'Keďže si z Bardejova, nerozmýšľal si o inom hokejbalovom klube z východného Slovenska ? Alebo Vranov bol pre teba voľba číslo 1 ? '),

  //       new ArticleContent('Popravde som veľmi neriešil kde pôjdem. Zo začiatku som bral hokejbal len ako doplnok k hokeju a keďže do Vranova išli aj viacerí spoluhráči z Bardejova, tak som ani nad inými tímami nerozmýšľal. '
  //       )
  //     ],
  //     "/assets/img/articleTest.jpg",
  //     "/assets/img/articleTest.jpg",
  //   ),

  //   new Article(
  //     2,
  //     "Zapas",
  //     "Predstavovanie hracov Simon Cmar",
  //     "marian",
  //     new Date(),
  //     [
  //       new ArticleContent( 'Kedy a prečo si začal s hokejbalom ? '),

  //       new ArticleContent( 
  //         'Hokejbal som hrával už dlhšiu dobu vo voľnom čase s kamarátmi a približne pred 2-3 rokmi za mnou prišiel Maximilián, či by som nemal záujem skúsiť popri hokeji hrať aj hokejbal vo Vranove a odvtedy ho hrávam aj súťažne. '
  //       ),

  //       new ArticleContent( 'Keďže si z Bardejova, nerozmýšľal si o inom hokejbalovom klube z východného Slovenska ? Alebo Vranov bol pre teba voľba číslo 1 ? '),

  //       new ArticleContent('Popravde som veľmi neriešil kde pôjdem. Zo začiatku som bral hokejbal len ako doplnok k hokeju a keďže do Vranova išli aj viacerí spoluhráči z Bardejova, tak som ani nad inými tímami nerozmýšľal. '
  //       ),

  //       new ArticleContent( 'Kedy a prečo si začal s hokejbalom ? '),

  //       new ArticleContent( 
  //         'Hokejbal som hrával už dlhšiu dobu vo voľnom čase s kamarátmi a približne pred 2-3 rokmi za mnou prišiel Maximilián, či by som nemal záujem skúsiť popri hokeji hrať aj hokejbal vo Vranove a odvtedy ho hrávam aj súťažne. '
  //       ),

  //       new ArticleContent( 'Keďže si z Bardejova, nerozmýšľal si o inom hokejbalovom klube z východného Slovenska ? Alebo Vranov bol pre teba voľba číslo 1 ? '),

  //       new ArticleContent('Popravde som veľmi neriešil kde pôjdem. Zo začiatku som bral hokejbal len ako doplnok k hokeju a keďže do Vranova išli aj viacerí spoluhráči z Bardejova, tak som ani nad inými tímami nerozmýšľal. '
  //       ),

  //       new ArticleContent( 'Kedy a prečo si začal s hokejbalom ? '),

  //       new ArticleContent( 
  //         'Hokejbal som hrával už dlhšiu dobu vo voľnom čase s kamarátmi a približne pred 2-3 rokmi za mnou prišiel Maximilián, či by som nemal záujem skúsiť popri hokeji hrať aj hokejbal vo Vranove a odvtedy ho hrávam aj súťažne. '
  //       ),

  //       new ArticleContent( 'Keďže si z Bardejova, nerozmýšľal si o inom hokejbalovom klube z východného Slovenska ? Alebo Vranov bol pre teba voľba číslo 1 ? '),

  //       new ArticleContent('Popravde som veľmi neriešil kde pôjdem. Zo začiatku som bral hokejbal len ako doplnok k hokeju a keďže do Vranova išli aj viacerí spoluhráči z Bardejova, tak som ani nad inými tímami nerozmýšľal. '
  //       )
  //     ],
  //     "/assets/img/articleTest.jpg",
  //     "/assets/img/articleTest.jpg"
  //   ),

  //   new Article(
  //     3,
  //     "Predstavovanie",
  //     "Predstavovanie hracov Ondrej Ladomirjak",
  //     "marian",
  //     new Date(),
  //     [
  //       new ArticleContent( 'Kedy a prečo si začal s hokejbalom ? '),

  //       new ArticleContent( 
  //         'Hokejbal som hrával už dlhšiu dobu vo voľnom čase s kamarátmi a približne pred 2-3 rokmi za mnou prišiel Maximilián, či by som nemal záujem skúsiť popri hokeji hrať aj hokejbal vo Vranove a odvtedy ho hrávam aj súťažne. '
  //       ),

  //       new ArticleContent( 'Keďže si z Bardejova, nerozmýšľal si o inom hokejbalovom klube z východného Slovenska ? Alebo Vranov bol pre teba voľba číslo 1 ? '),

  //       new ArticleContent('Popravde som veľmi neriešil kde pôjdem. Zo začiatku som bral hokejbal len ako doplnok k hokeju a keďže do Vranova išli aj viacerí spoluhráči z Bardejova, tak som ani nad inými tímami nerozmýšľal. '
  //       ),

  //       new ArticleContent( 'Kedy a prečo si začal s hokejbalom ? '),

  //       new ArticleContent( 
  //         'Hokejbal som hrával už dlhšiu dobu vo voľnom čase s kamarátmi a približne pred 2-3 rokmi za mnou prišiel Maximilián, či by som nemal záujem skúsiť popri hokeji hrať aj hokejbal vo Vranove a odvtedy ho hrávam aj súťažne. '
  //       ),

  //       new ArticleContent( 'Keďže si z Bardejova, nerozmýšľal si o inom hokejbalovom klube z východného Slovenska ? Alebo Vranov bol pre teba voľba číslo 1 ? '),

  //       new ArticleContent('Popravde som veľmi neriešil kde pôjdem. Zo začiatku som bral hokejbal len ako doplnok k hokeju a keďže do Vranova išli aj viacerí spoluhráči z Bardejova, tak som ani nad inými tímami nerozmýšľal. '
  //       ),

  //       new ArticleContent( 'Kedy a prečo si začal s hokejbalom ? '),

  //       new ArticleContent( 
  //         'Hokejbal som hrával už dlhšiu dobu vo voľnom čase s kamarátmi a približne pred 2-3 rokmi za mnou prišiel Maximilián, či by som nemal záujem skúsiť popri hokeji hrať aj hokejbal vo Vranove a odvtedy ho hrávam aj súťažne. '
  //       ),

  //       new ArticleContent( 'Keďže si z Bardejova, nerozmýšľal si o inom hokejbalovom klube z východného Slovenska ? Alebo Vranov bol pre teba voľba číslo 1 ? '),

  //       new ArticleContent('Popravde som veľmi neriešil kde pôjdem. Zo začiatku som bral hokejbal len ako doplnok k hokeju a keďže do Vranova išli aj viacerí spoluhráči z Bardejova, tak som ani nad inými tímami nerozmýšľal. '
  //       )
  //     ],
  //     "/assets/img/articleTest.jpg",
  //     "/assets/img/articleTest.jpg"
  //   ),

  //   new Article(
  //     4,
  //     "Predstavovanie",
  //     "Predstavovanie hracov Brano Stefan",
  //     "marian",
  //     new Date(),
  //     [
  //       new ArticleContent( 'Kedy a prečo si začal s hokejbalom ? '),

  //       new ArticleContent( 
  //         'Hokejbal som hrával už dlhšiu dobu vo voľnom čase s kamarátmi a približne pred 2-3 rokmi za mnou prišiel Maximilián, či by som nemal záujem skúsiť popri hokeji hrať aj hokejbal vo Vranove a odvtedy ho hrávam aj súťažne. '
  //       ),

  //       new ArticleContent( 'Keďže si z Bardejova, nerozmýšľal si o inom hokejbalovom klube z východného Slovenska ? Alebo Vranov bol pre teba voľba číslo 1 ? '),

  //       new ArticleContent('Popravde som veľmi neriešil kde pôjdem. Zo začiatku som bral hokejbal len ako doplnok k hokeju a keďže do Vranova išli aj viacerí spoluhráči z Bardejova, tak som ani nad inými tímami nerozmýšľal. '
  //       ),

  //       new ArticleContent( 'Kedy a prečo si začal s hokejbalom ? '),

  //       new ArticleContent( 
  //         'Hokejbal som hrával už dlhšiu dobu vo voľnom čase s kamarátmi a približne pred 2-3 rokmi za mnou prišiel Maximilián, či by som nemal záujem skúsiť popri hokeji hrať aj hokejbal vo Vranove a odvtedy ho hrávam aj súťažne. '
  //       ),

  //       new ArticleContent( 'Keďže si z Bardejova, nerozmýšľal si o inom hokejbalovom klube z východného Slovenska ? Alebo Vranov bol pre teba voľba číslo 1 ? '),

  //       new ArticleContent('Popravde som veľmi neriešil kde pôjdem. Zo začiatku som bral hokejbal len ako doplnok k hokeju a keďže do Vranova išli aj viacerí spoluhráči z Bardejova, tak som ani nad inými tímami nerozmýšľal. '
  //       ),

  //       new ArticleContent( 'Kedy a prečo si začal s hokejbalom ? '),

  //       new ArticleContent( 
  //         'Hokejbal som hrával už dlhšiu dobu vo voľnom čase s kamarátmi a približne pred 2-3 rokmi za mnou prišiel Maximilián, či by som nemal záujem skúsiť popri hokeji hrať aj hokejbal vo Vranove a odvtedy ho hrávam aj súťažne. '
  //       ),

  //       new ArticleContent( 'Keďže si z Bardejova, nerozmýšľal si o inom hokejbalovom klube z východného Slovenska ? Alebo Vranov bol pre teba voľba číslo 1 ? '),

  //       new ArticleContent('Popravde som veľmi neriešil kde pôjdem. Zo začiatku som bral hokejbal len ako doplnok k hokeju a keďže do Vranova išli aj viacerí spoluhráči z Bardejova, tak som ani nad inými tímami nerozmýšľal. '
  //       )
  //     ],
  //     "/assets/img/articleTest.jpg",
  //     "/assets/img/articleTest.jpg"
  //   ),
  //   new Article(
  //     4,
  //     "Predstavovanie",
  //     "Predstavovanie hracov Brano Stefan",
  //     "marian",
  //     new Date(),
  //     [
  //       new ArticleContent( 'Kedy a prečo si začal s hokejbalom ? '),

  //       new ArticleContent( 
  //         'Hokejbal som hrával už dlhšiu dobu vo voľnom čase s kamarátmi a približne pred 2-3 rokmi za mnou prišiel Maximilián, či by som nemal záujem skúsiť popri hokeji hrať aj hokejbal vo Vranove a odvtedy ho hrávam aj súťažne. '
  //       ),

  //       new ArticleContent( 'Keďže si z Bardejova, nerozmýšľal si o inom hokejbalovom klube z východného Slovenska ? Alebo Vranov bol pre teba voľba číslo 1 ? '),

  //       new ArticleContent('Popravde som veľmi neriešil kde pôjdem. Zo začiatku som bral hokejbal len ako doplnok k hokeju a keďže do Vranova išli aj viacerí spoluhráči z Bardejova, tak som ani nad inými tímami nerozmýšľal. '
  //       ),

  //       new ArticleContent( 'Kedy a prečo si začal s hokejbalom ? '),

  //       new ArticleContent( 
  //         'Hokejbal som hrával už dlhšiu dobu vo voľnom čase s kamarátmi a približne pred 2-3 rokmi za mnou prišiel Maximilián, či by som nemal záujem skúsiť popri hokeji hrať aj hokejbal vo Vranove a odvtedy ho hrávam aj súťažne. '
  //       ),

  //       new ArticleContent( 'Keďže si z Bardejova, nerozmýšľal si o inom hokejbalovom klube z východného Slovenska ? Alebo Vranov bol pre teba voľba číslo 1 ? '),

  //       new ArticleContent('Popravde som veľmi neriešil kde pôjdem. Zo začiatku som bral hokejbal len ako doplnok k hokeju a keďže do Vranova išli aj viacerí spoluhráči z Bardejova, tak som ani nad inými tímami nerozmýšľal. '
  //       ),

  //       new ArticleContent( 'Kedy a prečo si začal s hokejbalom ? '),

  //       new ArticleContent( 
  //         'Hokejbal som hrával už dlhšiu dobu vo voľnom čase s kamarátmi a približne pred 2-3 rokmi za mnou prišiel Maximilián, či by som nemal záujem skúsiť popri hokeji hrať aj hokejbal vo Vranove a odvtedy ho hrávam aj súťažne. '
  //       ),

  //       new ArticleContent( 'Keďže si z Bardejova, nerozmýšľal si o inom hokejbalovom klube z východného Slovenska ? Alebo Vranov bol pre teba voľba číslo 1 ? '),

  //       new ArticleContent('Popravde som veľmi neriešil kde pôjdem. Zo začiatku som bral hokejbal len ako doplnok k hokeju a keďže do Vranova išli aj viacerí spoluhráči z Bardejova, tak som ani nad inými tímami nerozmýšľal. '
  //       )
  //     ],
  //     "/assets/img/articleTest.jpg",
  //     "/assets/img/articleTest.jpg"
  //   ),
  //   new Article(
  //     4,
  //     "Predstavovanie",
  //     "Predstavovanie hracov Brano Stefan",
  //     "marian",
  //     new Date(),
  //     [
  //       new ArticleContent( 'Kedy a prečo si začal s hokejbalom ? '),

  //       new ArticleContent( 
  //         'Hokejbal som hrával už dlhšiu dobu vo voľnom čase s kamarátmi a približne pred 2-3 rokmi za mnou prišiel Maximilián, či by som nemal záujem skúsiť popri hokeji hrať aj hokejbal vo Vranove a odvtedy ho hrávam aj súťažne. '
  //       ),

  //       new ArticleContent( 'Keďže si z Bardejova, nerozmýšľal si o inom hokejbalovom klube z východného Slovenska ? Alebo Vranov bol pre teba voľba číslo 1 ? '),

  //       new ArticleContent('Popravde som veľmi neriešil kde pôjdem. Zo začiatku som bral hokejbal len ako doplnok k hokeju a keďže do Vranova išli aj viacerí spoluhráči z Bardejova, tak som ani nad inými tímami nerozmýšľal. '
  //       ),

  //       new ArticleContent( 'Kedy a prečo si začal s hokejbalom ? '),

  //       new ArticleContent( 
  //         'Hokejbal som hrával už dlhšiu dobu vo voľnom čase s kamarátmi a približne pred 2-3 rokmi za mnou prišiel Maximilián, či by som nemal záujem skúsiť popri hokeji hrať aj hokejbal vo Vranove a odvtedy ho hrávam aj súťažne. '
  //       ),

  //       new ArticleContent( 'Keďže si z Bardejova, nerozmýšľal si o inom hokejbalovom klube z východného Slovenska ? Alebo Vranov bol pre teba voľba číslo 1 ? '),

  //       new ArticleContent('Popravde som veľmi neriešil kde pôjdem. Zo začiatku som bral hokejbal len ako doplnok k hokeju a keďže do Vranova išli aj viacerí spoluhráči z Bardejova, tak som ani nad inými tímami nerozmýšľal. '
  //       ),

  //       new ArticleContent( 'Kedy a prečo si začal s hokejbalom ? '),

  //       new ArticleContent( 
  //         'Hokejbal som hrával už dlhšiu dobu vo voľnom čase s kamarátmi a približne pred 2-3 rokmi za mnou prišiel Maximilián, či by som nemal záujem skúsiť popri hokeji hrať aj hokejbal vo Vranove a odvtedy ho hrávam aj súťažne. '
  //       ),

  //       new ArticleContent( 'Keďže si z Bardejova, nerozmýšľal si o inom hokejbalovom klube z východného Slovenska ? Alebo Vranov bol pre teba voľba číslo 1 ? '),

  //       new ArticleContent('Popravde som veľmi neriešil kde pôjdem. Zo začiatku som bral hokejbal len ako doplnok k hokeju a keďže do Vranova išli aj viacerí spoluhráči z Bardejova, tak som ani nad inými tímami nerozmýšľal. '
  //       )
  //     ],
  //     "/assets/img/articleTest.jpg",
  //     "/assets/img/articleTest.jpg"
  //   )]

  //   postArticles(){
  //     this.http.put('https://hmhk-4b0d7-default-rtdb.firebaseio.com/articles.json', this.newArticles).subscribe();
  //   }
}












