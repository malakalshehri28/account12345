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
    application_id: 'https://e.top4top.net/p_1116l74nc0.jpeg',
     assets: {
        small_image: `366835431037337600`,
        small_text: ' Take This ! ' ,
        large_image: `370451271133429760`,
        large_text: FAISAL` }
  }
    });
});





client.login(process.env.BOT_TOKEN);
