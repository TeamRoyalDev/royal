const Discord = require("discord.js")



module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You don't have enough permissions.");
    if(message.member.hasPermission("MANAGE_MESSAGES")) {
        let channel = message.channel;
        let c = message.channel;
        let channelName = message.channel.name

        if (channelName.startsWith(`p-`)) return message.channel.send(`Your ticket is already pending.`);
        if (!channelName.startsWith(`t-`)) return message.channel.send(`You can't run this command outside a ticket channel.`);
        
        let category = message.guild.channels.find("name", "Pending Tickets");
        if(category) {
            channel.setParent(category)
            .then(c => {c.edit({ name: `p-${c.name.slice(1)}` });})
            .catch(console.error);
           } 
        
        
    let tpendingembed = new Discord.RichEmbed()
        .setTitle("Ticket Pending")
        .setColor("#ffffff")
        .setDescription(`Hello ${c.name.slice(2)} your seller will provide you updates.\nTicket is marked as pending.`)
        .setTimestamp()
        .setFooter(`© Royal ♡`, "https://i.imgur.com/0upIvKN.png");

        message.channel.send(tpendingembed)

    }

}



module.exports.help = {
	name: "pending"
}