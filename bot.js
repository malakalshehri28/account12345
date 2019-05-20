const Discord = require("discord.js");
const client = new Discord.Client();



client.on("ready", () => {
client.user.setPresence({
  status: 'dnd',
  game: { 
     type: 0,
     name: 'فيصل :) ',
     details: `فيصل`,
     url: 'http://twitch.tv/Streammingg',
     state: `فيصل`,
    application_id: '400955088052420610',
     assets: {
        small_image: `366835431037337600`,
        small_text: ' فيصل ' ,
        large_image: `370451271133429760`,
        large_text: `فيصل` }

  }
    });
});




  
  
client.login(process.env.BOT_TOKEN);
