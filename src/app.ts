import { Client, GuildMember, Message } from "discord.js";
import dotenv from "dotenv";
import logger from './tools/logger.js';
import config from '../config.json';

dotenv.config();

const client = new Client({ 
	intents: [ "GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES"],
});

client.on('ready', async (client: Client) => {
	logger.info("Logged in as " + client.user?.tag);
});

client.on('guildMemberAdd', (member: GuildMember) => {
	logger.info("Joined: " + member);
});

client.on("messageCreate", async (message: Message) => {
	logger.info("Message: " + message.content);
});

client.login(process.env.CLIENT_TOKEN);