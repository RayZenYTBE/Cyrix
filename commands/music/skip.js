module.exports = {
    name: 'skip',
    aliases: ['sk'],
    category: 'Music',
    utilisation: '{prefix}skip',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - I can't hear you... you're not in a VC...`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - I can't listen to you either... Different VC!`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - You can't skip a VC! Go play some music and skip it!`);

        const success = client.player.skip(message);

        if (success) message.channel.send(`${client.emotes.success} - Processed! The current music has been **skipped** !`);
    },
};