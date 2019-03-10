const Discord = require("discord.js");
const client = new Discord.Client();



client.on('guildMemberAdd', member => {
  
  const channel = member.guild.channels.find(ch => ch.name === 'pure');
 
  if (!channel) return;

  channel.send(`Welcome to the server ❤`);
});



client.on('ready', () => {
  console.log(Logged in as ${client.user.tag}!);
  client.user.setGame("#Pure.","https://www.twitch.tv/idk);
});
  
  
  
client.login(process.env.BOT_TOKEN);
