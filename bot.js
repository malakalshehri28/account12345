const adminprefix = "!";;
const devs = ['400955088052420610'];
client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
    
if (message.content.startsWith(adminprefix + 'playing')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult} تم تغيير بلاينق البوت إلى **`);
} else 
  if (message.content.startsWith(adminprefix + 'setname')) {
client.user.setUsername(argresult).then;
    message.channel.sendMessage(`**${argresult}** : تم تغيير أسم البوت إلى`);
return message.reply("**لا يمكنك تغيير الاسم يجب عليك الانتظآر لمدة ساعتين . **");
} else
  if (message.content.startsWith(adminprefix + 'setavatar')) {
client.user.setAvatar(argresult);
  message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
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
