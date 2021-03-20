const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on('ready', function () {
    console.log("Je suis connecté !")
    bot.user.setActivity('Universe Pub', { type: "WATCHING" });
}) 

bot.on('message', message => {
  if (message.content === 'ping') {
    message.reply('pong !')
  }
})

bot.login(process.env.BOT_TOKEN)
