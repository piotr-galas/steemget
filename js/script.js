class Steemget {
  constructor(options){
    this.mapOptions(options);
    this.includeAssets();
    this.importArticle();
  }

  createHtmlTree(articleContentInHtml){
    const baseNode = document.getElementById('steemit-article');
    const outerNode = document.createElement('div');
    const innerNode = document.createElement('div');
    outerNode.className = 'PostFull__body entry-content';
    innerNode.className = 'MarkdownViewer Markdown';
    baseNode.appendChild(outerNode);
    outerNode.appendChild(innerNode);
    innerNode.innerHTML = articleContentInHtml;
  }

  mapOptions(options){
    this.permalink = options.permalink;
    this.author = options.author;
    this.errorMessage = options.errorMessage ||
      `Content not find,  are you sure that there is article in <a href="https://steemit.com/@${this.author}/${this.permalink}">https://steemit.com/@${this.author}/${this.permalink} </a>`;
  }

  includeAssets(){
    this.includeJs('https://cdn.steemjs.com/lib/latest/steem.min.js');
    this.includeJs('https://cdn.rawgit.com/showdownjs/showdown/1.8.5/dist/showdown.min.js');
    this.includeCss('css/styles.css?v=1.0');
    this.includeCss('https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600');
    this.includeCss('https://fonts.googleapis.com/css?family=Source+Serif+Pro:400,600')
  }

  includeJs(url){
    return new Promise( resolve => {
      const script = document.createElement( "script" );
      script.src = url;
      script.onload = resolve;
      document.head.appendChild( script );
    });
  }

  includeCss(url){
    return new Promise( resolve => {
      const link = document.createElement( "link" );
      link.rel = 'stylesheet';
      link.href = url;
      link.onload = resolve;
      document.head.appendChild( link );
    });
  }

  importArticle(){
    onload = ()=>{
      steem.api.getContent(this.author, this.permalink, (err, result) =>{
        if(result.id === 0){
          this.createHtmlTree(this.errorMessage);
        }else{
          const converter = new showdown.Converter();
          this.createHtmlTree(converter.makeHtml(result.body));
        }
      });
    }

  }
}

window.Stimify = Stimify;