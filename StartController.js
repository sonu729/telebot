'use strict'

const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController

class StartController extends TelegramBaseController {
    /**
     * @param {Scope} $
     */
    starthandler($) {
        $.sendMessage('Hello!')
    }

    get routes() {
        return {
            'startCommand': 'starthandler'
        }
    }
}
module.exports=StartController;