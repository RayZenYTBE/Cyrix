module.exports = (client, message, query, tracks) => {
    message.channel.send({
        embed: {
            color: '#BB1815',
            author: { name: `Here are your search results for ${query}` },
            footer: { text: '' },
            timestamp: new Date(),
            description: `${tracks.map((t, i) => `**${i + 1}** - ${t.title}`).join('\n')}`,
        },
    });
};