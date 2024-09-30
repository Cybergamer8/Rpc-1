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
        .setAssetsLargeImage('https://media.discordapp.net/attachments/1170286339179159563/1290179358799040512/IMG_20240318_213850.jpg?ex=66fb84a9&is=66fa3329&hm=733a9465294664f6c8f35eeb7ddc119a961528f3154facde87bd83d7a6ba6d4b&')
        .setAssetsLargeText('I am a minecraft player my DMs are open')
        .setAssetsSmallImage('https://media.discordapp.net/attachments/1169491681507278863/1290181771325079664/17371ac53d1f82719e18cd14da9991b7.gif?ex=66fb86e8&is=66fa3568&hm=98d19c842282c7395dd6e97308e9c02e441b0e3ab576b35f344503261e1495a3&')
        .setAssetsSmallText('DISCORD')
        .addButton('Click here for surprise', 'https://discord.gg/sMZZQZZQHy');

    client.user.setActivity(r);
    client.user.setPresence({ status: 'dnd' });
});

client.login(process.env.TOKEN);