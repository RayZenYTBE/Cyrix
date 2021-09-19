module.exports = {
    name: 'play',
    aliases: ['p'],
    category: 'Music',
    utilisation: '{prefix}play [name/URL]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - FYI, you can't listen to your requested song if you haven't join any VC my dear 😊`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Also, you can't hear your requested song if you join a different VC as me sweetie 😊`);

        if (!args[0]) return message.channel.send(`${client.emotes.error} - Sorry, but that's not an *existed* title of a song.`);

        client.player.play(message, args.join(" "), { firstResult: true });
    },
};