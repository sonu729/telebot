'use strict'

const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController

class helpController extends TelegramBaseController {
    /**
     * @param {Scope} $
     */
    starthandler($) {
        $.sendMessage('Hello! Theare are following commands you can use in this bot \n 1. help - to know all cmds \n 2. wiki - to search from wikipedia\n3. weather -to know the weather of any place\n4. news - To know current news\n5.Randomwords - to get english words\n6.word - to get Antonyms/synonyms of any word')
    }

    get routes() {
        return {
            'helpCommand': 'starthandler'
        }
    }
}
module.exports=helpController;