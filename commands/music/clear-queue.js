module.exports = {
    name: 'clear-queue',
    aliases: ['cq'],
    category: 'Music',
    utilisation: '{prefix}clear-queue',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - You can't control me outside the VC man. Join a VC first!`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Wait... I didn't see you here... you're not in the same VC as me!`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - There is no music or queue going arround here man!`);

        if (client.player.getQueue(message).tracks.length <= 1) return message.channel.send(`${client.emotes.error} - You can't call 1 song playing as a queue. Play at least 2 musics to make a queue!`);

        client.player.clearQueue(message);

        message.channel.send(`${client.emotes.success} - Woooshhh! The queue fly away from Discord and **DISSAPEAR** !`);
    },
};