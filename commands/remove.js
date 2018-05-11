const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let channel = message.channel;
    let cName = channel.name;
    if(cName.startsWith("t-") || cName.startsWith("pending-")) {

        let user = message.mentions.users.first();
        if(user) {
        channel.overwritePermissions(user, {
            SEND_MESSAGES: false,
            READ_MESSAGES: false
        });
        let addembed = new Discord.RichEmbed()
        .setTitle("User Removed!")
        .setColor("#ff0000")
        .setDescription(`Name: ${user}`)
        .setTimestamp()
        
        .setFooter(`© Royal ♡`, "https://i.imgur.com/0upIvKN.png");
      
        message.channel.send(addembed);
} else message.channel.send("You need to tag a user to remove them to this ticket.")
.then(msg => {
    msg.delete(5000)
  })
      } else message.reply("You can't execute this command outside a ticket channel.")
      .then(msg => {
        msg.delete(5000)
      })

}

module.exports.help = {
    name: "remove"
}