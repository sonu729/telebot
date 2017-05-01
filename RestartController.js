'use strict'

const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController

var path = require('path');

var htmlToText = require('html-to-text');
var wikipedia = require("wikipedia-js");
//var query = "mathura";

 var fs = require("fs");
var myJson ;



  
 
    


class RestartController extends TelegramBaseController {
    /**
     * @param {Scope} $
     */
    Restart($) {

 let query = $.message.text.split(' ').slice(1).join(' ');
        if (!query) return $.sendMessage('Sorry, please pass valid input like that wiki taj mahal.');
       var options = {query: query, format: "html", summaryOnly: true};
       

         wikipedia.searchArticle(options, function(err, htmlWikiText){
    if(err){
      console.log("An error occurred[query=%s, error=%s]", query, err);
      return;
    }
     var myJson=htmlWikiText;
      fs.writeFile( "wwiki.html", JSON.stringify( myJson ), "utf8", function (err){
 
})

     htmlToText.fromFile(path.join(__dirname, 'wwiki.html' ), {
    ignoreHref:true,
	tables: ['#invoice', '.address']
}, function(err, text) {
	if (err) return console.error(err);
//	console.log(text);
   $.sendMessage(text);
});

    
   
  });
       
        
    }

    get routes() {
        return {
            'RestartHandler': 'Restart'
        }
    }
}
module.exports=RestartController;