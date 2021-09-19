module.exports = {
    name: 'filter',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}filter [filter name]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - It's impossible for you to control me outside the VC!`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - It's clear that controling me in different VC is impossible. Recheck the VC you've joined and my VC!`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - There is no filterable music playing right now. Try play some and retry using this command!`);

        if (!args[0]) return message.channel.send(`${client.emotes.error} - There are no such things as *BLANK* filter! Specify one valid filter!`);

        const filterToUpdate = client.filters.find((x) => x.toLowerCase() === args[0].toLowerCase());

        if (!filterToUpdate) return message.channel.send(`${client.emotes.error} - What the hell is that? I don't undertand what that filter is. Maybe try 8D or nightcore or bassboost?`);

        const filtersUpdated = {};

        filtersUpdated[filterToUpdate] = client.player.getQueue(message).filters[filterToUpdate] ? false : true;

        client.player.setFilters(message, filtersUpdated);

        if (filtersUpdated[filterToUpdate]) message.channel.send(`${client.emotes.music} - I'm **adding** the filter to the music, please wait... Note : the longer the music is, the longer this will take.`);
        else message.channel.send(`${client.emotes.music} - I'm **disabling** the filter on the music, please wait... Note : the longer the music is playing, the longer this will take.`);
    },
};