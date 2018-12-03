const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  var diceRoll = Math.floor(Math.random() * 6) + 1;
    message.reply("Your dice landed on " + diceRoll);
}

module.exports.help = {
  name: "roll"
}
