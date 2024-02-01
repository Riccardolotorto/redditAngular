import { Component, OnInit, HostBinding} from '@angular/core';
import { Article } from './article.module';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit{
  @HostBinding('attr.class') cssClass = 'card';      //creiamo la classe css di questo componente, cioè vuol dire che ogni volta che viene richiamato avrà questo aspetto css
  article:Article;

  constructor() {
    this.article = new Article('Angular 2','http://angular.io',10);
  }

  voteUp(): Boolean {
    this.article.voteUp();;
    return false      //evitiamo che ad ogni click si ricarichi la pagina html
  }

  voteDown(): Boolean {
    this.article.voteDown();
    return false     //evitiamo che ad ogni click si ricarichi la pagina html
  }

  ngOnInit() {}
}
