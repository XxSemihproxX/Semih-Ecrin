const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix; "se!"

module.exports = client => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar yüklendi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giriş yapıldı!`);
  client.user.setStatus("online");
   var oyun = [
        "😘Semih❤&❤Ecrin😍",
        "😍Ecrin❤&❤Semih😘",
        "✨se!yardım",
        "💦HerGün Yeni Komutlar!",
        "👑Yapımcım ! ₵₣ ✯SΞMIH VΞVØ#5565",
        "+160 Komut 🍷",
        "💪 7/24 Aktif!",
    ];

    setInterval(function() {

        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);

        client.user.setGame(oyun[random], "https://www.twitch.tv/xxsemihproxx");
        }, 2 * 2500);
}
