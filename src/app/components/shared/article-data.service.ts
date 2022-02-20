import { Injectable } from "@angular/core";
import { Article } from "./article.model";
import { ArticleContent } from "./article-content.model";

@Injectable({
  providedIn: 'root'
})

export class ArticleDataService{
  private articles : Article[] = [

    new Article(
      1,
      "Predstavovanie",
      "Predstavovanie hracov Matej Dzamba",
      "Ondrej Ladomirjak",
      new Date(),
      [
        new ArticleContent( 'Kedy a prečo si začal s hokejbalom ? '),

        new ArticleContent( 
          'Hokejbal som hrával už dlhšiu dobu vo voľnom čase s kamarátmi a približne pred 2-3 rokmi za mnou prišiel Maximilián, či by som nemal záujem skúsiť popri hokeji hrať aj hokejbal vo Vranove a odvtedy ho hrávam aj súťažne. '
        ),

        new ArticleContent( 'Keďže si z Bardejova, nerozmýšľal si o inom hokejbalovom klube z východného Slovenska ? Alebo Vranov bol pre teba voľba číslo 1 ? '),

        new ArticleContent('Popravde som veľmi neriešil kde pôjdem. Zo začiatku som bral hokejbal len ako doplnok k hokeju a keďže do Vranova išli aj viacerí spoluhráči z Bardejova, tak som ani nad inými tímami nerozmýšľal. '
        ),

        new ArticleContent( 'Kedy a prečo si začal s hokejbalom ? '),

        new ArticleContent( 
          'Hokejbal som hrával už dlhšiu dobu vo voľnom čase s kamarátmi a približne pred 2-3 rokmi za mnou prišiel Maximilián, či by som nemal záujem skúsiť popri hokeji hrať aj hokejbal vo Vranove a odvtedy ho hrávam aj súťažne. '
        ),

        new ArticleContent( 'Keďže si z Bardejova, nerozmýšľal si o inom hokejbalovom klube z východného Slovenska ? Alebo Vranov bol pre teba voľba číslo 1 ? '),

        new ArticleContent('Popravde som veľmi neriešil kde pôjdem. Zo začiatku som bral hokejbal len ako doplnok k hokeju a keďže do Vranova išli aj viacerí spoluhráči z Bardejova, tak som ani nad inými tímami nerozmýšľal. '
        ),

        new ArticleContent( 'Kedy a prečo si začal s hokejbalom ? '),

        new ArticleContent( 
          'Hokejbal som hrával už dlhšiu dobu vo voľnom čase s kamarátmi a približne pred 2-3 rokmi za mnou prišiel Maximilián, či by som nemal záujem skúsiť popri hokeji hrať aj hokejbal vo Vranove a odvtedy ho hrávam aj súťažne. '
        ),

        new ArticleContent( 'Keďže si z Bardejova, nerozmýšľal si o inom hokejbalovom klube z východného Slovenska ? Alebo Vranov bol pre teba voľba číslo 1 ? '),

        new ArticleContent('Popravde som veľmi neriešil kde pôjdem. Zo začiatku som bral hokejbal len ako doplnok k hokeju a keďže do Vranova išli aj viacerí spoluhráči z Bardejova, tak som ani nad inými tímami nerozmýšľal. '
        )
      ],
      "/assets/img/articleTest.jpg",
      "/assets/img/articleTest.jpg",
    ),

    new Article(
      2,
      "Zapas",
      "Predstavovanie hracov Simon Cmar",
      "marian",
      new Date(),
      [
        new ArticleContent( 'Kedy a prečo si začal s hokejbalom ? '),

        new ArticleContent( 
          'Hokejbal som hrával už dlhšiu dobu vo voľnom čase s kamarátmi a približne pred 2-3 rokmi za mnou prišiel Maximilián, či by som nemal záujem skúsiť popri hokeji hrať aj hokejbal vo Vranove a odvtedy ho hrávam aj súťažne. '
        ),

        new ArticleContent( 'Keďže si z Bardejova, nerozmýšľal si o inom hokejbalovom klube z východného Slovenska ? Alebo Vranov bol pre teba voľba číslo 1 ? '),

        new ArticleContent('Popravde som veľmi neriešil kde pôjdem. Zo začiatku som bral hokejbal len ako doplnok k hokeju a keďže do Vranova išli aj viacerí spoluhráči z Bardejova, tak som ani nad inými tímami nerozmýšľal. '
        ),

        new ArticleContent( 'Kedy a prečo si začal s hokejbalom ? '),

        new ArticleContent( 
          'Hokejbal som hrával už dlhšiu dobu vo voľnom čase s kamarátmi a približne pred 2-3 rokmi za mnou prišiel Maximilián, či by som nemal záujem skúsiť popri hokeji hrať aj hokejbal vo Vranove a odvtedy ho hrávam aj súťažne. '
        ),

        new ArticleContent( 'Keďže si z Bardejova, nerozmýšľal si o inom hokejbalovom klube z východného Slovenska ? Alebo Vranov bol pre teba voľba číslo 1 ? '),

        new ArticleContent('Popravde som veľmi neriešil kde pôjdem. Zo začiatku som bral hokejbal len ako doplnok k hokeju a keďže do Vranova išli aj viacerí spoluhráči z Bardejova, tak som ani nad inými tímami nerozmýšľal. '
        ),

        new ArticleContent( 'Kedy a prečo si začal s hokejbalom ? '),

        new ArticleContent( 
          'Hokejbal som hrával už dlhšiu dobu vo voľnom čase s kamarátmi a približne pred 2-3 rokmi za mnou prišiel Maximilián, či by som nemal záujem skúsiť popri hokeji hrať aj hokejbal vo Vranove a odvtedy ho hrávam aj súťažne. '
        ),

        new ArticleContent( 'Keďže si z Bardejova, nerozmýšľal si o inom hokejbalovom klube z východného Slovenska ? Alebo Vranov bol pre teba voľba číslo 1 ? '),

        new ArticleContent('Popravde som veľmi neriešil kde pôjdem. Zo začiatku som bral hokejbal len ako doplnok k hokeju a keďže do Vranova išli aj viacerí spoluhráči z Bardejova, tak som ani nad inými tímami nerozmýšľal. '
        )
      ],
      "/assets/img/articleTest.jpg",
      "/assets/img/articleTest.jpg"
    ),

    new Article(
      3,
      "Predstavovanie",
      "Predstavovanie hracov Ondrej Ladomirjak",
      "marian",
      new Date(),
      [
        new ArticleContent( 'Kedy a prečo si začal s hokejbalom ? '),

        new ArticleContent( 
          'Hokejbal som hrával už dlhšiu dobu vo voľnom čase s kamarátmi a približne pred 2-3 rokmi za mnou prišiel Maximilián, či by som nemal záujem skúsiť popri hokeji hrať aj hokejbal vo Vranove a odvtedy ho hrávam aj súťažne. '
        ),

        new ArticleContent( 'Keďže si z Bardejova, nerozmýšľal si o inom hokejbalovom klube z východného Slovenska ? Alebo Vranov bol pre teba voľba číslo 1 ? '),

        new ArticleContent('Popravde som veľmi neriešil kde pôjdem. Zo začiatku som bral hokejbal len ako doplnok k hokeju a keďže do Vranova išli aj viacerí spoluhráči z Bardejova, tak som ani nad inými tímami nerozmýšľal. '
        ),

        new ArticleContent( 'Kedy a prečo si začal s hokejbalom ? '),

        new ArticleContent( 
          'Hokejbal som hrával už dlhšiu dobu vo voľnom čase s kamarátmi a približne pred 2-3 rokmi za mnou prišiel Maximilián, či by som nemal záujem skúsiť popri hokeji hrať aj hokejbal vo Vranove a odvtedy ho hrávam aj súťažne. '
        ),

        new ArticleContent( 'Keďže si z Bardejova, nerozmýšľal si o inom hokejbalovom klube z východného Slovenska ? Alebo Vranov bol pre teba voľba číslo 1 ? '),

        new ArticleContent('Popravde som veľmi neriešil kde pôjdem. Zo začiatku som bral hokejbal len ako doplnok k hokeju a keďže do Vranova išli aj viacerí spoluhráči z Bardejova, tak som ani nad inými tímami nerozmýšľal. '
        ),

        new ArticleContent( 'Kedy a prečo si začal s hokejbalom ? '),

        new ArticleContent( 
          'Hokejbal som hrával už dlhšiu dobu vo voľnom čase s kamarátmi a približne pred 2-3 rokmi za mnou prišiel Maximilián, či by som nemal záujem skúsiť popri hokeji hrať aj hokejbal vo Vranove a odvtedy ho hrávam aj súťažne. '
        ),

        new ArticleContent( 'Keďže si z Bardejova, nerozmýšľal si o inom hokejbalovom klube z východného Slovenska ? Alebo Vranov bol pre teba voľba číslo 1 ? '),

        new ArticleContent('Popravde som veľmi neriešil kde pôjdem. Zo začiatku som bral hokejbal len ako doplnok k hokeju a keďže do Vranova išli aj viacerí spoluhráči z Bardejova, tak som ani nad inými tímami nerozmýšľal. '
        )
      ],
      "/assets/img/articleTest.jpg",
      "/assets/img/articleTest.jpg"
    ),

    new Article(
      4,
      "Predstavovanie",
      "Predstavovanie hracov Brano Stefan",
      "marian",
      new Date(),
      [
        new ArticleContent( 'Kedy a prečo si začal s hokejbalom ? '),

        new ArticleContent( 
          'Hokejbal som hrával už dlhšiu dobu vo voľnom čase s kamarátmi a približne pred 2-3 rokmi za mnou prišiel Maximilián, či by som nemal záujem skúsiť popri hokeji hrať aj hokejbal vo Vranove a odvtedy ho hrávam aj súťažne. '
        ),

        new ArticleContent( 'Keďže si z Bardejova, nerozmýšľal si o inom hokejbalovom klube z východného Slovenska ? Alebo Vranov bol pre teba voľba číslo 1 ? '),

        new ArticleContent('Popravde som veľmi neriešil kde pôjdem. Zo začiatku som bral hokejbal len ako doplnok k hokeju a keďže do Vranova išli aj viacerí spoluhráči z Bardejova, tak som ani nad inými tímami nerozmýšľal. '
        ),

        new ArticleContent( 'Kedy a prečo si začal s hokejbalom ? '),

        new ArticleContent( 
          'Hokejbal som hrával už dlhšiu dobu vo voľnom čase s kamarátmi a približne pred 2-3 rokmi za mnou prišiel Maximilián, či by som nemal záujem skúsiť popri hokeji hrať aj hokejbal vo Vranove a odvtedy ho hrávam aj súťažne. '
        ),

        new ArticleContent( 'Keďže si z Bardejova, nerozmýšľal si o inom hokejbalovom klube z východného Slovenska ? Alebo Vranov bol pre teba voľba číslo 1 ? '),

        new ArticleContent('Popravde som veľmi neriešil kde pôjdem. Zo začiatku som bral hokejbal len ako doplnok k hokeju a keďže do Vranova išli aj viacerí spoluhráči z Bardejova, tak som ani nad inými tímami nerozmýšľal. '
        ),

        new ArticleContent( 'Kedy a prečo si začal s hokejbalom ? '),

        new ArticleContent( 
          'Hokejbal som hrával už dlhšiu dobu vo voľnom čase s kamarátmi a približne pred 2-3 rokmi za mnou prišiel Maximilián, či by som nemal záujem skúsiť popri hokeji hrať aj hokejbal vo Vranove a odvtedy ho hrávam aj súťažne. '
        ),

        new ArticleContent( 'Keďže si z Bardejova, nerozmýšľal si o inom hokejbalovom klube z východného Slovenska ? Alebo Vranov bol pre teba voľba číslo 1 ? '),

        new ArticleContent('Popravde som veľmi neriešil kde pôjdem. Zo začiatku som bral hokejbal len ako doplnok k hokeju a keďže do Vranova išli aj viacerí spoluhráči z Bardejova, tak som ani nad inými tímami nerozmýšľal. '
        )
      ],
      "/assets/img/articleTest.jpg",
      "/assets/img/articleTest.jpg"
    )
  ]

  getArticles(){
    return this.articles.slice();
  }

}