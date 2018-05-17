const Discord = require("discord.js");

module.exports.run = async (bot, message, args, member, guild, size) => {
    if (message.author.bot) return;

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

    message.channel.send(announcement)    		
        .then(function (message) {
          message.react('👍')
          message.react('👍')
       		message.pin()
          message.delete()
    			});
 

const filter = (reaction, user) => {
    return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
};

message.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
    .then(collected => {
        const reaction = collected.first();

        if (reaction.emoji.name === '👍') {
            message.reply('you reacted with a thumbs up.');
        }
        else {
            message.reply('you reacted with a thumbs down.');
        }
    })
    .catch(collected => {
        console.log(`After a minute, only ${collected.size} out of 4 reacted.`);
        message.reply('you didn\'t react with neither a thumbs up, nor a thumbs down.');
    });
};

module.exports.help = {
  name: "announce"
}
