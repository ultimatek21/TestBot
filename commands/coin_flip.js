const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  var chance = Math.floor(Math.random() * 2);
         if (chance == 0){
             message.reply("your coin landed on heads!");
         }
         else
         {
             message.reply("your coin landed on tails!");
     }

}

module.exports.help = {
  name: "flip"
}
