const Discord = require('discord.js');

exports.run = (client, message, args, member) => {
    let mesaj = args.slice(0).join(''); // Siparis Kanal ID
    if (mesaj.length < 1) return message.channel.send(':x: Lütfen Siparişinizi Yazınız');
  let incidentchannel = message.guild.channels.find(`id`, ""); // Teslimat Kanal ID
    if(!incidentchannel) return message.channel.send(":x: **siparişler** kanalını bulamıyorum.");

    incidentchannel.send(` **Sipariş**\n\n- ${mesaj} ***\n Sipariş Veren: ${message.author}***`);
    message.channel.send(':white_check_mark: Siparişiniz #║►siparişler kanalına İletildi. Teslimatınız Geleceği Zaman #║►teslimatlar kanalına Bildirilecek ')
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['siparis'],
  permLevel: 0
};

exports.help = {
  name: 'sipariş',
  description: 'Siparis',
  usage: 'sipariş <mesaj>'
};
