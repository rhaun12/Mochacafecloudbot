const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NjkxNzk3MzUxNTM4NDkxNDIz.XnlMuQ.rr6SKF_O4R6udWYUsQTkbzYZNrQ';

bot.on('ready', () =>{
    console.log('Mocha Bot Online');
})
bot.on('message', msg=>{
    if(msg.content === "Hello")
        msg.reply("Hello Friend")
})
bot.on('message', msg=>{
    if(msg.content === "!robloxgroup")
        msg.reply("Here you go:  https://www.roblox.com/groups/3183170/Mocha-Cafe-Coffee-and-Cream#!/about")
})
bot.login(token);
client.login(process.enc.BOT_TOKEN);
