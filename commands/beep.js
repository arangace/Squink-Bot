const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('beep')
        .setDescription('Replies davids dumbo mumbo!'),
    async execute(interaction) {
        await interaction.reply('Davids unit testing my bot!');
    },
};