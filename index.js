const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

client.on('ready', async () => {
    console.clear();
    console.log(`${client.user.tag} - rich presence started!`);

    const r = new Discord.RichPresence()
        .setApplicationId('1165284906054729738')
        .setType('STREAMING')
        .setURL('https://twitch.tv/cyber_winner')
        .setState('struggling')
        .setName('Pranjal Yoooo')
        .setDetails('My Life')
        .setAssetsLargeImage('https://media.discordapp.net/attachments/1212085053870309436/1291066255066796182/IMG_20240318_213850.jpg?ex=66febea6&is=66fd6d26&hm=684506e6341a142696f60461eaea7dc2507e90e7eebba82e1df36d99f6dbbfe3&')
        .setAssetsLargeText('I am a minecraft player my DMs are open')
        .setAssetsSmallImage('https://media.discordapp.net/attachments/1212085053870309436/1291066564124348466/17371ac53d1f82719e18cd14da9991b7.gif?ex=66febeef&is=66fd6d6f&hm=7f55acad58aeeaeed5c6ccdaf6e0ac0f29264804dcdb72d84a08d0b1856aa861&')
        .setAssetsSmallText('DISCORD')
        .addButton('Click here for surprise', 'https://discord.gg/sMZZQZZQHy');

    client.user.setActivity(r);
    client.user.setPresence({ status: 'dnd' });
});

client.login(process.env.TOKEN);