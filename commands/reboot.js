exports.run = async function (undefined, msg) {
	if (msg.author.id !== config.owner) 
		return msg.channel.send('tfw you don\'t have permission to use this command :fire:')

	await msg.react('👌')
	await msg.channel.send('Rebooting...')
	process.exit()
}
