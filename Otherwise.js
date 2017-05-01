'use strict'

const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController


class OtherwiseController extends TelegramBaseController {
    handle($) {
        $.sendMessage('sorry!unable to undestand');
    }
}
module.exports=OtherwiseController;