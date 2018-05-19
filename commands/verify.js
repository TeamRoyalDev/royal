const Discord = require("discord.js");

module.exports.run = async (bot,message, args) => {
  let channel = message.channel;
  let channelName = message.channel.name;
  let member = message.member;
  if (!channelName.startsWith(`verify`)) return message.channel.send(`You are already verified.`);
  if(message.member.hasPermission("SEND_MESSAGES")) {
    let role = member.guild.roles.find("name", "👤 Member");
    member.addRole(role);
    
    let announcement = new Discord.RichEmbed()
    .setAuthor("Successfully verified")
    .setColor("#ffffff")
    .setDescription(`${message.member}, you are now verified!`)
    .setTimestamp()
    .setFooter(`©Royal ♡`, "https://i.imgur.com/0upIvKN.png");

    let announcement2 = new Discord.RichEmbed()
    .setAuthor("Successfully verified")
    .setColor("#ffffff")
    .setDescription(`${message.member}, is now verified!`)
    .setTimestamp()
    .setFooter(`©Royal ♡`, "https://i.imgur.com/0upIvKN.png");

    message.author.send(announcement);
    message.channel.send(announcement2);
  }
}

module.exports.help = {
  name: "verify"
}
