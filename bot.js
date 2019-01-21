const Discord = require("discord.js");
const client = new Discord.Client();



client.on("ready", () => {
console.log('By : faisal');
client.user.setPresence({
  status: 'dnd',
  game: { 
     type: 0,
     name: 'faisal',
     details: `faisal`,
     url: 'http://twitch.tv/idk',
     state: `faisal`,
    application_id: '377479790195769345',
     assets: {
        small_image: `377480550207717376`,
        small_text: 'faisal',
        large_image: `377480353259978752`,
        large_text: `faisal` }

  }
    });
});




client.login(process.env.BOT_TOKEN);
