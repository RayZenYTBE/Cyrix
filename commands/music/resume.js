module.exports = {
    name: 'resume',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}resume',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - 0% access granted. Requirements 0/2 not met (Join a VC)`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - 0% access granted. Requirements 1/2 not met (Join the same VC as me)`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - You can't resume a *no currently playing music* , you know.`);

        if (!client.player.getQueue(message).paused) return message.channel.send(`${client.emotes.error} - Honestly, you can't double-resume a *currently played song* 😊`);

        const success = client.player.resume(message);

        if (success) message.channel.send(`${client.emotes.success} - All requirements met 2/2. Successfuly resume  ${client.player.getQueue(message).playing.title} !`);
    },
};