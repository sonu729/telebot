'use strict'

const Telegram = require('telegram-node-bot')
 const PersistentMemoryStorage = require('./PersistentMemoryStorage'),
    storage = new PersistentMemoryStorage(
         `${__dirname}/data/userStorage.json`,
        `${__dirname}/data/chatStorage.json`
    ),
    tg = new Telegram.Telegram('307281093:AAEBzE5Vhr3CVDPYJSjTxRmkZtVM2ki-gws', {
        
        storage: storage
    });


const TelegramBaseController = Telegram.TelegramBaseController
const TextCommand = Telegram.TextCommand
//const tg = new Telegram.Telegram('307281093:AAEBzE5Vhr3CVDPYJSjTxRmkZtVM2ki-gws')
const PingController=require('./PingController')
const OtherwiseController=require('./Otherwise')
const StartController=require('./StartController')
const StopController=require('./StopController')
const weatherController=require('./weather')
const RestartController=require('./RestartController')
const dicController=require('./dic')
const RandomwordController=require('./random')
const helpController=require('./helpController')
const TodoController = require('./todo')
const todoCtrl = new TodoController();


tg.router
    
    .when(new TextCommand('Help', 'helpCommand'), new helpController())
     .when(new TextCommand('/start', 'startCommand'), new StartController())
    .when(new TextCommand('/stop', 'stopHandler'), new StopController())
    .when(new TextCommand('wiki', 'RestartHandler'), new RestartController())
    .when(new TextCommand('Wiki', 'RestartHandler'), new RestartController())
    .when(new TextCommand('Weather', 'RestartHandler'), new weatherController())
    .when(new TextCommand('Word', 'startCommand'), new dicController())
    .when(new TextCommand('Randomword', 'startCommand'), new RandomwordController())
    .when(new Telegram.TextCommand('add', 'addCommand'), todoCtrl)
    .when(new Telegram.TextCommand('Add', 'addCommand'), todoCtrl)
    .when(new Telegram.TextCommand('get', 'getCommand'), todoCtrl)
    .when(new Telegram.TextCommand('Get', 'getCommand'), todoCtrl)
    .when(new Telegram.TextCommand('del', 'checkCommand'), todoCtrl)
    .when(new Telegram.TextCommand('Del', 'checkCommand'), todoCtrl)
    
    .otherwise(new OtherwiseController());
    
    
    function exitHandler(exitCode) {
    storage.flush();
    process.exit(exitCode);
}

process.on('SIGINT', exitHandler.bind(null, 0));
process.on('uncaughtException', exitHandler.bind(null, 1));