const discord = new require("discord.js");
const client = new discord.Client();



const adminprefix = "!";;
const devs = ['536967989904277535'];
client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
    
if (message.content.startsWith(adminprefix + 'playing')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult} تم تغيير بلاينق البوت إلى **`);
} else 
 if (message.content.startsWith(adminprefix + 'streaming')) {
  client.user.setGame(argresult, "https://www.twitch.tv/idk");
    message.channel.sendMessage(`**تم تغيير ستريم البوت إلى  ${argresult}**`);
} else
 if (message.content.startsWith(adminprefix + 'listening')) {
  client.user.setActivity(argresult, {type: 'LISTENING'})
    message.channel.sendMessage(`**تم تغيير ليسنق البوت إلى  ${argresult}**`);
} else
 if (message.content.startsWith(adminprefix + 'watching')) {
  client.user.setActivity(argresult, {type: 'WATCHING'})
    message.channel.sendMessage(`**تم تغيير واتشنق البوت إلى  ${argresult}**`);
} 

});






client.login(process.env.BOT_TOKEN);
