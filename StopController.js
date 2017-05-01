'use strict'

const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController

class StopController extends TelegramBaseController {
    /**
     * @param {Scope} $
     */
    stop($) {
        $.sendMessage('thank you')
    }

    get routes() {
        return {
            'stopHandler': 'stop'
        }
    }
}
module.exports=StopController;