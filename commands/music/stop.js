module.exports = {
    name: 'stop',
    aliases: ['dc'],
    category: 'Music',
    utilisation: '{prefix}stop',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - You have no rights to stop a music outside a VC!`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - You have no rights to stop a music from a different VC!`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - You have no rights to stop a **0** Playing music queue.`);

        client.player.setRepeatMode(message, false);
        const success = client.player.stop(message);

        if (success) message.channel.send(`${client.emotes.success} - Access **GRANTED**! The music has been stopped! Leaving VC now...`);
    },
};