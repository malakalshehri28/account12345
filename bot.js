const Discord = require("discord.js");
const client = new Discord.Client();



client.on('guildMemberAdd',async member => {
  if(member.guild.id !== '554343696368140303') return;
  setTimeout(function(){
  member.guild.channels.find(r => r.id === '551019141297995786').send('**Welcome To Server Pure:hearts:**');
},1600);
});




  
  
client.login(process.env.BOT_TOKEN);
