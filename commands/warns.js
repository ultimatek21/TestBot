const Discord = require("discord.js")
const fs = require("fs")

module.exports.run = async (bot, message, args) => {
    let warns = JSON.parse(fs.readFileSync('commands/warns.json', 'utf8'));
    if(!message.member.hasPermission("MANAGE_MESSAGES"))
    {
        message.channel.send("You do not have the previlage to warn other users!");
        return;
    }
    var user = message.mentions.users.first()
    if (!user) return message.reply('cannot find user!')
    let warning = message.content.split(" ").slice(2).join(" ");
    if(!warns[user.id]) warns[user.id] = {}
    if(!warns[user.id].warns) warns[user.id].warns = 0
    if(!warns[user.id].reasons) warns[user.id].reasons = 'No warns'
   if(warns[user.id].warns === 0) return message.channel.send({embed:{description:`${user.username} doesn't have any warnings.`, color:0xff0000}})
   let reasons = warns[user.id].reasons.split('|!')
   let warnsNum = reasons.length
   let embed = new Discord.RichEmbed()
   .setTitle(`${user.username}`)
   .setColor('RED')
   .addField(`Warnings`, `${warns[user.id].warns}`)
   for(let i = 0; i<reasons.length; i++) {
     embed.addField(`Reason #${i+1}`, `${reasons[i]}`)
   }
   message.channel.send(embed)
}

module.exports.help = {
    name: "warns"

}
