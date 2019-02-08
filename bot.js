const Discord = require("discord.js");
const client = new Discord.Client();



client.on("ready", () => {
client.user.setPresence({
  status: 'dnd',
  game: { 
     type: 0,
     name: 'A39ar , blo.',
     details: `مشغول لاحد يكلمني`,
     url: 'http://twitch.tv/idk',
     state: `bbm:-222444`,
    
  }
    });
});





client.login(process.env.BOT_TOKEN);
