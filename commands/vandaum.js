const Discord = require("discord.js");
const Canvas = require("canvas");

module.exports = {
  name: "vandaum",
  description: "Shitpost do sonic.",
  async execute(message, args) {
    const mensagem = args.join('+')
    const mensagemCompleta = args.join(' ')

    const canvas = Canvas.createCanvas(700, 400);
    const ctx = canvas.getContext("2d");
    const background = await Canvas.loadImage("./wandao.png");
    
    ctx.fillStyle = 'white';
    ctx.font = "60px Comic Sans MS";
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    ctx.fillText(mensagemCompleta, canvas.width / 7.0, canvas.height / 1.1, 400);

    const attachment = new Discord.Attachment(
      canvas.toBuffer(),
      "welcome-image.png"
    );

    if (mensagemCompleta.length <= 35) {
        return message.reply(attachment);
    } else {
        return message.reply('mensagem muito grande! máximo 35 caracteres (contando com espaços)')
    }
  }
};