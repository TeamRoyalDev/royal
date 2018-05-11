const Discord = require("discord.js");

module.exports.run = async (bot, message, args, member, guild, size) => {

    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("No permissions to execute this command.");
    if (message.author.bot) return;
    if (message.member.hasPermission("ADMINISTRATOR")) {

    var msg = message.content;
    var args = msg.split(" ")
    if (!args[1]) return message.channel.send("`What is your new changelog?`");
    let arg = message.content.split(" ").slice(10);

    let changelog = message.guild.channels.find('name', 'changelogs');

    let announcement = new Discord.RichEmbed()
    .setAuthor("Royal | Changelogs")
    .setColor("#ffffff")
    .setDescription(args.join(" ").slice(10))
    .setTimestamp()
    .setFooter(`© Royal ♡`, "https://i.imgur.com/0upIvKN.png");

    changelog.send(announcement);
}

};

module.exports.help = {
  name: "changelog"
}