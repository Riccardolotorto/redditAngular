export class Article {     //creo una classe article 
    //definisco gli attributi
    title: string;        
    link: string; 
    votes: number;
  
    constructor(title: string, link: string, votes?: number) {
      //do i valori agli attributi
      this.title = title;
      this.link = link;
      this.votes = votes || 0;
    }

    voteUp(): void {    //void vuol dire che non restituisce nulla
        this.votes += 1;
    }
    
      voteDown(): void {
        this.votes -= 1;
    }

      // metodo che prende solo il dominio da un link
      // domain() is a utility function that extracts ---- returns a string
      // the domain from a URL, which we'll explain shortly
    domain(): string {
    try {// e.g. http://foo.com/path/to/bar
        const domainAndPath: string = this.link.split('//')[1]; // e.g. foo.com/path/to/bar
        return domainAndPath.split('/')[0];
    } catch (err) {
        return null;
    }
  }
}