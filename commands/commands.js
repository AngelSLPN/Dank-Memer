exports.run = function (client, msg, args, config, Discord) {
	if (!msg.channel.permissionsFor(client.user.id).has('USE_EXTERNAL_EMOJIS'))
		return msg.reply('Well shit, there was a permission error! Make sure I have `use external emojis` so I can do this shit!').catch(() => console.error)

	msg.channel.send({
		embed: new Discord.RichEmbed()
			.setColor('#3676b3')
			.setAuthor('Commands 💯 👌 🔥')
			.setDescription('Want a place to meme? [Join my server!](https://discord.gg/3GNMJBG)')
			.addField('<:feelsgreatman:326155536800284673> Memey Commands', 'annoy, asktrump, bother, cowsay, gooby, joke, justright, kill, meme, memebox, mock, pun, shitpost, spin, tweet')
			.addField('💰 Donor Commands', 'custom, doge, dolan, fuckyeah, kappa, kappa pride, lenny, lul, megusta, patreon, repeat, spam, thisisfine, troll')
			.addField('📷 Image Manipulation', 'batslap, brazzers, byemom, dank, drake, invert, jail, pride, magik,needsmorejpeg, salty, spank, trigger, warp')
			.addField('🎙 Voice Commands', 'airhorn, knock, mlg, nicememe, rickroll, scare, shitsound, stop')
			.addField('🔧 Utilities and Information', 'clean, emoji, help, melmsie, ping, stats, tts')
			.setFooter('Special thanks to CrimsonXV and Aetheryx. Credit for trigger goes to stupidcat.')
	}).catch(() => console.error)
}