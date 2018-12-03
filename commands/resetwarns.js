const Discord = require("discord.js");
const fs = require("fs")

module.exports.run = async (bot, message, args) => {
    let warns = JSON.parse(fs.readFileSync('commands/warns.json', 'utf8'));
    if(!message.member.hasPermission("MANAGE_MESSAGES"))
    {
        message.channel.send("You do not have the previlage to reset the warnings of other users!");
        return;
    }
    var user = message.mentions.users.first()
    if (!user) return message.reply('cannot find user!')
    let warning = message.content.split(" ").slice(2).join(" ");
    if(!warns[user.id]) warns[user.id] = {}
    if(!warns[user.id].warns) warns[user.id].warns = 0
   if(warns[user.id].reasons) warns[user.id].reason
   warns[user.id].warns = 0
   warns[user.id].reasons = ''
   message.channel.send({embed:{description:`Reseted ${user.username}'s warnings to 0.`, color:0xff0000}})
   fs.writeFile('commands/warns.json', JSON.stringify(warns, null, 4), (err) => {
if(err) console.error(err)
})
}
module.exports.help = {
    name: "resetwarns"
}
