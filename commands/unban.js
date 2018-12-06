const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  let unbannedUser = args
         console.log(unbannedUser)
         if(!unbannedUser)
         {
             message.channel.send("Sorry, I couldn't find that user");
             return;
         }
         if(!message.member.hasPermission("MANAGE_MESSAGES"))
         {
             message.channel.send("You do not have the previlage to unban other users!");
             return;
         }
        if(message.guild.members.get(args)) return message.channel.send(`That user isn't banned!`)
       setTimeout(function(){
    //code
       message.guild.unban(args)
                .then(console.log)
                .catch(console.error);
       message.channel.send(`***User with id ${args} has been unbanned!*** `)
 }, 500);
}

module.exports.help = {
  name: "unban"
}
