const Discord = require("discord.js");
const client = new Discord.Client();



client.on("ready", () => {
client.user.setPresence({
  status: 'dnd',
  game: { 
     type: 0,
     name: 'Off',
     details: `مشغول`,
     url: 'http://twitch.tv/idk',
     state: `I do not care about anyone.`,
    
  }
    });
});





client.login(process.env.BOT_TOKEN);
