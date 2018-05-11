const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let channel = message.channel;
    let cName = channel.name;
    let user = message.mentions.users.first();
    let errorEmbed = new Discord.RichEmbed()
    .setTitle("Error!")
    .setColor("#ff0000")
    .setDescription(`Can't add ${user}, he is already in the Ticket!`)
    .setTimestamp()
    .setFooter(`© Royal ♡`, "https://i.imgur.com/0upIvKN.png");
    if(channel.permissionsFor(message.mentions.users.first()).hasPermissions("READ_MESSAGES")) return message.channel.send(errorEmbed);
    if(cName.startsWith("t-") || cName.startsWith("pending-")) {

        if(user) {
        channel.overwritePermissions(user, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        });
        let addembed = new Discord.RichEmbed()
        .setTitle("User Added!")
        .setColor("#00ff00")
        .setDescription(`Name: ${user}`)
        .setTimestamp()
        .setFooter(`© Royal ♡`, "https://i.imgur.com/0upIvKN.png");
      
        message.channel.send(addembed);
} else message.channel.send("You need to tag a user to add them to this ticket.");
      } else message.reply("You can't execute this command outside a ticket channel.");
      

}

module.exports.help = {
    name: "add"
}
