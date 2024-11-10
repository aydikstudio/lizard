import {Telegraf, Markup} from 'telegraf'

const token = '6645515891:AAGliwY1xsl_AJwgvw7YGxzc48o-6u7Uh4k'
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