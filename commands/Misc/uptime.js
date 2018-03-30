const main = require('../index').Main;
const functions = main.getFunctions();
const data = main.getData();
var token = data.token();
var prefix = data.prefix();
var osuApiKey = data.osuApiKey();
var owner = data.owner();
var allEvents = data.allEvents();
var debug = data.debug();
const wikis = {
	home: data.wikis().home,
	commands: data.wikis().commands,
	replies: data.wikis().replies,
	faq: data.wikis().faq,
	isEnabled: data.wikisEnabled()
};

const discord = require('discord.js');
const { Message, Client } = discord;
class uptime {
	/**
	 * 
	 * @param {Message} msg 
	 * @param {Client} client 
	 */
	constructor(msg, client) {
        var messageArray = msg.content.split(' ');
		var command_prefix = messageArray[0];
		var args = messageArray.slice(1).join(' ');
		var command = command_prefix.replace(prefix, '');
		
		var miliseconds = client.uptime % 1000;
		var seconds = Math.floor(client.uptime / 1000) % 60;
		var minutes = Math.floor(Math.floor(client.uptime / 1000) / 60) % 60;
		var hours = Math.floor(Math.floor(Math.floor(client.uptime / 1000) / 60) / 60) % 24;
        var days = Math.floor(Math.floor(Math.floor(Math.floor(client.uptime / 1000) / 60) / 60) / 24);
		msg.channel.send(new discord.RichEmbed()
			.setColor([255, 0, 0])
			.setAuthor(client.user.username, client.user.avatarURL)
			.addField('Days', days)
			.addField('Hours', hours)
			.addField('Minutes', minutes)
			.addField('Seconds', seconds)
			.addField('Miliseconds', miliseconds));
	}
}
module.exports = uptime;
