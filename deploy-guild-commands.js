const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const fs = require('fs');
require('dotenv').config()
const commands = [];
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

// Place your client and guild ids here
const clientId = process.env.CLIENT_ID
const guildId = process.env.GUILD_ID
const token = process.env.CLIENT_TOKEN

for (const file of commandFiles) {
    console.log(commandFiles.length)
    console.log(commandFiles)
    const command = require(`./commands/${file}`);
    console.log(file)
    console.log(command)
    commands.push(command.data.toJSON());
}

const rest = new REST({ version: '9' }).setToken(token);

(async () => {
    try {
        console.log('Started refreshing application (/) commands.');

        await rest.put(
            Routes.applicationCommands(clientId),
            { body: commands },
        );

        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
})();