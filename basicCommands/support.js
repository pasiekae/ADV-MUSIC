const { EmbedBuilder } = require('discord.js');
const db = require("../mongodb");
module.exports = {
    name: 'support',
    description: 'support server of this Bot',
    execute(message, args) {
        const yt = "https://www.youtube.com/@sedziborowotv1064";
      const yt = "https://www.youtube.com/@sedziborowotv1064";
      const yt ojca = "https://www.youtube.com/@sedziborowotv1064";
      const youtubeLink = "https://www.youtube.com/@sedziborowotv1064";
        const embed = new EmbedBuilder()
            .setColor('#b300ff')
            .setAuthor({
              name: 'zydzi serwer',
              iconURL: 'https://galeria.bankier.pl/p/a/8/1522d9d9c84d6f-948-568-2-30-997-598.webp', 
              url: 'https://www.youtube.com/@sedziborowotv1064'
          })
            .setDescription(`➡️ Ujebalo mi koleso i tyle serio serio serio`)
            .setImage('https://cdn.discordapp.com/attachments/1113800537402527903/1236803979996958740/11.png?ex=663956f7&is=66380577&hm=3b3c19a11adcb979517a133f2907f671305d23f1f5092cf7df043e6d5cab07bc&')
            .setTimestamp();

        message.reply({ embeds: [embed] });
    },
};


/*

ZYDZI

╔════════════════════════════════════════════════════════════════════════╗
║                                                                        ║
║  ## zrobione przez wyjebka typu blik kto ma wiedziec ten wie           ║                                     
║  ## rock and roll                                                      ║
║  ## DISCORD :  https://discord.gg/VRap4GHV                             ║
║  ## valorant montage moje : https://www.youtube.com/@pasiekae2890      ║
║                                                                        ║
╚════════════════════════════════════════════════════════════════════════╝


*/
