var tcom = require('thesaurus-com');
const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController

class dicController extends TelegramBaseController {
    /**
     * @param {Scope} $
     */
    starthandler($) {
        let word = $.message.text.split(' ').slice(1).join(' ');
        if (!word) return $.sendMessage('Sorry, please pass valid input like that word happy.');
        var ant=tcom.search(word)
 
 $.sendMessage(JSON.stringify( ant));

 
 

    }

    get routes() {
       
// Get Value from JSON
        return {
            'startCommand': 'starthandler'
            
        }
    }
}
module.exports=dicController;



 
 