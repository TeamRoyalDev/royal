const fs = require("fs")
const botconfig = require("./botconfig.json")
const Discord = require("discord.js")
const bot = new Discord.Client({fetchAllMembers: true})


bot.commands = new Discord.Collection()
let prefix = botconfig.prefix



fs.readdir("./commands/", (err, files) => {
	if(err) console.log(err) 

	let jsfile = files.filter(f => f.split(".").pop() === "js")
	if(jsfile.length <= 0) {
		console.log("Couldn't find commands folder.")
		return
	}

	jsfile.forEach((f, i) => {
		let props = require(`./commands/${f}`)
		console.log(`${i + 1}: ${f} loaded!`)
		bot.commands.set(props.help.name,props)
	})

})

process.on("error", console.error)
bot.on("ready", async () => {
	console.log(`${bot.user.username} is online!`)
	bot.user.setActivity("TeamRoyal.xyz", {type: "WATCHING"});
	
})

bot.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', 'welcome');
    let memberavatar = member.user.avatarURL
        if (!channel) return;
        let embed = new Discord.RichEmbed()
        .setColor("#ffffff")
        .addField('New user!', `Welcome ${member} to Royal. Please read our <#442709975224025100> and <#442079360481099777>!`)
        .setFooter(`© Royal ♡`, "https://i.imgur.com/0upIvKN.png")
        .setTimestamp()

        channel.sendEmbed(embed);
});

bot.on('guildMemberAdd', member => {

    console.log(`${member}`, "has joined " + `${member.guild.name}`)

    var joinrole = member.guild.roles.find('name', '⚠️Un-Verified');
    member.addRole(joinrole)

});

bot.on('guildMemberRemove', member => {
    let logs = member.guild.channels.find('name', 'logs');
    let memberavatar = member.user.avatarURL
        if (!logs) return;
        let embed = new Discord.RichEmbed()
        .setColor("#ffffff")
        .addField('Server logs', `${member} left the server.`)
        .setFooter(`© Royal ♡`, "https://i.imgur.com/0upIvKN.png")
        .setTimestamp()

        logs.sendEmbed(embed);
});

bot.on('guildMemberRemove', member => {
    console.log(`${member}` + "has left" + `${member.guild.name} ` + "Sending leave message now")
    console.log("Leave Message Sent")
});



bot.on("message", async message => {
	

	if (!message.content.startsWith(prefix)) return


	let messageArray = message.content.split(" ")
	let cmd = messageArray[0]
	let args = messageArray.slice(1)
	let commandFile = bot.commands.get(cmd.slice(prefix.length))
	if(commandFile) commandFile.run(bot, message, args)




})

bot.on('message', message => {
	
 let logs = message.guild.channels.find('name', 'logs');
if(!logs){
    logs = message.guild.createChannel("logs", text);
}
            
    let msg = message.content.toUpperCase();

    let logsembed = new Discord.RichEmbed()
    .setColor("#ffffff")
    .addField(`Server logs`,`${message.author} used a banned word(s)!`)
    .setTimestamp()
    .setFooter(`© Royal ♡`, "https://i.imgur.com/0upIvKN.png");

    let advertisembed = new Discord.RichEmbed()
    .setColor("#ffffff")
    .addField(`Server logs`,`${message.author} tried to send **${message}** !`)
    .setTimestamp()
    .setFooter(`© Royal ♡`, "https://i.imgur.com/0upIvKN.png");

    let linkembed = new Discord.RichEmbed()
    .setColor("#ffffff")
    .addField(`Server logs`,`${message.author} tried to send **${message}** !`)
    .setTimestamp()
    .setFooter(`© Royal ♡`, "https://i.imgur.com/0upIvKN.png");


    if (msg.includes(`NIGGER`)) {
            message.delete();
            logs.send(logsembed)
        
    }
 
    if (msg.includes(`ASSHOLE`)) {
        message.delete();
        logs.send(logsembed)
    
}

if (msg.includes(`FAGGOT`)) {
    message.delete();
    logs.send(logsembed)

}

if (msg.includes(`HITLER`)) {
    message.delete();
    logs.send(logsembed)

}

if (msg.includes(`KANKER`)) {
    message.delete();
    logs.send(logsembed)

}

if (msg.includes(`TYFUS`)) {
    message.delete();
    logs.send(logsembed)

}


if (msg.includes(`KYS`)) {
    message.delete();
    logs.send(logsembed)

}

if (msg.includes(`CANCER`)) {
    message.delete();
    logs.send(logsembed)

}

if (msg.includes(`NIGGA`)) {
    message.delete();
    logs.send(logsembed)

}

if (msg.includes(`FUCK`)) {
    message.delete();
    logs.send(logsembed)

}

if (msg.includes(`EBOLA`)) {
    message.delete();
    logs.send(logsembed)

}

if (msg.includes(`SEX`)) {
    message.delete();
    logs.send(logsembed)

}

if (msg.includes(`RAPE`)) {
    message.delete();
    logs.send(logsembed)

}

if (msg.includes(`BITCH`)) {
    message.delete();
    logs.send(logsembed)

}

if (msg.includes(`PENIS`)) {
    message.delete();
    logs.send(logsembed)

}

if (msg.includes(`DICK`)) {
    message.delete();
    logs.send(logsembed)

}

if (msg.includes(`CANCEROUS`)) {
    message.delete();
    logs.send(logsembed)

}

if (msg.includes(`KILL YOURSELF`)) {
    message.delete();
    logs.send(logsembed)

}

if (msg.includes(`KILLYOURSELF`)) {
    message.delete();
    logs.send(logsembed)

}

if (msg.includes(`KILL YOUR SELF`)) {
    message.delete();
    logs.send(logsembed)

}

if (msg.includes(`SUICIDE`)) {
    message.delete();
    logs.send(logsembed)

}

if (msg.includes(`MOTHERFUCKER`)) {
    message.delete();
    logs.send(logsembed)

}

if (msg.includes(`BASTARD`)) {
    message.delete();
    logs.send(logsembed)

}

if (msg.includes(`CUNT`)) {
    message.delete();
    logs.send(logsembed)

}

if (msg.includes(`TWAT`)) {
    message.delete();
    logs.send(logsembed)

}

if (msg.includes(`RETARD`)) {
    message.delete();
    logs.send(logsembed)

}
	let aut = message.author;

if (!message.member.hasPermission("MANAGE_MESSAGES")) {

if (msg.includes(`DISCORD.GG/`)) {
    message.delete();
    logs.send(advertisembed)

}


if (msg.includes(`XNXX`)) {
    message.delete();
    logs.send(linkembed)

}

if (msg.includes(`PICHUNTER`)) {
    message.delete();
    logs.send(linkembed)

}

if (msg.includes(`XVIDEOS`)) {
    message.delete();
    logs.send(linkembed)

}

if (msg.includes(`XVIDS`)) {
    message.delete();
    logs.send(linkembed)

}

if (msg.includes(`.EU`)) {
    message.delete();
    logs.send(linkembed)

}


if (msg.includes(`.COM`)) {
    message.delete();
    logs.send(linkembed)

}

if (msg.includes(`.NET`)) {
    message.delete();
    logs.send(linkembed)

}

if (msg.includes(`.ORG`)) {
    message.delete();
    logs.send(linkembed)

}

if (msg.includes(`.CO`)) {
    message.delete();
    logs.send(linkembed)

}

if (msg.includes(`.XYZ`)) {
    message.delete();
    logs.send(linkembed)

}

if (msg.includes(`.FUN`)) {
    message.delete();
    logs.send(linkembed)

}
}


});

bot.login(process.env.BOT_TOKEN);
