const Discord = require("discord.js");
const client = new Discord.Client();



client.on("ready", () => {
client.user.setPresence({
  status: 'dnd',
  game: { 
     type: 0,
     name: 'FAISAL',
     details: `مشغول`,
     url: 'http://twitch.tv/idk',
     state: `كُن كما أنت فليتقبلك من يتقبلك`,

  }
    });
});





client.login(process.env.BOT_TOKEN);
