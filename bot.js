const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs")
var prefix = "#";
client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : AJ`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : AJ ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
   
   

client.on("ready", () => {
client.user.setPresence({
  status: 'dnd',
  game: { 
     type: 0,
     name: 'f9o',
     details: `f9o`,
     url: 'http://twitch.tv/Streammingg',
     state: `f9o`,
    application_id: '281376075802476544',
     assets: {
        small_image: `366835431037337600`,
        small_text: 'f9o' ,
        large_image: `370451271133429760`,
        large_text: `f9o` }

  }
    });
});



  
  
client.login(process.env.BOT_TOKEN);
