const Discord = require("discord.js");
const eco = require("discord-economy");

module.exports.run = async (bot, message, args) => {
  eco.Daily(message.author.id).then(l => {
//l.updated tells you if the user already claimed his/her daily yes or no.
               if (l.updated) {

                 eco.FetchBalance(message.author.id).then(x => {
                   eco.AddToBalance(message.author.id, 100).then(l =>
                     message.reply(`You claimed your daily coins succesfully! You now own ${l.newbalance} coins.`));
                 })

               } else {
                 message.channel.send(`Sorry, you already claimed your daily coins!\nBut no worries, over ${l.timetowait} you can use daily again!`)
               }
           })
}

module.exports.help = {
  name: "daily"
}
