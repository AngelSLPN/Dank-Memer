exports.run = function (undefined, msg, undefined, undefined, Discord) {
	msg.channel.send({ 
		embed: new Discord.RichEmbed()
			.setColor('#3676b3')
			.setAuthor('Commands 💯 👌 🔥')
			.setDescription('Want a place to meme? [Join my server!](https://discord.gg/3GNMJBG)')
			.addField('<:feelsgreatman:326155536800284673> Memey Commands', 'annoy, asktrump, bother, cowsay, gooby, joke, justright, kill, meme, mock, pun, shitpost')
			.addField('💵  Donator Commands', 'custom, patreon, repeat, spam')
			.addField('💰 Donator Tags', 'doge, dolan, fuckyeah, kappa, kappa pride, lenny, lul, megusta, thisisfine, troll')
			.addField('📷 Image Manipulation', 'batslap, brazzers, drake, ifunny, invert, magik, salty, spank, trigger, warp')
			.addField('🎙 Voice Commands', 'airhorn, jail, knock, mlg, nicememe, rickroll, scare, shitsound, stop')
			.addField('🔧 Utilities and Information', 'clean, help, melmsie, ping, stats, tts')
			.addField('⏱ Coming Soon', 'funeral, sfw, disable commands per guild')
			.setFooter('Special thanks to CrimsonXV and Aetheryx. Credit for trigger goes to stupidcat.')
	})
}