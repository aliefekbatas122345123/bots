const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Aral Network ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'merhaba') {
    msg.reply('merhaba hg');
  }
});

client.login('MTAzOTk4NDMyODUxMzQzNzc4Nw.GSxPT_.rusBpCgfVc3jspfFcjobf14lB6O6FvVKNhVL1U');
client.on('ready', () => {
    client.channels.cache.get('1040693770557083659').join();
  })