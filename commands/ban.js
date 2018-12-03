const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  let bannedUser = message.mentions.users.first();
         if(!bannedUser)
         {
             message.channel.send("Sorry, I couldn't find that user");
             return;
         }
         if(!message.member.hasPermission("MANAGE_MESSAGES"))
         {
             message.channel.send("You do not have the previlage to ban other users!");
             return;
         }

         let reason = message.content.split(" ").slice(2).join(' ');
       if (!reason)
         {
           message.channel.send("You have not specified a reason!")
           return;
         }
       var banInfo = new RichEmbed()
           .setTitle("Ban log")
           .addField("Banned user", bannedUser)
           .addField("Banned by", message.author)
           .addField("Reason", reason)
           .setThumbnail(bannedUser.avatarURL)
           .setColor(0xFF0000)
           let logChannel = message.guild.channels.find(channel => channel.name === "logs")
           logChannel.send(banInfo)
          bannedUser.send(`You have been banned from GameHub for: ${reason}`)
         message.delete()
       setTimeout(function(){
    //code
       message.guild.member(bannedUser).ban({days: 7})
                .then(console.log)
                .catch(console.error);
       message.channel.send(` *** ${bannedUser.tag} has been banned!*** `)
 }, 1000);
}

module.exports.help = {
  name: "ban"
}
