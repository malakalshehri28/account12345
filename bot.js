const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : AJ`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : AJ ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`رحمك الله يا من دخلت قلبي ثم رحلت`,"http://twitch.tv//idk")
});


  
  
client.login(process.env.BOT_TOKEN);
