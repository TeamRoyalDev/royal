const Discord = require("discord.js")



module.exports.run = async (bot, message, args) => {
    let channel = message.channel;
    let channelName = message.channel.name
    if (!channelName.startsWith(`commands`)) return message.channel.send(`Execute commands in the commands channel.`) 
       .then(msg => {
        msg.delete(5000)
      })
    if (channelName.startsWith(`ticket-`)) return message.channel.send(`You can't create a ticket in a ticket.`)
    .then(msg => {
        msg.delete(5000)
      })
    if (channelName.startsWith(`pending-`)) return message.channel.send(`You can't create a ticket in a pending ticket.`)
    .then(msg => {
        msg.delete(5000)
      })

    const reason = message.content.split(" ").slice(1).join(" ");
    if (message.guild.channels.exists("name", `t-${message.author.username.toLowerCase()}`))
     return message.channel.send(`You already have a ticket open.`)
     .then(msg => {
        msg.delete(5000)
      })

    message.guild.createChannel(`t-${message.author.username}-${message.author.discriminator}`, "text")
    .then(c => {
    let category = message.guild.channels.find("name", "New Tickets");
        if(category) {
            c.setParent(category)
             .then(updated => console.log(`Set the category of ${channel.name} to ${channel.parent.name}`))
            .catch(console.error);
           } else message.reply("Category could not be found.")
           .then(msg => {
            msg.delete(5000)
          })
        let role = message.guild.roles.find("name", "Royal Support ♡");
        if(!role) return message.channel.send("Create a Royal Support role.")
        .then(msg => {
            msg.delete(5000)
          })
        let role2 = message.guild.roles.find("name", "@everyone");


        c.overwritePermissions(role, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        });

        c.overwritePermissions(role2, {
            SEND_MESSAGES: false,
            READ_MESSAGES: false
        });

        c.overwritePermissions(message.author, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        });
        let tcreateembed = new Discord.RichEmbed()
        .setTitle("Ticket | Information")
        .setColor("#ffffff")
        .addField(`Ticket Name`,`${c}`)
        .addField(`Where is my ticket?`, `Your ticket will be displayed at New Tickets.`)
        .setTimestamp()
        .setFooter(`© Royal ♡`, "https://i.imgur.com/0upIvKN.png");
      
        message.channel.send(tcreateembed);

        role.setMentionable(true, 'Royal Support ♡')
        .then(updated => console.log(`Role mentionable: ${updated.mentionable}`))
        .catch(console.error);
        const embed = new Discord.RichEmbed()
        .setColor("#ffffff")
        .addField(`Welcome to Royal |  ${message.author.username}!`, `Hi ${message.author.username} I'm Stefania I'm a robot as you can see I work for Royal and have a question for you, how can I help you?\nPlease describe your product with much details. **BLEEP**.\n\nWe Offer:
        \n-  Advertisements\n-  Discord Setups [FREE]\n- Website Development\n- Designs/Graphics\n- Discord bot development\n- Server Trailers\n- Builds\n- Plugin Development\n\n_The CEO's didn't feed me ;( buy something so he can feed me <3_\n_-close_ to close a ticket.`)
        .setTimestamp()
        .setFooter(`© Royal ♡`, "https://i.imgur.com/0upIvKN.png");
        c.send({ embed: embed });
        c.send(`${role.toString()} » There is a new ticket!`);

    })



    
}

module.exports.help = {
	name: "ticket"
}