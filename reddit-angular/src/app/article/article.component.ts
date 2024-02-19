import { Component, OnInit, HostBinding, Input} from '@angular/core';
import { Article } from './article.model';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit{
  //@HostBinding è riferito al tag -- <app-article>
  @HostBinding('attr.class') cssClass = 'card mt-4';      //creiamo la classe css di questo componente, cioè vuol dire che ogni volta che viene richiamato avrà questo aspetto css
  @Input() article:Article;

  constructor() {
    
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
