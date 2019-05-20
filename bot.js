const Discord = require("discord.js");
const client = new Discord.Client();



client.on("ready", () => {
client.user.setPresence({
  status: 'dnd',
  game: { 
     type: 0,
     name: 'فيصل :) ',
     details: `فيصل`,
     url: 'http://twitch.tv/idk',
     state: `فيصل`,
    application_id: '400955088052420610',
     assets: {
        small_image: ``,
        small_text: ' فيصل ' ,
        large_image: ``,
        large_text: `فيصل` }

  }
    });
});




  
  
client.login(process.env.BOT_TOKEN);
