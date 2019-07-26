const Discord = require('discord.js');
exports.run = function(client, message, args) {
       if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(message.author.username, message.author.avatarURL)
    .setTitle('Komutlarımızı Özelden Kullanamassın!')
    return message.author.sendEmbed(ozelmesajuyari); }
     if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle(":heavy_multiplication_x: Bu Komutu Kullanabilmek İçin BAN Yetkisine Sahip Olman Gerekiyor."));
    message.guild.createRole({
  name: 'Polis',
  color: 'BLUE',
})
      message.guild.createRole({
        name: 'BordoBereli',
        color: 'RED',
      })
            message.guild.createRole({
        name: 'Jandarma',
        color: 'BLUE',
      })
            message.guild.createRole({
        name: 'Komando',
        color: 'GREEN',
      })
  .then(role => message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle(":heavy_check_mark: Meslekler Kuruldu!")))
  .catch(console.error)
    }



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'meslekkur',
  description: 'Meslek Kurar',
  usage: 'meslekkur'
};
