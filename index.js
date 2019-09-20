const Discord = require('discord.js');
const client = new Discord.Client();

const config = require('./config.json');
require('dotenv').config();

const l = require('./util/logger.js');


client.on('ready', () => {l.log('Cor.0N4 online.')});

client.on('message', message => {
	if (message.member.highestRole.name == '@everyone') {
		message.member.addRole(config.roles.visitor);
	}
});

client.login(process.env.CLIENT_TOKEN);