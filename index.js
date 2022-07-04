const TelegramBot = require('node-telegram-bot-api')

const TOKEN = '5578421862:AAH0LFxvhbL_Nepnpb-2fHlHRJvCbZKOEgs'

const bot = new TelegramBot(TOKEN, {polling: true})

bot.on('message', msg => {
    bot.sendMessage(msg.chat.id, `Helloo from HEROKU, bot says: "Hi, ${msg.from.first_name}"`)
})