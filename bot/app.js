import {Telegraf, Markup} from 'telegraf'

const token = ''
const webAppUrl = 'https://lizard-695ad.web.app'

const bot = new Telegraf(token)

bot.command('start', (ctx) => {
    ctx.reply('Hello! Press to start the app', 
        Markup.inlineKeyboard([
            Markup.button.webApp('Open mini app',  `${webAppUrl}?ref=${ctx.payload}`)
        ])
    )
})

bot.launch()