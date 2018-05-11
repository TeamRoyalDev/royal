const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("No permissions to execute this command.");
    if (message.meer.hasPermission("ADMINISTRATOR")) {mb
        let channel = message.channel;
        
        let bicon = bot.user.displayavatarURL;
        let vouchembed = new Discord.RichEmbed()
        .setAuthor("Royal ♡ Mcm")
        .setColor("#ffffff")
        .addField("Team Royal ♡", "https://www.mc-market.org/members/118441/")
        .setTimestamp()
        .setFooter(`© Royal ♡`, "https://i.imgur.com/0upIvKN.png");
      
        return message.channel.send(vouchembed);
            
            message.delete();
            channel.send(vouchembed);
    }
}

module.exports.help = {
    name: "mcm"
}