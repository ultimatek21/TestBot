const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("MANAGE_MESSAGES"))
        {
            message.channel.send("You do not have the previlage to delete messages!");
            return;
        }
      const deleteCount = parseInt(args[0], 10);
      if(!deleteCount || deleteCount < 2 || deleteCount > 101)
     return message.reply("specify the number of messages between 2 and 100.");
     const fetched = await message.channel.fetchMessages({limit: deleteCount});
      message.channel.bulkDelete(fetched)
     .catch(error => message.reply(`can't clear chat because: ${error}`));
}

module.exports.help = {
  name: "purge"
}
