const Discord = require("discord.js");

module.exports.run = async (bot,message, args) => {
  let channel = message.channel;
  let channelName = message.channel.name;
  let member = message.member;
  if (!channelName.startsWith(`verify`)) return message.channel.send(`You can execute this command in here!`) 
       .then(msg => {
        msg.delete(5000)
      })
  if(message.member.hasPermission("SEND_MESSAGES")) {
    let role = member.guild.roles.find("name", "💰 Member");
    member.addRole(role).catch(console.error);

    let announcement = new Discord.RichEmbed()
    .setAuthor("Successfully verified")
    .setColor("#ffffff")
    .setDescription(`${message.member}, you are now verified!`)
    .setTimestamp()
    .setFooter(`©Royal ♡`, "https://i.imgur.com/0upIvKN.png");

    message.author.sendMessage(announcement);
  }
}

module.exports.help = {
  name: "verify"
}
