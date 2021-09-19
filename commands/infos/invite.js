module.exports = {
    name: 'invite',
    aliases: [],
    category: 'Infos',
    utilisation: '{prefix}invite',

    execute(client, message) {
        message.channel.send(`Invite me [here](https://discord.com/api/oauth2/authorize?client_id=884271032817557576&permissions=141502709105&scope=bot)

Developed by AtMostFear ==> https://sites.google.com/view/atmostfeardevelopersite/home and Michael S Developer ==> https://sites.google.com/view/michaelsatriach/home`);
    },
};