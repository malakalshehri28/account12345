const Discord = require("discord.js");
const client = new Discord.Client();





client.user.setActivity('test', { type: 'PLAYING' })
client.user.setStatus('idle')

  
});



 
client.login(process.env.BOT_TOKEN);
