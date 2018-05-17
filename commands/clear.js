const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  // Command is !clear <Number that's less than 100 and greater than 0.
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Insufficient permissions.");
  if(message.member.hasPermission("MANAGE_MESSAGES")) {
    if (isNaN(args[0])) return message.channel.send('**Please supply a valid amount of messages to purge**');
    if (args[0] > 100) return message.channel.send('**Please supply a number less than 100**');
  
    // Now, we can delete the messages
    let logs = message.guild.channels.find('name', '💻console');

    let logsembed = new Discord.RichEmbed()
    .setColor("#ffffff")
    .addField(`Server logs`,`${message.author} cleared ${args[0]} messages!`)
    .setTimestamp()
    .setFooter(`© Royal ♡`, "https://i.imgur.com/0upIvKN.png");

    
    message.channel.bulkDelete(args[0])
      .then(messages => logs.send(logsembed));
}
}
module.exports.help = {
  name: "clear"
}
