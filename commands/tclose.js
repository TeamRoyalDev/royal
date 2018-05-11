const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let channel = message.channel;
  let cName = channel.name;

  let terrorembed = new Discord.RichEmbed()
  .setTitle("Error")
  .setColor("#ffffff")
  .setDescription(`Your ticket can't be closed, are you sure its in a ticket channel?`)
  .setTimestamp()
  .setFooter(`© Royal ♡`, "https://i.imgur.com/0upIvKN.png");

  if(cName.startsWith("t-") || cName.startsWith("p-")) {
    channel.delete();
  } else message.channel.send(terrorembed) 
   .then(msg => {
    msg.delete(5000)
  })
}

module.exports.help = {
    name: "close"
}