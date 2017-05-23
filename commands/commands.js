const fs = require("fs")

exports.run = function (client, msg, args, config, Discord) {
	msg.channel.send("", {embed: new Discord.RichEmbed()
		.setColor('#ff0000')
		.setAuthor(`Commands`)
		.setDescription(`Latest Announcement: ${fs.readFileSync("./db/announcement.txt").toString()}`)
		.addField('<:megusta:293231471173304320> Memey Commands', 'asktrump, blasphemy, justright, kill, mama, meme, oneliner, pun, pupper, shitpost, vote')
		.addField('<:LUL:298887728161095681> Tags & text ｍａｎｉｐｕｌａｔｉｏｎ', 'feelsbadman, justright, lenny, lul, vaporwave')
		.addField('🖼 Image Manipulation', 'trigger *(thanks blargbot)*, invert, salty, warp')
		.addField('🎤 Voice Commands', 'airhorn, knock, mlg, shitsound')
		.addField('ℹ Utilities and Information', 'commands, help, melmsie, ping, prefix, stats')
		.setFooter(`Any questions or ideas? Come hang out on this server: discord.gg/3GNMJBG`)
	})
}
