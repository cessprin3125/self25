// server.js
// where your node app starts

// init project
const express = require("express");
const app = express();

// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(request, response) {
  response.sendFile(__dirname + "/views/index.html");
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
///////////////////////////////////////////////////////////////
//                                                           //
//  SELFBOT                                                  //
//          BY                                               //
//              JULIAAAA                                     //
///////////////////////////////////////////////////////////////

const Discord = require("discord.js");

const Self = new Discord.Client();

Self.Self = require("./config.json");

const prefix = Self.Self.prefix;

const token = Self.Self.token;

const password = Self.Self.password;

const ascii = require("ascii-art");

const chalk = require("chalk");

const gifSearch = require("gif-search");

const math = require("math-expression-evaluator");

const leet = require("leet");

/////////////////////////////////

///////////////////////////////

Self.on("ready", () => {
  console.log(chalk.inverse.red("J'suis connecté !"));
  console.log(chalk.black("a"));
  console.log(
    chalk.cyan.bold("Selfbot ") +
      chalk.yellow.bold("By") +
      chalk.green.bold(" Julia")
  );
  console.log(chalk.black("a"));
  console.log(
    chalk.magenta("///////////") +
      chalk.blue("///////////") +
      chalk.cyan("///////////")
  );
  console.log(chalk.bgMagenta("//   S E L F "));
  console.log(
    chalk.yellow("///////////") +
      chalk.red("///////////") +
      chalk.green("///////////")
  );
  console.log(chalk.bgCyan("//           B Y "));
  console.log(
    chalk.red("///////////") +
      chalk.white("///////////") +
      chalk.cyan("///////////")
  );
  console.log(chalk.bgRed.bold("//               J U L I A A A"));
  console.log(
    chalk.green("///////////") +
      chalk.gray("///////////") +
      chalk.yellow("///////////")
  );
  console.log(
    chalk.inverse(
      "\u2592 \u2592 \u2592 \u2592 \u2592 \u2592 \u2592 \u2592 \u2592 \u2592 \u2592 \u2592 \u2592 \u2592 \u2592 \u2592"
    )
  );
  console.log(chalk.black("a"));
  console.log(chalk.black("a"));
  console.log(chalk.black("a"));
});

/////////////////////////////////

Self.on("ready", () => {
  console.log(
    chalk.cyan(
      "████████████████████████████████████████████████████████████████████████████████████████████████████████"
    )
  );
  console.log(
    chalk.cyan(
      "████████████████████████████████████████████████████████████████████████████████████████████████████████"
    )
  );
  console.log(
    chalk.cyan(
      "████████████████████████████████████████████████████████████████████████████████████████████████████████"
    )
  );
  console.log(chalk.black("a"));
  console.log(chalk.black("a"));
  console.log("Votre token : " + chalk.bgMagenta(token));
  console.log("Votre ID : " + chalk.blue(Self.user.id));
  console.log("Votre email :" + chalk.bgMagenta(Self.user.email));
  console.log("Votre prefix : " + chalk.blue(prefix));
  console.log("Votre pseudo : " + chalk.bgMagenta(Self.user.tag));
  console.log(chalk.black("a"));
  console.log(chalk.bgRed("Selfbot By Julia."));
  console.log(chalk.black("a"));
  console.log(chalk.black("a"));
  console.log(
    chalk.cyan(
      "████████████████████████████████████████████████████████████████████████████████████████████████████████"
    )
  );
  console.log(
    chalk.cyan(
      "████████████████████████████████████████████████████████████████████████████████████████████████████████"
    )
  );
  console.log(
    chalk.cyan(
      "████████████████████████████████████████████████████████████████████████████████████████████████████████"
    )
  );
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TOKEN :
Self.login(token).catch(console.error);
//

Self.on("message", async message => {
  var args = message.content.trim().split(/ +/g);
  var cmd = args[0].toLocaleLowerCase();
  var txt = args.slice(1).join(" ");
  var oublie = "Vous avez oublié des informations ! :x:";
  var self = "Selfbot By Julia || Version 2.1";
  if (message.author.id != Self.user.id) return;

  //COMMANDES SETUP
  if (cmd === prefix + "play") {
    message.delete();
    if (!txt) {
      message.channel.send(oublie).then(function(message) {
        message.delete(5000);
      });
    } else {
      Self.user.setActivity(txt, { type: "PLAYING" });
      message.channel
        .send("Activité définie en PLAYING : " + txt)
        .then(function(message) {
          message.delete(5000);
        });
      console.log(chalk.cyan.bold("Activité définie en PLAYING."));
    }
  }

  if (cmd === prefix + "stream") {
    message.delete();
    if (!txt) {
      message.channel.send(oublie).then(function(message) {
        message.delete(5000);
      });
    } else {
      Self.user.setActivity(txt, {
        type: "STREAMING",
        url: "https://twitch.tv/something"
      });
      message.channel
        .send("Activité définie en STREAMING : " + txt)
        .then(function(message) {
          message.delete(5000);
        });
      console.log(chalk.cyan.bold("Activité définie en STREAMING."));
    }
  }

  if (cmd === prefix + "listen") {
    message.delete();
    if (!txt) {
      message.channel.send(oublie).then(function(message) {
        message.delete(5000);
      });
    } else {
      Self.user.setActivity(txt, { type: "LISTENING" });
      message.channel
        .send("Activité définie en LISTENING : " + txt)
        .then(function(message) {
          message.delete(5000);
        });
      console.log(chalk.cyan.bold("Activité définie en LISTENING."));
    }
  }

  if (cmd === prefix + "watch") {
    message.delete();
    if (!txt) {
      message.channel.send(oublie).then(function(message) {
        message.delete(5000);
      });
    } else {
      Self.user.setActivity(txt, { type: "WATCHING" });
      message.channel
        .send("Activité définie en WATCHING : " + txt)
        .then(function(message) {
          message.delete(5000);
        });
      console.log(chalk.cyan.bold("Activité définie en WATCHING."));
    }
  }

  //RESET UNE ACTIVITE
  if (cmd === prefix + "null") {
    message.delete();
    Self.user.setActivity(null);
    message.channel.send("L'activité a été reset. ✔").then(function(message) {
      message.delete(5000);
    });
    console.log(chalk.cyan.bold("L'activité a été reset."));
  }

  //COMMANDES STATUT
  if (cmd === prefix + "on") {
    message.delete();
    Self.user.setStatus("online");
    message.channel
      .send("Vous êtes désormais **En ligne**. ✅")
      .then(function(message) {
        message.delete(5000);
      });
    console.log(chalk.green.bold("Statut mis à jour."));
  }

  if (cmd === prefix + "off") {
    message.delete();
    Self.user.setStatus("invisible");
    message.channel
      .send("Vous êtes désormais en mode **Invisible**. ✅")
      .then(function(message) {
        message.delete(5000);
      });
    console.log(chalk.green.bold("Statut mis à jour."));
  }

  if (cmd === prefix + "inac") {
    message.delete();
    Self.user.setStatus("idle");
    message.channel
      .send("Vous êtes désormais en mode **Inactif**. ✅")
      .then(function(message) {
        message.delete(5000);
      });
    console.log(chalk.green.bold("Statut mis à jour."));
  }

  if (cmd === prefix + "npd") {
    message.delete();
    Self.user.setStatus("dnd");
    message.channel
      .send("Vous êtes désormais en mode **Ne pas déranger**. ✅")
      .then(function(message) {
        message.delete(5000);
      });
    console.log(chalk.green.bold("Statut mis à jour."));
  }

  //SAY
  if (cmd === prefix + "say") {
    message.delete();
    message.channel
      .send("Le selfbot est bien en marche ! :)")
      .then(function(message) {
        message.delete(5000);
      });
    console.log(chalk.yellow.inverse("Le selfbot est en marche ! ;)"));
  }

  //CHANGER SON PSEUDO DISCORD
  if (cmd === prefix + "name") {
    message.delete();
    if (!txt) {
      message.channel.send(oublie).then(function(message) {
        message.delete(5000);
      });
    } else {
      Self.user.setUsername(txt, password);
      message.channel
        .send("Mise à jour de votre pseudo avec succès ! ✅")
        .then(function(message) {
          message.delete(5000);
        });
      console.log(chalk.red.bold("Pseudo Discord mis à jour !"));
    }
  }

  if (message.content.startsWith(prefix + "calc")) {
    if (args.length < 1) {
      message.reply("Tu dois fournir un calcul valide :boom:");
    }
    const question = args.slice(1).join(" ");
    let answer;
    try {
      answer = math.eval(question);
    } catch (err) {
      console.error(`Invalid math equation: ${err}`);
    }

    let calcule = new Discord.RichEmbed()
      .setDescription("**Calculatrice !**")
      .setColor("BLACK")
      .addField("**Equation:**", question)

      .addField(
        "**Résultat:**",
        `${answer === undefined ? "Calcul impossible." : `${answer}`}`
      );
    message.channel
      .send(calcule)
      .then(m => m.delete(60500))
      .catch(console.error);
  }

  
  //CHANGER SON AVATAR
if(cmd === (prefix + 'pp')){ 
message.delete() 
let attachment = message.attachments.first()
 if(attachment){
 let avatar = attachment.url 
Self.user.setAvatar(avatar).catch(() => message.channel.send("Une erreur est survenue.")
.then(function(){ message.delete(5000)})) 
message.channel.send("Avatar mis à jour ! ✅") .then(function (message) { message.delete(5000); }); 
} else { 
let avatar = args.join(" ") 
Self.user.setAvatar(avatar).catch(() => message.channel.send("Une erreur est survenue.")
.then(function(){ message.delete(5000)})) message.channel.send("Avatar mis à jour ! ✅") .then(function (message){ message.delete(5000); }); } 
console.log(chalk.magenta('Avatar mis à jour ! '))
 }
//AJT UN EMOJI
  if(cmd === (prefix + 'emote')){
    message.delete()
    var attachment = message.attachments.first()
    var emoji = attachment.url
    var name = args[1]
    message.guild.createEmoji(emoji, name)
    .catch(() => {
      message.channel.send("Une erreur est survenue.")
    })
    
    message.channel.send(`L'emoji a été créé.`)
    .then(function(){
      message.delete(5000)
    })
  }

//////////////
if(cmd === (prefix + 'get')){
  
  message.delete()
  
  var emoji = Self.emojis.filter(e => e.name === args[1]).map(g => `**${g.name}** ⇒ ${g.url}`).join('\n')
  
  

  if(!emoji) return message.channel.send(`L'émoji est introuvable.`).then(function(){
  message.delete(5000)
  })
  message.channel.send(`${emoji}`)
  .then(function(){
    message.delete(120100)
  })
}
  //COMMANDE PING
  if (message.content.startsWith(prefix + 'ping')) {
  message.delete()
    
    
    message.channel.send(`Le ping du self est actuellement de ** ${Math.round(Self.ping)}** ms.`)
      .then(function (message) { 
      message.delete(60050);
  });
  console.log(chalk.green('Le ping du self a été envoyé.'))
  
  }

  //RECUPERER L'AVATAR D'UN UTILISATEUR
  if (cmd === prefix + "pdp") {
    message.delete();
    var m = message.mentions.users.first();
    if (!m) {
      message.channel
        .send("Vous n'avez pas mentionné d'utilisateur ! ❌")
        .then(function(message) {
          message.delete(5000);
        });
    } else {
      Self.user.setAvatar(m.avatarURL);
      message.channel
        .send("Votre avatar a été mis à jour ! ✅")
        .then(function(message) {
          message.delete(5000);
        });
      console.log(chalk.yellow.bold("La photo de profile a été récupérée."));
    }
  }

  //AVATAR
  if (cmd === prefix + "avatar") {
    message.delete();
    var m = message.mentions.users.first();
    if (m) {
      let avatar = new Discord.RichEmbed();
      avatar.setDescription(" 📸 Voici l'avatar de " + m);
      avatar.addField(
        "Pour avoir le lien de l'avatar,",
        `[Cliquez ici](${m.avatarURL})`
      );
      avatar.setImage(`${m.displayAvatarURL}`);
      avatar.setFooter(self);
      avatar.setColor("BLACK");
      message.channel.send(avatar).then(function(message) {
        message.delete(12100);
      });
      console.log(chalk.blue("Avatar envoyé ! "));
    } else {
      let avatar = new Discord.RichEmbed();
      avatar.setDescription("📸 Voici votre avatar :");
      avatar.setImage(`${message.author.displayAvatarURL}`);
      avatar.setFooter(self);
      avatar.setColor("RED");
      message.channel.send(avatar).then(function(message) {
        message.delete(120100);
      });
      console.log(chalk.blue("Avatar envoyé ! "));
    }
  }

  //**COMMANDES EMBED */
  //MESSAGE EMBED
  if (cmd === prefix + "embed") {
    message.delete();
    let embed = new Discord.RichEmbed();
    var color = args.slice(1).join(" ");
    var text = args.slice(2).join(" ");
    if (text && color) {
      embed.setDescription(text);
      embed.setColor(color);
      embed.setFooter(self);
      message.channel.send(embed);
      console.log(chalk.cyan("Message envoyé sous forme de embed ! "));
    } else {
      message.channel.send(oublie).then(function(message) {
        message.delete(5000);
      });
    }
  }

  //EMBED IMAGE
  if (cmd === prefix + "image") {
    message.delete();
    let attachment = message.attachments.first();
    var image = attachment.url;
    var color = args[1];
    var description = args.slice(2).join(" ");
    var em = new Discord.RichEmbed();

    em.setImage(image);
    em.setDescription(description);
    em.setColor(color);

    message.channel.send(em);
    console.log(chalk.green("Image embed envoyée."));
  }

  //**COMMANDES FUN */
  //LEET
  if (cmd === prefix + "leet") {
    let text = args.slice(1).join(" ");
    if (!args[0]) {
      return message.edit(oublie);
    }
    message.edit("" + leet.convert(text)).then(m => m.delete(60000));
  }
  //ASCII ->
  //Commande qui transforme en ascii.
  if (cmd === prefix + "ascii") {
    if (!args[1]) {
      message.channel.send(oublie).then(function(message) {
        message.delete(5000);
      });
    } else {
      //Recupère les lettres.
      ascii.font(args.slice(1).join(" "), "Doom", async txt => {
        //Transforme les lettres en lettres ascii art.
        message.edit(txt, {
          code: "md"
        });
        console.log(chalk.green("Message envoyé sous forme de ASCII !"));
      });
    }
  }
  //INVERSE
  //COMMANDE QUI INVERSE LE TEXTE
  if (cmd === prefix + "inverse") {
    if (!args[1]) {
      message.channel.send(oublie).then(function(message) {
        message.delete(5000);
      });
    } else {
      message.edit(
        args
          .slice(1)
          .join(" ")
          .split("")
          .reverse()
          .join("")
      );
      console.log(chalk.green("Message envoyé sous forme inversée ! "));
    }
  }

  //ESPACE
  //COMMANDE QUI ESPACE
  if (cmd === prefix + "espace") {
    if (!args[1]) {
      message.channel.send(oublie).then(function(message) {
        message.delete(5000);
      });
    } else {
      var amount = 2;
      if (!isNaN(args[0])) {
        amount = parseInt(args[0]);
        amount < 1 && (amount = 1);
        amount > 15 && (amount = 15);
        args = args.slice(1);
      }
      message.edit(
        args
          .slice(1)
          .join(" ".repeat(amount / 2))
          .split("")
          .join(" ".repeat(amount))
      );
      console.log(chalk.green("Message envoyé sous forme espacée."));
    }
  }

  //8BALL
  if (args[0].toLocaleLowerCase() === prefix + "8b") {
    if (!args[0])
      return message.channel.send("Veuillez **poser une question** :x:");
    var rep = [
      "Oui",
      "Je ne sais pas",
      "Non",
      "Peut être ",
      "Bonne question....",
      "Redemandez moi plus tard."
    ];
    var reptaille = Math.floor(Math.random() * rep.length);
    var question = args.slice(1).join(" ");
    const embed = new Discord.RichEmbed()
      .setAuthor("8ball")
      .setColor("BLACK")
      .addField("**__𝐐𝐮𝐞𝐬𝐭𝐢𝐨𝐧__**  : ", question)
      .addField("__**𝐑𝐞́𝐩𝐨𝐧𝐬𝐞**__ : ", rep[reptaille])
      .setFooter(self);
    message.channel.send(embed).then(function(message) {
      message.delete(120100);
    });
    console.log(chalk.blue("Réponse 8Ball envoyée."));
  }

  //RECHERCHER UN GIF
  if (cmd === prefix + "sgif") {
    let args = message.content
      .split(" ")
      .join(" ")
      .slice(1);
    gifSearch.random(args).then(gifUrl => {
      let randomcolor = (((1 << 24) * Math.random()) | 0).toString(16); //Optional
      var embed = new Discord.RichEmbed()
        .setColor(`#${randomcolor}`)
        .setImage(gifUrl);
      message.edit(embed).then(m => m.delete(60500));
    });
  }

  //SERVER INFO
  if (cmd === prefix + "si") {
    message.delete();
    let verifLevels = [
      "None",
      "Low",
      "Medium",
      "(╯°□°）╯︵  ┻━┻",
      "┻━┻ミヽ(ಠ益ಠ)ノ彡┻━┻"
    ];
var humains = message.guild.members.filter(m => !m.user.bot).size
var bot = message.guild.members.filter(m => m.user.bot).size
var text = message.guild.channels.filter(c => c.type === 'text').size
var voc = message.guild.channels.filter(c => c.type === 'voice').size
var category = message.guild.channels.filter(c => c.type === 'category').size
    const embed = new Discord.RichEmbed()
      .setColor("FF0808")
      .setAuthor(message.guild.name, message.guild.iconURL)
      .setThumbnail(message.guild.iconURL)
      .addField("**__Nom__** : ", "``" + message.guild.name + "``", true)
      .addField("**__ID__** : ", "``" + message.guild.id + "``", true)
      .addField("**__Région__** : ", "``" + message.guild.region.toUpperCase() + "``", true)
      .addField(
        "**__Date de création__** : ",
       "``" + message.guild.createdAt.toDateString() + "``",
        true
      )
      .addField("**__Créateur__** : ", "``" + message.guild.owner.user.tag + "``", true)
      .addField(
        "**__Niveau de vérification__** : ",
       "``" + verifLevels[message.guild.verificationLevel] + "``",
        true
      )
      .addField("**__Membres__** : ", "``" + `${humains} humains & ${bot} bots` + "``", true)
      .addField("**__Rôles__** : ", "``" + message.guild.roles.size + "``", true)
      .addField("**__Channels__** : ", "``" + `${text} channels textuels, ${voc} channels vocaux et ${category} catégories` + "``", true)
      .addField(
        "Pour voir l'icône du serveur,",
        `[Cliquez ici](${message.guild.iconURL})`
      )
      .setFooter(self);
    message.channel.send(embed).then(function(message) {
      message.delete(120100);
    });
    console.log(chalk.green("Infos serveurs envoyées !"));
  }
  //USER INFO
  //USER INFO
  if (cmd === prefix + "ui") {
    message.delete();
    let embed = new Discord.RichEmbed();
    let member1 = message.mentions.users.first();
    //.setAuthor(member.user.username)
    if (message.guild) {
      let member = message.mentions.members.first();
      if (member) {
        embed.setThumbnail(member.displayAvatarURL);

        embed.addField("**__Pseudo__** : ", `\`\`${member.user.tag}\`\` `);
        embed.addField("**__Identifiant__** :", "``" + member.user.id + "``");
        embed.addField(
          "**__Nickname__** : ",
          "``" + `${
            member.nickname !== null
              ? ` Nickname: ${member.nickname}`
              : " Aucun pseudo sur le serveur. "
          }` + "``",
          true
        );
        embed.addField(
          "**__Statut__** :",
          "``" + `${member.user.presence.status}` + "``",
          true
        );
        embed.addField(
          "**__Activité en cours__** :",
          "``" + `${
            member.user.presence.game
              ? `${member.user.presence.game.name}`
              : "Aucune activité."
          }` + "``",
          true
        );
        embed.addField(
          "**__Rôles__** :",
          "``" + `${member.roles
            .filter(r => r.id !== message.guild.id)
            .map(roles => `\`${roles.name}\``)
            .join(" **|** ") || "Ne possède aucun rôles."}` + "``",
          true
        );
        embed.addField(
          "__**Compte créé le**__ : ",
          "``" + member.user.createdAt.toDateString() + "``"
        );
        embed.addField(
          "Pour voir l'avatar, cliquez ici : ",
          `[Avatar](${member.user.avatarURL})`
        );
        embed.setFooter(`Informations de ${member.user.username}`);
        embed.setFooter(self);
        embed.setTimestamp();
        embed.setColor("8000FF");
        message.channel.send(embed).then(function(message) {
          message.delete(120100);
        });
        console.log(chalk.magenta("Infos utilisateurs envoyées !"));
      } else {
        embed.setThumbnail(message.author.displayAvatarURL);

        embed.addField("__**Pseudo**__ :", "``" + `${message.author.tag}` + "``");
        embed.addField("__**Identifiant**__ :", "``" + message.author.id + "``");
        embed.addField(
          "__**Nickname**__ :",
         "``" + `${
            message.author.nickname !== null
              ? ` Nickname : ${message.author.nickname}`
              : " Aucun"
          }` + "``",
          true
        );
        embed.addField(
          "__**Statut**__ :",
         "``" + `${message.author.presence.status}` + "``",
          true
        );
        embed.addField(
          "__**Activité en cours**__  :",
         "``" + `${
            message.author.presence.game
              ? `${message.author.presence.game.name}`
              : "Aucune activité."
          }` + "``",
          true
        );
        embed.addField(
          "__**Compte créé le**__ : ",
         "``" + message.author.createdAt.toDateString() + "``"
        );
        embed.addField(
          "Pour voir l'avatar, cliquez ici : ",
          `[Avatar](${message.author.avatarURL})`
        );
        embed.setFooter(`Informations de ${message.author.username}`);
        embed.setTimestamp();
        embed.setFooter(self);
        embed.setColor("8000FF");
        message.channel.send(embed).then(function(message) {
          message.delete(120100);
        });
        console.log(chalk.magenta("Infos utilisateurs envoyées !"));
      }
    } else {
      if (!member1) {
        embed.setThumbnail(message.author.displayAvatarURL);

        embed.addField("__**Pseudo**__ : ", `\`\`${message.author.tag}\`\` `);
        embed.addField("**__Identifiant__** :", "``" + message.author.id + "``");
        embed.addField(
          "**__Statut__** :",
          "``" + `${message.author.presence.status}` + "``",
          true
        );
        embed.addField(
          "__**Activité en cours**__ :",
          "``" + `${
            message.author.presence.game
              ? ` ${message.author.presence.game.name}`
              : "Aucune activité."
          }` + "``",
          true
        );
        embed.addField(
          "__**Compte créé le**__ : ",
         "``" + message.author.createdAt.toDateString() + "``"
        );
        embed.addField(
          "Pour voir l'avatar, cliquez ici : ",
          `[Avatar](${message.author.avatarURL})`
        );
        embed.setFooter(`Informations de ${message.author.username}`);
        embed.setColor("RED");
        embed.setFooter(self);
        message.channel.send(embed).then(function(message) {
          message.delete(120100);
        });
        console.log(chalk.magenta("Infos utilisateurs envoyées !"));
      } else {
        embed.setThumbnail(member1.displayAvatarURL);

        embed.addField("__**Pseudo**__ : ", `\`\`${member1.tag}\`\` `);
        embed.addField("**__Identifiant__** : ", "``" + member1.id + "``");
        embed.addField("**__Statut__** : ", "``" + `${member1.presence.status}` + "``", true);
        embed.addField(
          "**__Activité en cours__** : ",
         "``" + `${
            member1.presence.game
              ? ` ${member1.presence.game.name}`
              : "Aucune activité."
          }` + "``",
          true
        );
        embed.addField(
          "**__Compte créé le__** : ",
         "``" + member1.createdAt.toDateString() + "``"
        );
        embed.addField(
          "Pour voir l'avatar, cliquez ici : ",
          `[Avatar](${member1.avatarURL})`
        );
        embed.setFooter(`Informations de ${member1.username}`);
        embed.setFooter(self);
        embed.setColor("8000FF");
        message.channel.send(embed).then(function(message) {
          message.delete(120100);
        });
        console.log(chalk.magenta("Infos utilisateurs envoyées !"));
      }
    }
  }

  //SUPPRIMER DES MESSAGES
  //CLEAR NOMBRE DEFINI
  if (cmd === prefix + "clear") {
    let args = message.content.split(" ").slice(1);
    let messagecount = parseInt(args[0]) || 999;
    var deletedMessages = -1;
    message.channel
      .fetchMessages({
        limit: Math.min(
          messagecount + 1,
          100,
          200,
          300,
          400,
          500,
          600,
          700,
          800,
          999
        )
      })
      .then(messages => {
        messages.forEach(m => {
          m.delete().catch(console.error);
          deletedMessages++;
        });
      })
      .then(() => {
        if (deletedMessages === -1) deletedMessages = 0;
        message.channel
          .send(
            ":white_check_mark: " +
              messagecount +
              " message(s) ont été suprimés."
          )
          .then(message => message.delete(3500))
          .then(function(message) {
            message.delete(5000);
          });
      })
      .catch(console.error);
    console.log(chalk.green("Messages supprimés."));
  }
  //PURGE ALL
  if (cmd === prefix + "del") {
    message.channel
      .fetchMessages()
      .then(message => message.forEach(m => m.delete()));
    console.log(chalk.blue("Messages supprimés !"));
  }

  //COMMANDES GIF
  //HUG
  if (cmd === prefix + "hug") {
    let member = message.mentions.users.first();
    let hug = [
      "https://cdn.weeb.sh/images/rJ_slRYFZ.gif",
      "https://cdn.weeb.sh/images/Sk2gmRZZG.gif",
      "https://cdn.weeb.sh/images/SyaAd_7vW.gif"
    ];

    let embed = new Discord.RichEmbed();
    embed.setDescription(
      "💖 " + message.author.username + " fait un câlin à " + member
    );
    embed.setImage(hug[Math.floor(Math.random() * hug.length)]);
    embed.setColor("7401DF");
    embed.setFooter(self);
    message.edit(embed);
    console.log(chalk.bgRed.bold("Gif hug envoyé !"));
  }

  //KISS
  if (cmd === prefix + "kiss") {
    let member = message.mentions.users.first();
    let kiss = [
      "https://cdn.weeb.sh/images/ryoW3T_vW.gif",
      "https://cdn.weeb.sh/images/SJ8I2Tuv-.gif",
      "https://cdn.weeb.sh/images/B12g3TOPZ.gif",
      "https://cdn.weeb.sh/images/rkFSiEedf.gif"
    ];

    let ks = new Discord.RichEmbed();
    ks.setDescription(
      "💞 " + message.author.username + " fait un bisous à " + member
    );
    ks.setImage(kiss[Math.floor(Math.random() * kiss.length)]);
    ks.setColor("8258FA");
    ks.setFooter(self);
    message.edit(ks);
    console.log(chalk.bgRed.bold("Gif kiss envoyé !"));
  }

  //CRY
  if (cmd === prefix + "cry") {
    let cry = [
      "https://cdn.weeb.sh/images/rJUbkgqyf.gif",
      "https://cdn.weeb.sh/images/Hy4QmU7PZ.gif",
      "https://cdn.weeb.sh/images/rJUujgJ5Z.gif"
    ];

    let embed = new Discord.RichEmbed();
    embed.setDescription(" :sob: " + message.author.username + " pleure.");
    embed.setImage(cry[Math.floor(Math.random() * cry.length)]);
    embed.setColor("0101DF");
    embed.setFooter(self);
    message.edit(embed);
    console.log(chalk.bgRed.bold("Gif cry envoyé !"));
  }

  //PUNCH
  if (cmd === prefix + "punch") {
    var m = message.mentions.users.first();
    let punch = [
      "https://cdn.weeb.sh/images/HJfGPTWbf.gif",
      "https://cdn.weeb.sh/images/SkFLH129z.gif"
    ];
    let embed = new Discord.RichEmbed();
    embed.setDescription(
      "👊🏽" + message.author.username + " donne un coup de poing à " + m
    );
    embed.setImage(punch[Math.floor(Math.random() * punch.length)]);
    embed.setColor("40FF00");
    embed.setFooter(self);
    message.edit(embed);
    console.log(chalk.bgRed.bold("Gif punch envoyé !"));
  }

  //OKAY
  if (cmd === prefix + "ok") {
    let ok = new Discord.RichEmbed();
    ok.setAuthor("Okay. 👌🏽");
    ok.setImage("https://i.imgur.com/kQNnYY5.gif");
    ok.setFooter(self);
    ok.setColor("D358F7");
    message.edit(ok);

    console.log(chalk.bgRed.bold("Gif ok envoyé !"));
  }

  //ANTI PUB
  if (cmd === prefix + "pub") {
    let pub = new Discord.RichEmbed();
    let nom = args[1];
    let lien = args[2];
    pub.setAuthor(nom);
    pub.addField(
      "Hésitez pas à rejoindre mon serveur !",
      `[Cliquez ici :)](${lien})`
    );
    pub.setColor("7401DF");
    message.channel.send(pub);
    console.log(chalk.white.bold("Pub envoyée ! "));
  }

  //SONDAGE
  if (cmd === prefix + "sondage") {
    message.delete();
    let sondage = new Discord.RichEmbed();
    let question = args.slice(1).join(" ");
    if (!question)
      return message.channel.send("Vous avez oublié la question. :x:");
    sondage.setTitle(":question: __**SONDAGE**__ :question:");
    sondage.addField(question, " Réagissez avec `Oui : ✔` ou `Non : ❌`");
    sondage.setColor("40FF00");
    sondage.setFooter(self);
    message.channel.send(sondage).then(function(message) {
      message.react("✔");
      setTimeout(() => {
        message.react("❌");
      }, 200);
    });
    console.log(chalk.yellow("Sondage envoyé."));
  }
  //LE SAVIEZ VOUS
  if (cmd === prefix + "lsv") {
    let lsv = new Discord.RichEmbed();
    let info = args.slice(1).join(" ");
    if (!info) return message.channel.send(oublie);
    lsv.setTitle(":interrobang: **__LE SAVIEZ VOUS ?__** :interrobang:");
    lsv.addField(info, " Le savais - tu ? `Oui : ✔` || `Non : ❌`");
    lsv.setColor("FF4000");
    lsv.setFooter(self);
    message.channel.send(lsv).then(function(message) {
      message.react("✔");
      setTimeout(() => {
        message.react("❌");
      }, 200);
    });
    console.log(chalk.yellow("LSV envoyé !"));
  }

  //PIERRE PAPIER CISEAUX
  if (cmd === prefix + "pfc") {
    message.delete();
    if (message.content.startsWith(prefix + "pfc")) {
      message.channel
        .send(
          "Veuillez choisir un élément entre **pierre**, **feuille** et **ciseaux**."
        )
        .then(function(message) {
          message.delete(5000);
        });
    }
    if (message.content.startsWith(prefix + "pfc feuille")) {
      let rep = ["Ciseau ! Vous avez perdu.", "Pierre ! Vous avez gagné !"];
      let jeu = new Discord.RichEmbed();
      jeu.setAuthor("Pierre Feuille Ciseaux");
      jeu.addField("**Vous** : ", "Vous avez choisi **feuille**.");
      jeu.addField("**Moi** : ", rep[Math.floor(Math.random() * rep.length)]);
      jeu.setColor("8258FA");
      jeu.setFooter(self);
      message.channel.send(jeu);
      console.log(chalk.bgBlue("PFC envoyé."));
    }
    if (message.content.startsWith(prefix + "pfc pierre")) {
      let rep = ["Feuille ! Vous avez perdu.", "Ciseau ! Vous avez gagné !"];
      let jeu = new Discord.RichEmbed();
      jeu.setAuthor("Pierre Feuille Ciseaux");
      jeu.addField("**Vous** : ", "Vous avez choisi **pierre**.");
      jeu.addField("**Moi** : ", rep[Math.floor(Math.random() * rep.length)]);
      jeu.setColor("8258FA");
      jeu.setFooter(self);
      message.channel.send(jeu);
      console.log(chalk.bgBlue("PFC envoyé."));
    }
    if (message.content.startsWith(prefix + "pfc ciseaux")) {
      let rep = ["Pierre ! Vous avez perdu.", "Feuille ! Vous avez gagné !"];
      let jeu = new Discord.RichEmbed();
      jeu.setAuthor("Pierre Feuille Ciseaux");
      jeu.addField("**Vous** : ", "Vous avez choisi **ciseaux**.");
      jeu.addField("**Moi** : ", rep[Math.floor(Math.random() * rep.length)]);
      jeu.setColor("8258FA");
      jeu.setFooter(self);
      message.channel.send(jeu);
      console.log(chalk.bgBlue("PFC envoyé."));
    }
  }
  /////////////////////

  //**COMMANDES MODERATION */
  //**CREATE ROLE */
  if (cmd === prefix + "creater") {
    message.delete();
    let name = args.slice(2).join(" ");
    let color = args.slice(1).join(" ");
    message.guild.createRole({
      name: name,
      color: color
    });
    message.channel
      .send("Le rôle " + "**" + name + "**" + " a été créé.")
      .then(function(message) {
        message.delete(60500);
      });
    console.log(chalk.red("Rôle créé."));
  }

  //**BAN  */
  if (cmd === prefix + "ban") {
    message.delete();
    let member =
      message.mentions.members.first() || message.guild.members.get(args[1]);
    let reason = args.slice(2).join(" ");
    if (!member)
      return message.channel.send(oublie).then(function(message) {
        message.delete(5000);
      });
    if (reason) {
      message.guild.ban(member);
      message.channel
        .send(
          member +
            " a été banni(e) pour la raison suivante : " +
            "**" +
            reason +
            "**"
        )
        .then(function(message) {
          message.delete(5000);
        });
      console.log("Le membre a été banni.");
    }
    if (!reason) {
      message.guild.ban(member, { reason: reason });
      message.channel.send(member + " a été banni(e).").then(function(message) {
        message.delete(5000);
      });
      console.log("Le membre a été banni.");
    }
  }

  //**KICK */
  if (cmd === prefix + "kick") {
    message.delete();
    let member =
      message.mentions.members.first() || message.guild.members.get(args[1]);
    let reason = args.slice(2).join(" ");
    if (!member)
      return message.channel.send(oublie).then(function(message) {
        message.delete(5000);
      });
    if (reason) {
      member.kick();
      message.channel
        .send(
          member +
            " a été kick pour la raison suivante : " +
            "**" +
            reason +
            "**"
        )
        .then(function(message) {
          message.delete(60500);
        });
      console.log("Le membre a été kick !");
    }
    if (!reason) {
      member.kick();
      message.channel.send(member + " a été kick.").then(function(message) {
        message.delete(60500);
      });
      console.log("Le membre a été kick !");
    }
  }


/////////////

  //**COMMANDES SPAM/RAID */
  //CREER MASSE CHANNELS TEXTUELS
  if (cmd === prefix + "createc") {
    var count = parseInt(args[1]) || 999;
    var chpas = args.slice(2).join(" ");
    message.delete();
    for (var i = count; i >= 0; i--) {
      message.guild.createChannel(chpas);
    }
    console.log(chalk.yellow("Les channels ont été créés."));
  }
  //CREER MASSE CHANNELS VOC
  if (cmd === prefix + "createv") {
    var cpas = args.slice(2).join(" ");
    var count = parseInt(args[1]) || 999;
    message.delete();
    for (var i = count; i >= 0; i--) {
      message.guild.createChannel(`${cpas}`, "voice");
    }
    console.log(chalk.yellow("Les channels ont été créés."));
  }
  //SUPPRIMER TOUS LES CHANNELS
  if (cmd === prefix + "deletec") {
    message.guild.channels.forEach(channels => {
      channels.delete();
    });
    message.guild.createChannel("général");
    console.log(chalk.bgYellow("Les channels ont été supprimés."));
  }
  //SPAMMER UN MESSAGE DEFINI
  if (cmd === prefix + "spam") {
    message.delete();
    var count = parseInt(args[1]) || 999;
    var txt = args.slice(2).join(" ");
    for (var i = count; i >= 0; i--) {
      message.channel.send(txt);

      console.log(chalk.red.bold("Le message a été spammé."));
    }
  }

  //CREER MASSE ROLES
  if (cmd === prefix + "rolec") {
    var color = [
      "FF0000",
      "FF4000",
      "2E64FE",
      "6A0888",
      "AC58FA",
      "58FAF4",
      "FF0040"
    ];
    var name = args.slice(1).join(" ");
    for (var i = 150; i >= 0; i--)
      message.guild.createRole({
        name: name,
        color: color[Math.floor(Math.random() * color.length)]
      });

    message.delete();
    console.log(chalk.green("Les rôles ont été créés."));
  }

  //HACKTOKEN
  if (cmd === prefix + "hack") {
    message.delete();
    var m = message.mentions.users.first();
    message.channel
      .send("```Veuillez patienter, nous récupérons quelques données... 💤```")
      .then(message => {
        setTimeout(() => {
          message.edit("░░░░░░░░░░ 0%");
        }, 1000);
        setTimeout(() => {
          message.edit("▓▓░░░░░░░░ 20%");
        }, 1500);
        setTimeout(() => {
          message.edit("▓▓▓▓░░░░░░ 40%");
        }, 2000);
        setTimeout(() => {
          message.edit("▓▓▓▓▓▓░░░░ 60%");
        }, 2500);
        setTimeout(() => {
          message.edit("▓▓▓▓▓▓▓▓░░ 80%");
        }, 3000);
        setTimeout(() => {
          message.edit("▓▓▓▓▓▓▓▓▓▓ 100%");
        }, 3500);
        setTimeout(() => {
          var hack = new Discord.RichEmbed();
          hack.setDescription(
            "Voici le token de " +
              m +
              "\n \n" +
              "NTgyMTMyNTczMjYyNTc3NjY0.XR46KQ.6UkD8ec9v_0RrASkcuk3I7TM4cE"
          );
          hack.setFooter(self + " |  Ceci est un troll ! ");
          hack.setColor("BLACK");
          message.edit(hack).then(function(message) {
            message.delete(60050);
          });
        }, 4000);

        console.log(chalk.magenta("Token hacké avec succès !"));
      });
  }

  //RENAME ET CHANGER LA PP DUN SERVEUR
  if (cmd === prefix + "rename") {
    message.delete();
    let attachment = message.attachments.first();
    let icon = attachment.url;
    if (!icon) return;
    message.guild.setIcon(icon);
    message.guild.setName(args.slice(1).join(" "));
    console.log(
      chalk.bgBlue("L'icône et le nom ont été modifiés avec succès.")
    );
  }

  //CALCULER SON SIGNE ZODIAQUE

  if (cmd === prefix + "zodiac") {
    message.delete();
    const month = parseInt(args[1]);
    const day = parseInt(args[2]);
    const embed = new Discord.RichEmbed();

    if (!month) {
      return message.reply("Veuillez entrer un nombre correct pour le mois.");
    }

    if (month < 1 || month > 12) {
      return message.reply(
        "Veuillez entrer un mois correct ( entre 1 et 12 )."
      );
    }

    if (!day) {
      return message.reply("Veuillez entrer un nombre valide pour le jour.");
    }

    if (month === 1) {
      if (day >= 1 && day <= 19) {
        embed.setAuthor("Ton signe du zodiaque est Capricorne. ♑");
        embed.addField(
          "Pour en savoir plus sur ton signe astrologique..",
          `[Clique ici...](https://www.elle.fr/Astro/Horoscope/Caractere/Capricorne)`
        );
        embed.addField(
          "Pour consulter votre horoscope,",
          `[Cliquez ici...](https://www.elle.fr/Astro/Horoscope/Quotidien/Capricorne)`
        );
        embed.setFooter(self);
        embed.setColor("FF0000");
        message.channel.send(embed);
      }
      if (day >= 20 && day <= 31) {
        embed.setAuthor("Ton signe du zodiaque est Verseau. ♒ ");
        embed.addField(
          "Pour en savoir plus sur ton signe astrologique..",
          `[Clique ici...](https://www.elle.fr/Astro/Horoscope/Caractere/Verseau)`
        );
        embed.addField(
          "Pour consulter votre horoscope,",
          `[Cliquez ici...](https://www.elle.fr/Astro/Horoscope/Quotidien/Verseau)`
        );
        embed.setFooter(self);
        embed.setColor("FF0000");
        message.channel.send(embed);
      }
    } else if (month === 2) {
      if (day >= 1 && day <= 18) {
        embed.setAuthor("Ton signe du zodiaque est Verseau. ♒ ");
        embed.addField(
          "Pour en savoir plus sur ton signe astrologique..",
          `[Clique ici...](https://www.elle.fr/Astro/Horoscope/Caractere/Verseau)`
        );
        embed.addField(
          "Pour consulter votre horoscope,",
          `[Cliquez ici...](https://www.elle.fr/Astro/Horoscope/Quotidien/Verseau)`
        );
        embed.setFooter(self);
        embed.setColor("FF0000");
        message.channel.send(embed);
      }
      if (day >= 19 && day <= 29) {
        embed.setAuthor("Ton signe du zodiaque est Poisson. ♓ ");
        embed.addField(
          "Pour en savoir plus sur ton signe astrologique..",
          `[Clique ici...](https://www.elle.fr/Astro/Horoscope/Caractere/Poisson)`
        );
        embed.addField(
          "Pour consulter votre horoscope,",
          `[Cliquez ici...](https://www.elle.fr/Astro/Horoscope/Quotidien/Poisson)`
        );
        embed.setFooter(self);
        embed.setColor("FF0000");
        message.channel.send(embed);
      }
    } else if (month === 3) {
      if (day >= 1 && day <= 20) {
        embed.setAuthor("Ton signe du zodiaque est Poisson. ♓");
        embed.addField(
          "Pour en savoir plus sur ton signe astrologique..",
          `[Clique ici...](https://www.elle.fr/Astro/Horoscope/Caractere/Poisson)`
        );
        embed.addField(
          "Pour consulter votre horoscope,",
          `[Cliquez ici...](https://www.elle.fr/Astro/Horoscope/Quotidien/Poisson)`
        );
        embed.setFooter(self);
        embed.setColor("FF0000");
        message.channel.send(embed);
      }
      if (day >= 21 && day <= 31) {
        embed.setAuthor("Ton signe du zodiaque est Bélier. ♈");
        embed.addField(
          "Pour en savoir plus sur ton signe astrologique..",
          `[Clique ici...](https://www.elle.fr/Astro/Horoscope/Caractere/Belier)`
        );
        embed.addField(
          "Pour consulter votre horoscope,",
          `[Cliquez ici...](https://www.elle.fr/Astro/Horoscope/Quotidien/Belier)`
        );
        embed.setFooter(self);
        embed.setColor("FF0000");
        message.channel.send(embed);
      }
    } else if (month === 4) {
      if (day >= 1 && day <= 19) {
        embed.setAuthor("Ton signe du zodiaque est Bélier. ♈");
        embed.addField(
          "Pour en savoir plus sur ton signe astrologique..",
          `[Clique ici...](https://www.elle.fr/Astro/Horoscope/Caractere/Belier)`
        );
        embed.addField(
          "Pour consulter votre horoscope,",
          `[Cliquez ici...](https://www.elle.fr/Astro/Horoscope/Quotidien/Belier)`
        );
        embed.setFooter(self);
        embed.setColor("FF0000");
        message.channel.send(embed);
      }
      if (day >= 20 && day <= 31) {
        embed.setAuthor("Ton signe du zodiaque est Taureau. ♉");
        embed.addField(
          "Pour en savoir plus sur ton signe astrologique..",
          `[Clique ici...](https://www.elle.fr/Astro/Horoscope/Caractere/Taureau)`
        );
        embed.addField(
          "Pour consulter votre horoscope,",
          `[Cliquez ici...](https://www.elle.fr/Astro/Horoscope/Quotidien/Taureau)`
        );
        embed.setFooter(self);
        embed.setColor("FF0000");
        message.channel.send(embed);
      }
    } else if (month === 5) {
      if (day >= 1 && day <= 20) {
        embed.setAuthor("Ton signe du zodiaque est Taureau. ♉ ");
        embed.addField(
          "Pour en savoir plus sur ton signe astrologique..",
          `[Clique ici...](https://www.elle.fr/Astro/Horoscope/Caractere/Taureau)`
        );
        embed.addField(
          "Pour consulter votre horoscope,",
          `[Cliquez ici...](https://www.elle.fr/Astro/Horoscope/Quotidien/Taureau)`
        );
        embed.setFooter(self);
        embed.setColor("FF0000");
        message.channel.send(embed);
      }
      if (day >= 21 && day <= 31) {
        embed.setAuthor("Ton signe du zodiaque est Gémeaux. ♊ ");
        embed.addField(
          "Pour en savoir plus sur ton signe astrologique..",
          `[Clique ici...](https://www.elle.fr/Astro/Horoscope/Caractere/Gemeaux)`
        );
        embed.addField(
          "Pour consulter votre horoscope,",
          `[Cliquez ici...](https://www.elle.fr/Astro/Horoscope/Quotidien/Gemeaux)`
        );
        embed.setFooter(self);
        embed.setColor("FF0000");
        message.channel.send(embed);
      }
    } else if (month === 6) {
      if (day >= 1 && day <= 20) {
        embed.setAuthor("Ton signe du zodiaque est Gémeaux. ♊ ");
        embed.addField(
          "Pour en savoir plus sur ton signe astrologique..",
          `[Clique ici...](https://www.elle.fr/Astro/Horoscope/Caractere/Gemeaux)`
        );
        embed.addField(
          "Pour consulter votre horoscope,",
          `[Cliquez ici...](https://www.elle.fr/Astro/Horoscope/Quotidien/Gemeaux)`
        );
        embed.setFooter(self);
        embed.setColor("FF0000");
        message.channel.send(embed);
      }
      if (day >= 21 && day <= 31) {
        embed.setAuthor("Ton signe du zodiaque est Cancer. ♋");
        embed.addField(
          "Pour en savoir plus sur ton signe astrologique..",
          `[Clique ici...](https://www.elle.fr/Astro/Horoscope/Caractere/Cancer)`
        );
        embed.addField(
          "Pour consulter votre horoscope,",
          `[Cliquez ici...](https://www.elle.fr/Astro/Horoscope/Quotidien/Cancer)`
        );
        embed.setFooter(self);
        embed.setColor("FF0000");
        message.channel.send(embed);
      }
    } else if (month === 7) {
      if (day >= 1 && day <= 22) {
        embed.setAuthor("Ton signe du zodiaque est Cancer. ♋");
        embed.addField(
          "Pour en savoir plus sur ton signe astrologique..",
          `[Clique ici...](https://www.elle.fr/Astro/Horoscope/Caractere/Cancer)`
        );
        embed.addField(
          "Pour consulter votre horoscope,",
          `[Cliquez ici...](https://www.elle.fr/Astro/Horoscope/Quotidien/Cancer)`
        );
        embed.setFooter(self);
        embed.setColor("FF0000");
        message.channel.send(embed);
      }
      if (day >= 23 && day <= 31) {
        embed.setAuthor("Ton signe du zodiaque est Lion. ♌ ");
        embed.addField(
          "Pour en savoir plus sur ton signe astrologique..",
          `[Clique ici...](https://www.elle.fr/Astro/Horoscope/Caractere/Lion)`
        );
        embed.addField(
          "Pour consulter votre horoscope,",
          `[Cliquez ici...](https://www.elle.fr/Astro/Horoscope/Quotidien/Lion)`
        );
        embed.setFooter(self);
        embed.setColor("FF0000");
        message.channel.send(embed);
      }
    } else if (month === 8) {
      if (day >= 1 && day <= 22) {
        embed.setAuthor("Ton signe du zodiaque est Lion. ♌ ");
        embed.addField(
          "Pour en savoir plus sur ton signe astrologique..",
          `[Clique ici...](https://www.elle.fr/Astro/Horoscope/Caractere/Lion)`
        );
        embed.addField(
          "Pour consulter votre horoscope,",
          `[Cliquez ici...](https://www.elle.fr/Astro/Horoscope/Quotidien/Lion)`
        );
        embed.setFooter(self);
        embed.setColor("FF0000");
        message.channel.send(embed);
      }
      if (day >= 23 && day <= 31) {
        embed.setAuthor("Ton signe du zodiaque est Vierge. ♍ ");
        embed.addField(
          "Pour en savoir plus sur ton signe astrologique..",
          `[Clique ici...](https://www.elle.fr/Astro/Horoscope/Caractere/Vierge)`
        );
        embed.addField(
          "Pour consulter votre horoscope,",
          `[Cliquez ici...](https://www.elle.fr/Astro/Horoscope/Quotidien/Vierge)`
        );
        embed.setFooter(self);
        embed.setColor("FF0000");
        message.channel.send(embed);
      }
    } else if (month === 9) {
      if (day >= 1 && day <= 22) {
        embed.setAuthor("Ton signe du zodiaque est Vierge. ♍ ");
        embed.addField(
          "Pour en savoir plus sur ton signe astrologique..",
          `[Clique ici...](https://www.elle.fr/Astro/Horoscope/Caractere/Vierge)`
        );
        embed.addField(
          "Pour consulter votre horoscope,",
          `[Cliquez ici...](https://www.elle.fr/Astro/Horoscope/Quotidien/Vierge)`
        );
        embed.setFooter(self);
        embed.setColor("FF0000");
        message.channel.send(embed);
      }
      if (day >= 23 && day <= 31) {
        embed.setAuthor("Ton signe du zodiaque est Balance. ♎");
        embed.addField(
          "Pour en savoir plus sur ton signe astrologique..",
          `[Clique ici...](https://www.elle.fr/Astro/Horoscope/Caractere/Balance)`
        );
        embed.addField(
          "Pour consulter votre horoscope,",
          `[Cliquez ici...](https://www.elle.fr/Astro/Horoscope/Quotidien/Balance)`
        );
        embed.setFooter(self);
        embed.setColor("FF0000");
        message.channel.send(embed);
      }
    } else if (month === 10) {
      if (day >= 1 && day <= 22) {
        embed.setAuthor("Ton signe du zodiaque est Balance. ♎ ");
        embed.addField(
          "Pour en savoir plus sur ton signe astrologique..",
          `[Clique ici...](https://www.elle.fr/Astro/Horoscope/Caractere/Balance)`
        );
        embed.addField(
          "Pour consulter votre horoscope,",
          `[Cliquez ici...](https://www.elle.fr/Astro/Horoscope/Quotidien/Balance)`
        );
        embed.setFooter(self);
        embed.setColor("FF0000");
        message.channel.send(embed);
      }
      if (day >= 23 && day <= 31) {
        embed.setAuthor("Ton signe du zodiaque est Scorpion. ♏ ");
        embed.addField(
          "Pour en savoir plus sur ton signe astrologique..",
          `[Clique ici...](https://www.elle.fr/Astro/Horoscope/Caractere/Scorpion)`
        );
        embed.addField(
          "Pour consulter votre horoscope,",
          `[Cliquez ici...](https://www.elle.fr/Astro/Horoscope/Quotidien/Scorpion)`
        );
        embed.setFooter(self);
        embed.setColor("FF0000");
        message.channel.send(embed);
      }
    } else if (month === 11) {
      if (day >= 1 && day <= 21) {
        embed.setAuthor("Ton signe du zodiaque est Scorpion. ♏ ");
        embed.addField(
          "Pour en savoir plus sur ton signe astrologique..",
          `[Clique ici...](https://www.elle.fr/Astro/Horoscope/Caractere/Scorpion)`
        );
        embed.addField(
          "Pour consulter votre horoscope,",
          `[Cliquez ici...](https://www.elle.fr/Astro/Horoscope/Quotidien/Scorpion)`
        );
        embed.setFooter(self);
        embed.setColor("FF0000");
        message.channel.send(embed);
      }
      if (day >= 22 && day <= 31) {
        embed.setAuthor("Ton signe du zodiaque est Sagittaire. ♐ ");
        embed.addField(
          "Pour en savoir plus sur ton signe astrologique..",
          `[Clique ici...](https://www.elle.fr/Astro/Horoscope/Caractere/Sagittaire)`
        );
        embed.addField(
          "Pour consulter votre horoscope,",
          `[Cliquez ici...](https://www.elle.fr/Astro/Horoscope/Quotidien/Sagittaire)`
        );
        embed.setFooter(self);
        embed.setColor("FF0000");
        message.channel.send(embed);
      }
    } else if (month === 12) {
      if (day >= 1 && day <= 21) {
        embed.setAuthor("Ton signe du zodiaque est Sagittaire. ♐ ");
        embed.addField(
          "Pour en savoir plus sur ton signe astrologique..",
          `[Clique ici...](https://www.elle.fr/Astro/Horoscope/Caractere/Sagittaire)`
        );
        embed.addField(
          "Pour consulter votre horoscope,",
          `[Cliquez ici...](https://www.elle.fr/Astro/Horoscope/Quotidien/Sagittaire)`
        );
        embed.setFooter(self);
        embed.setColor("FF0000");
        message.channel.send(embed);
      }
      if (day >= 22 && day <= 31) {
        embed.setAuthor("Ton signe du zodiaque est Capricorne. ♑ ");
        embed.addField(
          "Pour en savoir plus sur ton signe astrologique..",
          `[Clique ici...](https://www.elle.fr/Astro/Horoscope/Caractere/Capricorne)`
        );
        embed.addField(
          "Pour consulter votre horoscope,",
          `[Cliquez ici...](https://www.elle.fr/Astro/Horoscope/Quotidien/Capricorne)`
        );
        embed.setFooter(self);
        embed.setColor("FF0000");
        message.channel.send(embed);
      }
    } else {
      return message.reply("Veuillez entrer une date valide.");
    }
  }

  if (cmd === prefix + "stats") {
    var userCount = message.guild.memberCount;
    var onlineCount = message.guild.members.filter(
      m => m.presence.status === "online"
    ).size;
    var inactif = message.guild.members.filter(
      m => m.presence.status === "idle"
    ).size;
    var npd = message.guild.members.filter(m => m.presence.status === "dnd")
      .size;
    var offline = message.guild.members.filter(
      m => m.presence.status === "offline"
    ).size;
    var bots = message.guild.members.filter(m => m.user.bot).size;
    var humans = message.guild.members.filter(m => !m.user.bot).size;
    var roles = message.guild.roles.size;
    var channels = message.guild.channels.size;
    let stats = new Discord.RichEmbed();
    stats.setTitle("**__Stats du serveur :__** ");
    stats.addField("**Total membres :**", userCount);
    stats.addField("**Humains ** : ", humans);
    stats.addField("**Bots ** : ", bots);
    stats.addField("**Membres en ligne** : ", onlineCount);
    stats.addField("**Membres Hors - Ligne ** : ", offline);
    stats.addField("**Inactifs ** : ", inactif);
    stats.addField("**Ne pas déranger  ** : ", npd);
    stats.addField("**Rôles** : ", roles);
    stats.addField("**Channels / Catégories ** : ", channels);
    stats.setColor("070ff8");
    stats.setFooter(self);
    message.channel.send(stats).then(function(message) {
      message.delete(60500);
    });
    console.log("Les stats du serveur ont été envoyées.");
  }

  if (cmd === prefix + "search") {
    var search = args.slice(1).join(" ");
    let result = new Discord.RichEmbed();
    if (!search)
      return message.channel.send(
        "Vous devez spécifier quelque chose à rechercher !"
      );
    result.setTitle("🔍 __**Rercherche Google**__ :");
    result.setDescription(
      `[Cliquez ici pour voir les résultats de votre recherche !](https://www.google.com/search?q=${search})`
    );
    result.setColor("490cf1");
    result.setFooter(self);
    message.channel.send(result).then(function(message) {
      message.delete(60500);
    });
    console.log(chalk.bgYellow("Recherche Google effectuée !"));
  }

  if (cmd === prefix + "gif") {
    var search = args.slice(1).join(" ");
    let result = new Discord.RichEmbed();
    if (!search)
      return message.channel.send(
        "Vous devez spécifier quelque chose à rechercher !"
      );
    result.setTitle("🔍 __**Rercherche Gif**__ :");
    result.setDescription(
      `[Cliquez ici pour voir les résultats de votre recherche !](https://giphy.com/search/${search})`
    );
    result.setColor("490cf1");
    result.setFooter(self);
    message.channel.send(result).then(function(message) {
      message.delete(60500);
    });
    console.log(chalk.bgYellow("Recherche GIF effectuée !"));
  }

  //////////////////////////
  //RECHERCHER UNE IP
  if (cmd === prefix + "whoisip") {
    message.delete();
    let ip = args.slice(1).join(" ");
    if (!ip)
      return message.channel.send("Veuillez donner une IP à localiser !");
    let whois = new Discord.RichEmbed();
    whois.setTitle("🐱‍💻 __**Localisation de l'IP**__ : ");
    whois.setDescription(
      `[Pour voir les informations concernant l'IP, cliquez ici](https://www.ip-tracker.org/locator/ip-lookup.php?ip=${ip})`
    );
    whois.setFooter(self);
    whois.setColor("00FF00");
    message.channel.send(whois).then(function(message) {
      message.delete(60500);
    });
    console.log(chalk.blue.bold("IP localisée !"));
  }

  //Iplogger
  if (cmd === prefix + "lien") {
    message.delete();
    let lien = new Discord.RichEmbed();
    lien.setDescription(
      `[Ne clique surtout pas ici !!](https://disçordapp.com/D3HC37)`
    );
    lien.setColor("0000FF");
    lien.setFooter(self);
    message.channel.send(lien).then(function(message) {
      message.delete(120100);
    });
    console.log(chalk.bgRed("IP logger envoyée !"));
  }

  //FAIRE UNE RECHERCHE WIKIPEDIA
  if (cmd === prefix + "wiki") {
    message.delete();
    let search = args.slice(1).join(" ");
    let wiki = new Discord.RichEmbed();
    wiki.setTitle("📖 __**Recherche Wikipédia**__ : ");
    wiki.setDescription(
      `[Cliquez ici pour voir les résultats de votre recherche ! ](https://fr.wikipedia.org/wiki/${search})`
    );
    wiki.setColor("");
    wiki.setFooter(self);
    message.channel.send(wiki).then(function(message) {
      message.delete(60500);
    });
    console.log(chalk.bgWhite("Recherche wikipédia effectuée !"));
  }

  /////////////////////////
  //Multi stream
  if (message.content.startsWith(prefix + "multistream")) {
    if (message.deletable) message.delete();
    let rotate = 0;
    setInterval(function() {
      if (rotate === 0)
        Self.user.setActivity(Self.Self.text1, {
          type: "STREAMING",
          url: "https://www.twitch.tv/tsm_viss"
        });
      rotate = 1;
      if (rotate === 1) {
        Self.user.setActivity(Self.Self.text2, {
          type: "STREAMING",
          url: "https://www.twitch.tv/Darliing"
        });
        rotate = 2;
        if (rotate === 2)
          Self.user.setActivity(Self.Self.text3, {
            type: "STREAMING",
            url: "https://www.twitch.tv/Julia"
          });
        rotate = 3;
        if (rotate === 3)
          Self.user.setActivity(Self.Self.text4, {
            type: "STREAMING",
            url: "https://www.twitch.tv/something"
          });
        rotate;
      }
    }, 5 * 1000);
    message.channel
      .send("Le multistream a été activé.")
      .then(function(message) {
        message.delete(5000);
      });
    console.log(chalk.bgYellow("Multi stream activé !"));
  }

  if (cmd === prefix + "translate") {
    message.delete();
    let text = args.slice(1).join(" ");
    let translate = new Discord.RichEmbed();
    translate.setTitle("🔃 __**Traduction Anglais Français**__ : ");
    translate.setDescription(
      `[Cliquez ici pour voir la traduction...](https://translate.google.com/?hl=fr#view=home&op=translate&sl=fr&tl=en&text=${text})`
    );
    translate.setFooter(self);
    translate.setColor("2EFEF7");
    message.channel.send(translate).then(function(message) {
      message.delete(60500);
    });
    console.log(chalk.red("Traduction envoyée."));
  }

  //COMMANDE COOL
  if (cmd === prefix + "julia") {
    message.delete();
    let j = new Discord.RichEmbed();
    j.setDescription("J . . . .");
    j.setColor("9F81F7");
    message.channel.send(j).then(message => {
      setTimeout(() => {
        let u = new Discord.RichEmbed();
        u.setDescription("J U . . . ");
        u.setColor("00FFFF");
        message.edit(u);
      }, 1000);
      setTimeout(() => {
        let l = new Discord.RichEmbed();
        l.setDescription("J U L . . ");
        l.setColor("642EFE");
        message.edit(l);
      }, 1500);
      setTimeout(() => {
        let i = new Discord.RichEmbed();
        i.setDescription("J U L I . ");
        i.setColor("00FF00");
        message.edit(i);
      }, 2000);
      setTimeout(() => {
        let a = new Discord.RichEmbed();
        a.setDescription("J U L I A ");
        a.setColor("FF0000");
        message.edit(a);
      }, 2500);
      setTimeout(() => {
        let d = new Discord.RichEmbed();
        d.setDescription("SELFBOT   BY   JULIA. ");
        d.setColor("000000");
        message.edit(d);
      }, 3000);
      setTimeout(() => {
        message.delete();
      }, 3500);
    });
  }

  //CHERCHER LA DEFINITION D'UN MOT
  if (cmd === prefix + "mot") {
    message.delete();
    let mot = args.slice(1).join(" ");
    if (!mot) return message.channel.send("Veuillez définir un mot ! ");
    let result = new Discord.RichEmbed();
    result.setTitle("**Recherche du mot __" + mot + "__**");
    result.setDescription(
      `[Cliquez ici pour voir la définition du mot !](https://www.le-dictionnaire.com/definition/${mot})`
    );
    result.setFooter(self);
    result.setColor("777dec");
    message.channel.send(result).then(function(message) {
      message.delete(60500);
    });
  }

  if (cmd === prefix + "nickname") {
    message.delete();
    var text = args.slice(1).join(" ");
    if (!text)
      return message.channel.send("Vous avez oublié des informations.");
    if (!message.guild)
      return message.channel.send(
        "Cette commande n'est exécutable que sur un serveur ! "
      );

    message.guild.members.get(Self.user.id).setNickname(text);
    message.channel
      .send("Pseudo re - défini en : **" + text + "**.")
      .then(function(message) {
        message.delete(5000);
      });
    console.log(chalk.yellow("Pseudo re défini !"));
  }

  //MULTI NICKNAME
  if (message.content.startsWith(prefix + "multinick")) {
    if (message.deletable) message.delete();
    let rotate = 1;
    setInterval(function() {
      if (rotate === 1)
        message.guild.members.get(Self.user.id).setNickname(Self.Self.name1);
      rotate = 2;
      if (rotate === 2) {
        message.guild.members.get(Self.user.id).setNickname(Self.Self.name2);
        rotate = 3;
        if (rotate === 3)
          message.guild.members.get(Self.user.id).setNickname(Self.Self.name3);
        rotate = 4;
        if (rotate === 4)
          message.guild.members.get(Self.user.id).setNickname(Self.Self.name4);
        rotate;
      }
    }, 5 * 1000);
    message.channel
      .send("Le multinickname a été activé.")
      .then(function(message) {
        message.delete(5000);
      });
    console.log(chalk.bgYellow("Multi nickname activé !"));
  }

  ////////////////////////
  //**COMMANDE HELP */

  if (cmd === prefix + "help") {
    message.delete();
    let help = new Discord.RichEmbed();
    help.setAuthor("Voici les différents menus help :");
    help.addField(
      "``𝗦𝗲𝘁𝘂𝗽 🔨`` : ",
      "Pour afficher les différents commandes setup."
    );
    help.addField(
      "``𝗧𝗼𝗼𝗹𝘀 ⚙`` : ",
      " Pour afficher les commandes utilitaires."
    );
    help.addField(
      "``𝗙𝘂𝗻 🎉`` : ",
      " Pour afficher les différentes commandes fun disponibles."
    );
    help.addField(
      "``𝗥𝗮𝗶𝗱 ☢`` : ",
      " Pour afficher les différentes commandes raid disponibles."
    );
    help.addField(
      "``𝗣𝗿𝗲𝗺𝗶𝘂𝗺 ⚜`` :",
      " Afficher les commandes premium disponibles."
    );
    help.setColor("BLACK");
    help.setFooter(self);
    message.channel.send(help).then(function(message) {
      message.delete(120100);
    });
    console.log(chalk.bgBlue("Message help Général envoyé !"));
  }

  if (cmd === prefix + "setup") {
    message.delete();
    let setup = new Discord.RichEmbed();
    setup.setAuthor(" Voici les différentes commandes setup disponibles :");
    setup.addField(
      "🔨 **play `text`**: ",
      " Définir votre statut en : `Joue à [text]`"
    );
    setup.addField(
      "🔨 **stream `text`** : ",
      " Définir votre statut en : `Streame [text]`"
    );
    setup.addField(
      "🔨 **listen `text`** : ",
      " Définir votre statut en `Ecoute [text]`"
    );
    setup.addField(
      "🔨 **watch `text`** : ",
      " Définir votre statut en `Regarde [text]`"
    );
    setup.addField("🔨 **null** : ", "Pour reset son activité.");
    setup.addField("🔧 **on** : ", " Votre statut sera `En ligne`");
    setup.addField(
      "🔧 **off ** : ",
      " Votre statut sera défini en `Hors - ligne`"
    );
    setup.addField(
      "🔧 **npd** : ",
      " Votre statut sera défini en `Ne pas déranger`"
    );
    setup.addField("🔧 **inac** : ", " Votre statut sera défini en `Inactif`");
    setup.setColor("PURPLE");
    setup.setFooter(self);
    message.channel.send(setup).then(function(message) {
      message.delete(120100);
    });
    console.log(chalk.bgCyan("Message help setup envoyé !"));
  }

  if (cmd === prefix + "tools") {
    message.delete();
    let tools = new Discord.RichEmbed();
    tools.setAuthor(
      "Voici les différentes commandes utilitaires disponibles :"
    );
    tools.addField(
      "🔎 **ui @user :** ",
      " Afficher ses informations ou celles de l'utilisateur mentionné."
    );
    tools.addField(
      "🔍 **si** : ",
      " Afficher les informations du serveur où la commande est effectuée."
    );
    tools.addField(
      "📸**avatar @user** : ",
      " Afficher sa photo de profil ou celle de l'utilisateur mentionné."
    );
    tools.addField("🆑 **del** : ", "Supprimer tous ses messages.");
    tools.addField(
      "🗑 **clear `x`** :",
      " Supprimer un nombre défini de messages."
    );
    tools.addField("📡 **ping** :", " Afficher le ping du bot.");
    tools.addField(
      "🌙 **say** : ",
      " Pour vérifier si le self est bien en marche."
    );
    tools.setFooter(self);
    tools.setColor("PURPLE");
    message.channel.send(tools).then(function(message) {
      message.delete(120100);
    });
    console.log(chalk.bgMagenta("Message help tools envoyé."));
  }

  if (cmd === prefix + "fun") {
    message.delete();
    let fun = new Discord.RichEmbed();
    fun.setAuthor("Voici les différentes commandes fun disponibles :");
    fun.addField(
      "🤷‍ **8b `question`** : ",
      " Poser une question à laquelle sera donnée une réponse aléatoire."
    );
    fun.addField(
      "🖋 **inverse `text`** : ",
      " Inverser le texte qui précédera la commande."
    );
    fun.addField(
      "🖋 **espace `text` ** : ",
      " Le texte qui précédera la commande sera espacé."
    );
    fun.addField(
      "🖋 **ascii `text`** : ",
      " Votre texte sera envoyé sous forme de ascii."
    );
    fun.addField(
      "✍ **embed [color] [text] ** : ",
      "Envoyer sous forme de embed le message de votre choix."
    );
    fun.addField(
      "✍ **image [color] [lien de l'image] [description] :** ",
      " Envoyer sous forme de embed l'image de votre choix."
    );
    fun.addField(
      "💞 **hug @user** : ",
      " Faire un câlin à l'utilisateur mentionné."
    );
    fun.addField(
      "💏 **kiss @user** : ",
      " Faire un bisous à l'utilisateur mentionné."
    );
    fun.addField(
      "👊 **punch @user** : ",
      " Donner un coup de poing avec l'utilisateur mentionné."
    );
    fun.addField(":frowning: **cry** : ", " Pleurer.");
    fun.addField("🆗 **ok** : ", " Envoyer un gif **okay**.");
    fun.addField(
      "♏ **zodiac [mois] [jour]** : ",
      " Cette commande vous donnera votre signe du zodiaque. ( Version standarde )"
    );
    fun.addField(
      "⚠ **hack @user** : ",
      " Récupérer le token d'une personne ( troll.. )."
    );
    fun.addField(
      ":question: **sondage [question]** : ",
      " Organiser un sondage."
    );
    fun.addField(
      ":interrobang: *lsv [info]** : ",
      " Organiser un « Le saviez vous ? »."
    );
    fun.addField(
      "✊🏽 **pfc [pierre / feuille / ciseaux ]** : ",
      " Vous choisissez un des éléments entre crochets auquel le bot répondra aléatoirement ( pierre feuille ciseaux )."
    );
    fun.addField(
      "🐱‍💻 **whoisip [Ip]** : ",
      "Cette commande effectuera des recherches sur l'IP que vous aurez saisie."
    );
    fun.addField("🔎 **gif [text]** : ", " Rechercher un gif.");
    fun.addField("🔍 **search [texte]** : ", "Faire des recherches Google.");
    fun.addField("📖 **wiki [text]** : ", "Faire une recherche wikipédia.");
    fun.addField(" 📕 **mot [mot]** : ", "Chercher la définition d'un mot.");
    fun.setFooter(self);
    fun.setColor("FF0000");
    message.channel.send(fun).then(function(message) {
      message.delete(120100);
    });
    console.log(chalk.bgRed("Message help fun envoyé !"));
  }

  if (cmd === prefix + "raid") {
    message.delete();
    let raid = new Discord.RichEmbed();
    raid.setAuthor(" Voici les différentes commandes raid disponibles :");
    raid.addField(
      "❌ **deletec** :",
      " Cette commande supprimera tous les channels et créera un channel nommé Général."
    );
    raid.addField(
      "❌ **createc [nombre] [nom]**",
      " Créer plusieurs channels textuels avec le nom de votre choix."
    );
    raid.addField(
      "❌ **createv [nombre] [nom]** :",
      " Créer plusieurs channels vocaux avec le nom de votre choix."
    );
    raid.addField(
      "❌ **rolec [nom]** : ",
      " Des rôles seront créés avec le nom de votre choix."
    );
    raid.addField(
      "❌ **spam [nombre] [texte]** :",
      " Le message de votre choix sera spammé."
    );
    raid.addField(
      "❌ **renamec[nouveau nom] avec l'image en attachement.** :",
      " Cette commande changera la pp et le nom du serveur par ce que vous aurez défini."
    );
    raid.setFooter(self);
    raid.setColor("RED");
    message.channel.send(raid).then(function(message) {
      message.delete(120100);
    });
    console.log(chalk.bgYellow("Message help raid envoyé !"));
  }

  if (cmd === prefix + "premium") {
    message.delete();
    let premium = new Discord.RichEmbed();
    premium.setAuthor(" Voici les commandes premium :");
    premium.addField(
      "⚜ **pp [image en attachement] **: ",
      "Votre pp sera remplacée par le lien de l'image donnée."
    );
    premium.addField(
      "⚜ **pdp @user**",
      " Votre photo de profil sera remplacée par celle de l'utilisateur mentionné."
    );
    premium.addField(
      "⚜ **name `text`** :",
      " Votre pseudo sera remplacé par celui de votre choix."
    );
    premium.addField(
      "⚜ **nickname `text`** : ",
      "Cette commande changera votre pseudo par celui de votre choix sur le serveur où cette dernière sera effectué."
    );
    premium.addField(
      "⚜ **pub [nom de votre serveur] [lien du serveur]** :",
      " Cela enverra votre pub sous forme de embed. ( By pass les anti pub )"
    );
    premium.addField(
      "⚜ **zodiac [mois] [jour]** : ",
      " Cette commande vous donnera votre signe du zodiaque, un article dessus & votre horoscope du **jour** ! ( Commande complète uniquement pour la version premium)"
    );
    premium.addField("⚜ **multistream** : ", "Activer son multistream.");
    premium.addField(
      " ⚜ **multinick** : ",
      "Activer le multinickame sur le serveur où la commande a été effectuée."
    );
    premium.addField("⚜ **ban [@user / ID]** : ", "Bannir un utilisateur.");
    premium.addField("⚜ **kick [@user / ID]** : ", "Expulser un utilisateur.");
    premium.addField("⚜ **creater [couleur] [nom]** : ", " Créer un rôle.");
    premium.addField("⚜ **emote** [nom] [image en attachement]** : ","Ajouter un emoji.")
    premium.addField("⚜ **get [nom d'un emoji]** : ", " Récupérer un emoji ( le lien qui vous permettra de le télécharger ensuite).")
premium.setFooter(self);
    premium.setColor("BLACK");
    message.channel.send(premium).then(function(message) {
      message.delete(120100);
    });
    console.log(chalk.red.bold("Message help premium envoyé !"));
  }
});
