const Discord = require("discord.js");

module.exports = {
  name: "opgg",
  description: "Perfil OpGG",
  execute(message, args) {

    if (!args[0]) {

        message.reply('Coloque um nome de invocador')
    } else {
        const invocador = args.join('+')
        const invocadorNome = args.join(' ')
        const opggEmbed = {
            color: 0x36f592,
            title: `OPGG - ${invocadorNome}`,
            author: {
                name: 'PintoBOT',
                icon_url: 'https://is1-ssl.mzstatic.com/image/thumb/Purple113/v4/8d/d2/d3/8dd2d3cd-6122-bdfe-4f97-67b98cd258c5/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-7.png/246x0w.jpg',
            },
            fields: [
                {
                    name: 'Seu perfil:',
                    value: `https://br.op.gg/summoner/userName=${invocador}`,
                },
            ],
            image: {
                url: 'https://i.imgur.com/Yy4NAy4.png',
            },
            thumbnail: {
                url: "https://opgg-static.akamaized.net/images/logo/2015/reverse.rectangle.png"
              },
        };

        message.reply({embed: opggEmbed});
      }     
    }
};
