const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  let kickedUser = message.mentions.users.first();
       if(!kickedUser)
       {
           message.channel.send("Sorry, I couldn't find that user");
           return;
       }
       if(!message.member.hasPermission("MANAGE_MESSAGES"))
       {
           message.channel.send("You do not have the previlage to kick other users!");
           return;
       }

       let reason = message.content.split(" ").slice(2).join(' ');
       if (!reason)
       {
         message.channel.send("You have not specified a reason!")
         return;
       }
     var kickInfo = new RichEmbed()
         .setTitle("Kick log")
         .addField("Kicked user", kickedUser)
         .addField("Kicked by", message.author)
         .addField("Reason", reason)
         .setThumbnail(kickedUser.avatarURL)
         .setColor(0xFF0000)
     let kickChannel = message.guild.channels.find(channel => channel.name === "logs")
     kickChannel.send(kickInfo)
     message.delete()
     kickedUser.send(`You have been kicked out of GameHub for: ${reason}`).catch(message.channel.send(`*** ${kickedUser.tag} has been kicked!***`))
     setTimeout(function(){
  //code
       message.guild.member(kickedUser).kick(reason)
              .then(console.log(reason))
              .catch(console.error);
}, 1000);
  }

module.exports.help = {
  name: "kick"
}
