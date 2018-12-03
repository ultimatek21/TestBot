const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
   let cmd = message.content.split(" ").slice(1).join(" ")
   if(!cmd)
   {
      var help = new Discord.RichEmbed()
     .setTitle("List of commands")
     .addField("Admin only commands", "warn, kick, ban, purge, mute, unmute, tempmute,")
     .addField("Simple commands", "profile, serverinfo, report, suggest, flip, roll")
     .setColor("#2de3ff")
      message.author.send(help);
     message.reply("Sent you a dm with information")
   }

   if(cmd === 'warn') return message.reply("The warn command allows you to warn other users if you are a mod")
   else if(cmd == 'kick') {
       message.reply("The kick command allows you to kick others granted that you have the right perms")
   }
  else if(cmd === 'ban') {
    message.reply('The ban command allows you to ban other users granted you have the permissions')
  }




}

module.exports.help = {
    name: "help"
}
