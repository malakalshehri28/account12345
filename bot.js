const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = !


if (message.content.startsWith(PREFIX + 'sw')) {
  KiNg66S.user.setActivity(argresult, {type: 'WATCHING'})
     console.log('test' + argresult);
    message.channel.sendMessage(`**Watch Now: **${argresult}`)
} 

 
  if (message.content.startsWith(PREFIX + 'sl')) {
  KiNg66S.user.setActivity(argresult, {type: 'LISTENING'})
     console.log('test' + argresult);
    message.channel.sendMessage(`LISTENING Now: **${argresult}`)
} 


if (message.content.startsWith(PREFIX + 'ss')) {
  KiNg66S.user.setGame(argresult, "https://www.twitch.tv/idk");
     console.log('test' + argresult);
    message.channel.sendMessage(`**Streaming: **${argresult}`)
} 
if (message.content.startsWith(PREFIX + 'sp')) {
  KiNg66S.user.setGame(argresult);
     console.log('test' + argresult);
    message.channel.sendMessage(`Playing: **${argresult}`)
} 


client.login(process.env.BOT_TOKEN);
