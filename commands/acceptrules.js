const Discord = require("discord.js");

module.exports.run = async (bot,message, args) => {
  let channel = message.channel;
  let channelName = message.channel.name;
  let member = message.member;
  if (!channelName.startsWith(`rules`)) return message.channel.send(`You can execute this command in here!`) 
       .then(msg => {
        msg.delete(5000)
      })
  if(message.member.hasPermission("SEND_MESSAGES")) {
    let role = member.guild.roles.find("name", "💰 Member");
    member.addRole(role).catch(console.error);

    let announcement = new Discord.RichEmbed()
    .setAuthor("Test Rules")
    .setColor("#ffffff")
    .setDescription(`rules hereee, rules here..!`)
    .setTimestamp()
    .setFooter(`©Royal ♡`, "https://i.imgur.com/0upIvKN.png");

    channel.send(announcement)
            .then(function (message) {
                message.react(":white_check_mark:")
            }).catch(function() {})
  }
}

module.exports.help = {
  name: "rules"
}
