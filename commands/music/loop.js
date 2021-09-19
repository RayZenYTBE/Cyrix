module.exports = {
    name: 'loop',
    aliases: ['lp', 'repeat'],
    category: 'Music',
    utilisation: '{prefix}loop',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - You have no powers to control me outside the VC!`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Actualy, we're in the different VC...`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Important to remember, you can't loop a *no playing music right now* . You can't even looop a VC either!`);

        if (args.join(" ").toLowerCase() === 'queue') {
            if (client.player.getQueue(message).loopMode) {
                client.player.setLoopMode(message, false);
                return message.channel.send(`${client.emotes.success} - *Click* the loop has been **disabled** !`);
            } else {
                client.player.setLoopMode(message, true);
                return message.channel.send(`${client.emotes.success} - *Click* the loop mode has been **enabled** and the whole queue will be repeated endlessly !`);
            };
        } else {
            if (client.player.getQueue(message).repeatMode) {
                client.player.setRepeatMode(message, false);
                return message.channel.send(`${client.emotes.success} - *Click* the loop has been **disabled** !`);
            } else {
                client.player.setRepeatMode(message, true);
                return message.channel.send(`${client.emotes.success} - *Click* the loop mode has been  **enabled** and the current music will be repeated endlessly !`);
            };
        };
    },
};