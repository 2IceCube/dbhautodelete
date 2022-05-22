const Discord = require("discord.js");
const discord = new Discord.Client
const fs = require("fs");
if (!fs.existsSync("./config.json")) {console.log("configure first!");}
const config = JSON.parse(fs.readFileSync("./config.json"));

discord.on("ready", function () {
  console.log("ready")
    discord.user.setActivity('We ❤️ DisBoHost.de', { type: "WATCHING"})
});

discord.on("message", function(message) {
    if (message.guild.id !== config.guildId) {return;}
    else if (message.channel.id !== config.channelId) {return;}
    else {message.delete({timeout: config.delay})
          .catch(error =>{
        console.log(error);
    })
         }
})

discord.login(config.token)