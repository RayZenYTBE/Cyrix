module.exports = async (client) => {
    console.log(`Successfully logged in as ${client.user.username}. Ready on ${client.guilds.cache.size} servers, for a total of ${client.users.cache.size} users! Thanks for using Cyrix Bot by AtMostFear!`);

    client.user.setActivity(client.config.discord.activity);
};
