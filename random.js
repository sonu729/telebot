const randomWord = require('random-word');
 

'use strict'

const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController

class StartController extends TelegramBaseController {
    /**
     * @param {Scope} $
     */
    starthandler($) {
        $.sendMessage(randomWord())
    }

    get routes() {
        return {
            'startCommand': 'starthandler'
        }
    }
}
module.exports=StartController;