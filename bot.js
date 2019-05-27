const Discord = require("discord.js");
const client = new Discord.Client();
 
 
 
 
 
 
 
client.on("ready", () => {
client.user.setPresence({
  status: 'online', //الحال
  game: {
     type: 0,
     name: 'hi',    
     details: `hi2`,  
     url: 'http://twitch.tv/idk',
     state: `hi3`,
    application_id: '420956479747784715', //ايدي البوت اللي رافع عليه الصور
     assets: {
        small_image: `421232881684316160`, //ايدي الصوره الصغيره
        small_text: 'Hi' ,//الكلام اللي يضهر على الصوره الصغيره
        large_image: `421233046612869120`, //ايدي الصوره الكبيره
        large_text: `Hi` } //الكلام اللي يضهر على الصوره الكبيره
 
  }
    });
});


  
client.login(process.env.BOT_TOKEN);
