"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const dotenv_1 = __importDefault(require("dotenv"));
const logger_js_1 = __importDefault(require("./tools/logger.js"));
dotenv_1.default.config();
const client = new discord_js_1.Client({
    intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES"],
});
client.on('ready', async (client) => {
    logger_js_1.default.info("Logged in as " + client.user?.tag);
});
client.on('guildMemberAdd', (member) => {
    logger_js_1.default.info("Joined: " + member);
});
client.on("messageCreate", async (message) => {
    logger_js_1.default.info("Message: " + message.content);
});
client.login(process.env.CLIENT_TOKEN);
