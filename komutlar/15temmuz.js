const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('RETRAK BOT Sana Mesaj Attı Özel mesajlarını kontrol et. :postbox:');
    message.channel.sendEmbed(ozelmesajkontrol) }
    const pingozel = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('15 Temmuz Şehitlerimizi Saygıyla Anıyoruz \n15 Temmuz Şehitlerimizi Allahtan Rahmet Eylesin Mekanları Cennet Olsun. \n 15 Temmuz için hazırlanan klip https://youtu.be/OItB_rJuCcY ');
    return message.author.sendEmbed(pingozel)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['15tem', '15t', '15', 'temmuz'],
  permLevel: 0
};

exports.help = {
  name: '15temmuz',
  description: '15temmuz.',
  usage: '15temmuz'
};
