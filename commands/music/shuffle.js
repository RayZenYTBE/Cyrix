module.exports = {
    name: 'shuffle',
    aliases: ['sh'],
    category: 'Music',
    utilisation: '{prefix}shuffle',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - U r not in a voice channel, my lord`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - U r not in the same VC as me, my lord`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - You can't shuffle a *non-existed* queue. Create soe by adding 2 or more songs!`);

        const success = client.player.shuffle(message);

        if (success) message.channel.send(`${client.emotes.success} - As you wish, my lord. Queue : **${client.player.getQueue(message).tracks.length}** has been suffled!`);
    },
};