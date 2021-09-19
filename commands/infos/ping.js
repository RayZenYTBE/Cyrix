module.exports = {
    name: 'ping',
    aliases: [],
    category: 'Infos',
    utilisation: '{prefix}ping',

    execute(client, message) {
        message.channel.send(`${client.emotes.success} - **PONG!!!** Bot ping latency : **${client.ws.ping}ms** !`);
    },
};