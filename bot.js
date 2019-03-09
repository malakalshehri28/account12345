const Discord = require("discord.js");
const client = new Discord.Client();



client.on('guildMemberAdd', member => {
  
  const channel = member.guild.channels.find(ch => ch.name === 'pure');
 
  if (!channel) return;

  channel.send(`Welcome to the server ❤`);
});



client.login(process.env.BOT_TOKEN);
