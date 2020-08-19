const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NzQ1NDQzMjY5MTk4MDg2MjY0.Xzx2JQ.xiTKg_KzKqOsZS_7yP9jSWoxC1A';

client.on('ready', () => {
  console.log('켰다.');
});

client.on('message', (message) => {
  if(message.content === 'ping') {
    message.reply('pong');
  }
  if(message.content === '세금') {
    message.reply('세금을 내었습니다.');
  }
});

client.login(token);