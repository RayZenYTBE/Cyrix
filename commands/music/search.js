module.exports = {
    name: 'search',
    aliases: ['sr'],
    category: 'Music',
    utilisation: '{prefix}search [name/URL]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Fail to execute the command. You haven't join any VC yet.`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Fail to execute the command. You joined a different VC as me...`);

        if (!args[0]) return message.channel.send(`${client.emotes.error} - Invalid keyword. Please specify another valid one.`);

        client.player.play(message, args.join(" "));
    },
};