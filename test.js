
let NewsAPI = require('newsapi');
 
let newsapi = new NewsAPI('bbe6e64489a2411dbc1b804c4fe7f2c8');
 
// To query articles 
newsapi.articles({
  source: 'associated-press', // required 
  sortBy: 'top' // optional 
}).then(articlesResponse => {
  console.log(articlesResponse);
  
});
 
// To query sources 
newsapi.sources({
  category: 'technology', // optional 
  language: 'en', // optional 
  country: 'us' // optional 
}).then(sourcesResponse => {
  console.log(sourcesResponse);
 
});