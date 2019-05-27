const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "#";
client.on('ready', () => {
        client.user.setStatus('idle');
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : faisal`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : faisal ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame("-");


  
});







  
client.login(process.env.BOT_TOKEN);
