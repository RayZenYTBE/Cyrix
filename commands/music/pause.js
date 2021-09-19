module.exports = {
    name: 'pause',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}pause',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Beep boop, boop beep? Pause music permission denied! User haven't join a VC!`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Do you know that you can't kick a ball in Seoul while you're in USA? You also can't pause a music outside my *currently-joined* VC!`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - You can't pause a *blank* music, son!`);

        if (client.player.getQueue(message).paused) return message.channel.send(`${client.emotes.error} - FYI, you can't *double-pausing* a paused music!`);

        const success = client.player.pause(message);

        if (success) message.channel.send(`${client.emotes.success} - Song ${client.player.getQueue(message).playing.title} paused !`);
    },
};