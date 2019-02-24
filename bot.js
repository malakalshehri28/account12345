const Discord = require("discord.js");
const client = new Discord.Client();



client.user.setGame(`Off`)


client.login(process.env.BOT_TOKEN);
