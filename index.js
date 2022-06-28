const Discord = require('discord.js');
const client = new Discord.Client({ 
	intents: [ "GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES"],
	fetchAllMembers: true,
});

const config = require('./config.json');
require('dotenv').config();

const logger = require('./tools/logger.js');

client.on('ready', async (client) => {
	logger.info("Logged in as " + client.user.tag);
});

client.on('guildMemberAdd', (member) => {
	logger.info("Joined: " + member);
});

client.on("messageCreate", async (message) => {
	logger.info("Message: " + message.content);
})

client.login(process.env.CLIENT_TOKEN);