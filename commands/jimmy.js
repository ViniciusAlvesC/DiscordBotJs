const Jimp = require("jimp");
const Discord = require("discord.js");

module.exports = {
    name: "jimmy",
    description: "Shitpost do sonic.",
    async execute(message, args) {
        const font = await Jimp.loadFont(Jimp.FONT_SANS_16_BLACK);
        const mensagem = args.join(" ")
        const text = {
            texto: `${mensagem}`,
            maxWidth: 400,
            maxHeight: 30 + 10, 
            placementX: 45, 
            placementY: 35 
          };

        Jimp.read('https://i.imgur.com/9aWM7R1.png')
            .then(bg => {
                if (mensagem.replace(/\s/g, "").length <= 100) {
                   let tamanho = mensagem.replace(/\s/g, "").length
                  bg.print(
                    font,
                    text.placementX,
                    text.placementY,
                    {
                      text: text.texto,
                      alignmentX: Jimp.HORIZONTAL_ALIGN_LEFT,
                      alignmentY: Jimp.VERTICAL_ALIGN_TOP
                    },
                    text.maxWidth,
                    text.maxHeight
                  ).write("teste.png");
                  message.reply({files: ["teste.png"]});
                } else {
                  message.reply('Texto muito longo');
                }
              })
              .catch(err => {
                console.log('algum erro')
              });


    }


};