const Discord = require("discord.js");

module.exports = {
  name: "ajuda",
  description: "Lista todos os comandos.",
  
  execute(message, args) {
    const comandosEmbed = {
		color: 0x36f592,
		title: 'Lista de comandos do PintoBOT',
		author: {
			name: 'PintoBOT',
			icon_url: 'https://i.imgur.com/AZI5OWm.png',
		},
		fields: [
			{
				name: '!opgg',
				value: 'Perfil OPGG.',
			},
			{
				name: '!tft',
				value: 'Link úteis TFT.',
			},
			{
				name: '!sonic',
				value: 'Shitpost Sonic',
			},
			{
				name: '!najinha + frase',
				value: 'Shitpost Naja',
			},
			{
				name: '!vandaum + frase',
				value: 'Shitpost Vandaum',
			},
		],
		image: {
			url: 'https://i.imgur.com/Yy4NAy4.png',
		},
	
	};

    message.reply({embed: comandosEmbed});
  }
};
