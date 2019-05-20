const Discord = require("discord.js");
const client = new Discord.Client();
 
 
 
 
 
 
 
client.on("ready", () => {
client.user.setPresence({
  status: 'online',
  game: {
     type: 0,
     name: 'faisal',    
     details: `faisal`,  
     state: `faisal`,
    application_id: '400955088052420610',     
     assets: {
        small_image: `421232881684316160`,
        small_text: 'faisal' ,
        large_image: `421233046612869120`,
        large_text: `faisal` }
 
  }
    });
});



  
  
client.login(process.env.BOT_TOKEN);
