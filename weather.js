'use strict'
var weather = require('C:\\Users\\sonu\\AppData\\Roaming\\npm\\node_modules\\Openweather-Node')
var S = require('string');

const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController

var path = require('path');

//set your API key if you have one
weather.setAPPID("f41e4b951b1e68132fe5beb7b22c2abd");
//set the culture
weather.setCulture("fr");
//set the forecast type
weather.setForecastType("daily");

class RestartController extends TelegramBaseController {
    /**
     * @param {Scope} $
     */
    Restart($) {

 let location = $.message.text.split(' ').slice(1).join(' ');
        if (!location) return $.sendMessage('Sorry, please pass valid input like that weather mathura.');
weather.now(location,function(err, aData){   
    if(err) console.log(err);
    else
    {
     var temp=JSON.stringify(aData.getDegreeTemp())
     var csv= S(temp).between(':',',').left(5).s
      
         $.sendMessage('The Current Weather in Degree Celsius for '   +location+ '\n'+csv );
        
        
    }
})     
       

 }
  
        
    

    get routes() {
        return {
            'RestartHandler': 'Restart'
        }
    }
}
module.exports=RestartController;



