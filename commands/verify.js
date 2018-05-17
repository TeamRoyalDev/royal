const Discord = require("discord.js");

module.exports.run = async (bot,message, args) => {
  if (!channelName.startsWith(`verify`)) return message.channel.send(`You can execute this command in here!`) 
       .then(msg => {
        msg.delete(5000)
      })
  if(message.member.hasPermission("VIEW_CHANNEL")) {
    let role = member.guild.roles.find("name", "💰 Member");
    member.addRole(role).catch(console.error);
  }
}

module.exports.help = {
  name: "verify"
}
