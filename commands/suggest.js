const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  let suggestion = message.content.split(" ").slice(1).join(" ");
       if(!suggestion) return message.reply("You have not specified a suggestion!")
        message.channel.send("**Your suggestion has been submitted** " + message.author)
        var suggest = new Discord.RichEmbed()
             .addField("Suggestion", suggestion)
             .setColor(0xFF0000)
             .addField("Submitted by", message.author)
             .setThumbnail(message.author.avatarURL)
             .setTimestamp()
        let suggestChannel = message.guild.channels.find(channel => channel.name === "logs")
        suggestChannel.send(suggest)
}

module.exports.help = {
  name: "suggest"
}
