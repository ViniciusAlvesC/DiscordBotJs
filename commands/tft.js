const Discord = require("discord.js");

module.exports = {
  name: "tft",
  description: "Links úteis tft.",
  execute(message, args) {
    const tftEmbed = {
      color: 0x36f592,
      title: "TFT - League of Legends",
      author: {
        name: "PintoBOT",
        icon_url: "https://www.proguides.com/public/media/games/teamfight-tactics/TFTlogo1.png",
      },
      fields: [
        {
          name: "Champions - Tier List",
          value: "https://tftactics.gg/tierlist/champions"
        },
        {
          name: "Team Comps - Tier List",
          value: "https://tftactics.gg/tierlist/team-comps"
        },
        {
          name: "Origins - Tier List",
          value: "https://tftactics.gg/tierlist/origins"
        },
        {
          name: "Classes - Tier List",
          value: "https://tftactics.gg/tierlist/classes"
        },
        {
          name: "Items - Tier List",
          value: "https://tftactics.gg/tierlist/items"
        },
        {
          name: "\u200b",
          value: "\u200b"
        },
        {
          name: "Item Build",
          value: "https://blitz.gg/tft/items"
        },
        {
          name: "Patch Notes",
          value: "https://blitz.gg/tft/patchnotes"
        },
        {
          name: "\u200b",
          value: "\u200b"
        },
        {
          name: "Leader Board",
          value: "https://lolchess.gg/leaderboards?region=br"
        }
      ],
      image: {
        url: "https://br.leagueoflegends.com/sites/default/files/styles/scale_xlarge/public/upload/tft_announce_article_header.jpg?itok=Xd_kpE7_"
      },
      thumbnail: {
        url: "https://tftcalculator.com/static/media/logo.4c8a1e2d.png"
      },
      timestamp: new Date(),
      footer: {
        text: "League of Legends - pintoBOT",
        icon_url: "https://www.proguides.com/public/media/games/teamfight-tactics/TFTlogo1.png"
      }
    };

    message.reply({ embed: tftEmbed });
  }
};
