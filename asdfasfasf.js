const Discord = require('discord.js')
const bot = new Discord.Client();

bot.on('message', (message) => {
    if (message.content == "checktimer") {
        message.channel.send();
    }
});

bot.login('MzM0ODYzNjMxMjEwNzc0NTI4.DE2oig.kBTP0zAivz7Upvqmb1Q7A9VUdQY')