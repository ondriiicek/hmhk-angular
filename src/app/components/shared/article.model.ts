import { ArticleContent } from "./article-content.model";

export class Article{
  public id : number;
  public typeOf : string;                       //Akoze ci predstavovanie, pozapasovy rozhovor atd.
  public title : string;
  public author : string;
  public date : Date;
  public content : ArticleContent[];
  public previewImage : string;
  public authorImage : string;

  constructor( id : number, typeOf: string, title : string, author : string, date : Date, content : ArticleContent[], previewImage : string, authorImage : string ){
    this.id = id;
    this.typeOf = typeOf;
    this.author = author;
    this.date = date;
    this.previewImage = previewImage;
    this.content = content;
    this.title = title;
    this.authorImage = authorImage;
  }
}