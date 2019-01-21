const prefix = "D"

KiNg66S.on('message', message => {
  if (!message.content.startsWith(PREFIX)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id !== "400955088052420610") return;

  
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



});

client.login(process.env.BOT_TOKEN);
