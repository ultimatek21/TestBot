const botconfig = require("./botconfig.json");
const Discord = require("discord.js")
const fs = require("fs")
const bot = new Discord.Client()
bot.commands = new Discord.Collection()



bot.on("ready", async () => {
  console.log("ready")
});
fs.readdir("./commands", (err, files) => {
    if(err) console.log(err);
    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile <= 0){
        console.log("couldn't find commands")
        return;
    }
    jsfile.forEach((f, i) => {
         let props = require(`./commands/${f}`)
         console.log(`${f} loaded!`)
         bot.commands.set(props.help.name, props)

      });
});

bot.on("message", async message => {
    if(message.channel.type === "dm") return;
    if(message.author.bot) return;

    let prefix = botconfig.prefix
    let messageArray = message.content.split(" ")
    let cmd = messageArray[0]
    let args = messageArray.slice(1);

    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(bot, message, args)


    if(cmd === `${prefix}hello`){
        return message.reply("hi!")
    }

 })
bot.login(botconfig.Token)
