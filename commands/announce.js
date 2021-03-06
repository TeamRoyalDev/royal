const Discord = require("discord.js");

module.exports.run = async (bot, message, args, member, guild, size) => {
    if (message.author.bot) return;
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("No permissions to execute this command.");
    if (message.member.hasPermission("ADMINISTRATOR")) {
    var msg = message.content;
    var args = msg.split(" ")
    if (!args[1]) return message.channel.send("`You have to provide a message for me to say!`");
    let arg = message.content.split(" ").slice(10);

    let announcement = new Discord.RichEmbed()
    .setAuthor("Announcement!")
    .setColor("#ffffff")
    .setDescription(args.join(" ").slice(10))
    .setTimestamp()
    .setFooter(`© Royal ♡`, "https://i.imgur.com/0upIvKN.png");

    message.channel.send(announcement);
    }
};

module.exports.help = {
  name: "announce"
}
