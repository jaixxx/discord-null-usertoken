const Discord = require('discord.js-selfbot');
const nullbase = require("./ayarlar.json");

const selamlı = [];
for (let index = 0; index < nullbase.userTOKEN.length; index++) {
    const token = nullbase.userTOKEN[index];
    const client = new Discord.Client();
    client.login(token);
    let memiş;
    client.on('ready', async () => {
        setInterval(() => {
        const oyun = Math.floor(Math.random() * (nullbase.oynuyor.length));
        client.user.setActivity(`${nullbase.oynuyor[oyun]}`, {type: "PLAYING"});
    }, 18000000);
        client.user.setStatus("dnd");
        console.log(`${client.user.tag} olarak giriş yapıldı.`);
        memiş = await client.channels.cache.get(nullbase.seskanalları[index]).join().catch(err => console.error("Sorun Oluştu."));
    });

    client.on('voiceStateUpdate', async (___, newState) => {
        if (
        newState.member.user.bot &&
        newState.channelID &&
        newState.member.user.id == client.user.id &&
        !newState.selfDeaf
        ) {
        newState.selfMute(true); // Mikrofon
        newState.setSelfDeaf(true); // Kulaklık
        }
        });

}
