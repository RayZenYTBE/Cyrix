module.exports = {
    name: 'volume',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}volume [1-100]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - You can't control the volume using only chat! Join a VC!`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - You're almost there! 1 more step closer to controling the volume. Recheck the VC you've joined with my VC. Is it the same?`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - It's enough silence here. You can't control *silence's* volume!`);

        if (!args[0] || isNaN(args[0]) || args[0] === 'Infinity') return message.channel.send(`${client.emotes.error} - Hold it! Please specify a number of volume you wanted to set to!`);

        if (Math.round(parseInt(args[0])) < 1 || Math.round(parseInt(args[0])) > 100) return message.channel.send(`${client.emotes.error} - Wowowow, hold it up lord. That's not a valid number of volume. Choose 1 number from 1 to 100!`);

        const success = client.player.setVolume(message, parseInt(args[0]));

        if (success) message.channel.send(`${client.emotes.success} - Volume has been set to **${parseInt(args[0])}%** ! Remember, a music with too much volume and too less volume isn't perfect for party!`);
    },
};