const Discord = require("discord.js");
const  client = new Discord.Client();
//UNE ARCHIVO CONFIG AL ARCHIVO DEL BOT
/*const dquiz = require ('discord-quiz');*/
const config = require("./config.json");
const db = require("quick.db");
require("./html.js");
var ayuda = function(message, client) {//variable ayuda con todos los comandos
  var username =  message.author.username;
  var avatar = message.author.avatarURL();
  message.channel.send({embed: 
    {
      color: 3447003,
      author: {
        name: username,
        icon_url: avatar
      },
      title: "Comandos",
      //url: "https://github.com/CraterMaik",
    
      fields: [
        {
          name: "s!hola",
          value: "Saludar siempre es de buena educación..."
        },
        {
          name: "s!hablar",
          value: "Una copa nunca viene mal para charlar."
        },
        {
          name: "s!chistaco",
          value: "Para que te rompas el culo."
        },
        {
          name: "s!info",
          value: "Así Oak no olvidará tu nombre."
        },
        {
          name: "s!pokemon",
          value: "Gotta catch 'em all!"
        },
        {
        name: "s!gym",
        value: "¿Crees poder conseguir todas las medallas?"
        }
      ],
      timestamp: new Date(),// te coge la hora actual
      footer: {
        icon_url: client.user.avatarURL,
        text: "El Sicario"
      }
    }
  });
}
var prefix = config.prefix;

///////////////////////MENSAJE DE CONFIRMACIÓN EN LA CONSOLA//////////////////
client.on("ready", () => {
  console.log("Estoy listo!");
  
  client.user.setActivity("Pokémon Azul | s!help" ,{type: "PLAYING"})

});

////////////////////////MENSAJE DE BIENVENIDA s!hola//////////////////////////   
client.on('message', message => {
  var saludos = [`**${message.author.username}**, bienvenido a mi guarida.`,
                 `**${message.author.username}**, ¿en qué te puedo ayudar hoy?`,
                 `**${message.author.username}**, un placer hacer negocios contigo.`,
                 `¡MUAJAJAJA! Bienvenido, **${message.author.username}**`];
  
  var random = Math.floor(Math.random() * saludos.length);
  if (message.content.startsWith(prefix + "hola")) {
    message.channel.send(saludos[random]);

  }
});

////////////////////////MENSAJE PARA CONVERSACIÓN s!hablar//////////////////////////  
  client.on('message', message => {
    var Mensajes = ["Permíteme presentarme de nuevo. Me llaman el Sicario y será un placer negocios contigo. ¿El nieto de Oak? No sé de que me hablas...",
    "¿Conoces al Prof. Oak? Hablan de él como si fuera una especie de dios o algo. ¡Ja! Para alguien que se pasa quieto todo el tiempo en un solo cuadrado le dan demasiado crédito.", 
    "¿Por qué sólo existen 8 gimnasios en cada región? Quién sabe, quizá en la Meseta Añil sepan algo... o quizás no, jejeje.",
    "¿Alguna vez has completado la pokédex nacional? Es un reto muy  exigente, pero ése es un nuestro gran objetivo como entrenadores. Aún así, no es algo que pueda lograr cualquiera. No hay más que ver a nuestros amigos de la región de Galar. ¡MUAJAJAJA!",
    "Recuerdo mi primer día como entrenador. Aquel viejo en Ciudad Verde fue todo un espectáculo: en pie de guerra sólo por un café, jajaja.",
    "¿Te cuesta vencer al líder del gimnasio? Sólo lleva a tu pokémon más fuerte y 5 rattatas. Cuando tu pokémon esté débil, saca a los rattatas y aprovecha para curar. Siempre te recordaré...Raticate.",
    "Cuando vayas a capturar cualquier legendario, nunca olvides guardar la partida, no vaya a ser que lo pierdas para siempre...",
    "El dinero no da la felicidad... ni tampoco caramelos raros."];
    
    var aleatorio = Math.floor(Math.random() * Mensajes.length);
    if (message.content.startsWith(prefix + "hablar")) {
      message.channel.send(Mensajes[aleatorio]);
  
    }
  });

///////////////////////MENSAJE DE MEMES s!chistaco///////////////////////

client.on('message', message => { 

  const list = [
    { txt: "El Túnel Roca sí que fue un auténtico calvario. Menos mal que tenía uno de estos:", 
      img: {files: ["https://i.pinimg.com/564x/8d/08/02/8d080241d132e6e63404d3db3c506559.jpg"]}},
    { txt: "Veo que has comprado lotería. Hace tiempo me tocó el gordo. ¿Quieres verlo?", 
      img: {files: ["https://i.pinimg.com/564x/be/a7/46/bea746aeecf6605621bc9e99cbcf2373.jpg"]}},
    { txt: "Viajar es muy bueno ¿sabes? Vas a sitios nuevos, conoces gente nuevo. Lo malo es que el billete del transporte cuesta lo suyo. Menos mal que yo siempre cuento con mi propio jet privado.", 
      img: {files: ["https://i.pinimg.com/originals/91/14/cf/9114cf3bf4f8025a5e5ad39c98e987b1.png"]}}
  ];

  var Random = Math.floor(Math.random() * list.length);
  var aleatorio = Math.floor(Math.random() * list.length);

  if (message.content.startsWith(prefix +"meme")){
    message.channel.send(list[aleatorio].txt, list[aleatorio].img);
  }});
 
////////////////////////MENSAJE DE INFO DEL JUGADOR s!info///////////////

var datos = function(message, client) {
  var username =  message.author.username;
  var avatar = message.author.avatarURL();
  var Id = message.author.id;
  message.channel.send({embed: 
    {
      color: 3447003,
      author: {
        name: username,
        icon_url: avatar
      },
      title: "Estado del Jugador",
      
    
      fields: [
        {
          name: "Nombre",
          value: username
        },
        {
          name: "ID",
          value: Id
        },
        {
          name: "Pokémon capturados",
          value: Pokedex
        },
        {
          name: "Medallas",
          value: "Not defined yet"
        },
        {
          name: "Puntos",
          value: Puntos
        },
        {
        name: "Clasificación",
        value: "Not defined yet"
        },
        {
          name: "Rango",
          value: "Not defined yet"
        },
        {
          name: "Último pokémon capturado",
          value: "Not defined yet"
        }
      ],
      timestamp: new Date(),// te coge la hora actual
      footer: {
        icon_url: client.user.avatarURL,
        text: "El Sicario"
      }
    }
  });
}


client.on('message', message => { 
if(message.content.startsWith(prefix +"info")){
  datos(message, client);
}
});

/////////////////////MENSAJE PARA EL MAPA s!mapa/////////////////////////

client.on('message', message => {
  
    if(message.content.startsWith(prefix +"mapa")){
      message.channel.send("Mapa de Kanto", {files: ["https://i.pinimg.com/originals/95/80/b0/9580b0cec48cdcb806888e9d30279382.jpg"]});
    }});

/////////////////////MENSAJE CAPTURAR POKÉMON s!pokemon//////////////////

const kanto = require("./Kanto.json");

var Pokedex = 0
var Puntos = 0

client.on('message', message => {
  if(message.content.startsWith(prefix +"pokemon")){
    
    message.channel.send({embed: {
      color: 3447003,
      description: "¡Explora cada uno de los rincones de Kanto y captura a las 151 criaturas!\nPara ello debes introducir el comando s!(lugar).\nP.ej: s!ruta1\n\nConsejo: Utiliza el comando s!mapa para consultar el mapa de la región."
    }})
  }})


/*client.on('message', message => {
if(message.content.startsWith(prefix +"ruta")){
  
  Pokedex = Pokedex + 1
  Puntos = Puntos + 3
}})*/

const Ruta1 = [/*kanto.WildPokemon.Pidgey, kanto.WildPokemon.Rattata,*/ kanto.WildPokemon.Kakuna]
const Ruta2 = [kanto.WildPokemon.Pidgey, kanto.WildPokemon.Rattata, kanto.WildPokemon.Caterpie, kanto.WildPokemon.Weedle]

client.on('message', message => {
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
})

function random_item(Ruta1)
{
  return Ruta1[Math.floor(Math.random()*Ruta1.length)];
}

function random_item2(Ruta2)
{
  return Ruta2[Math.floor(Math.random()*Ruta2.length)];
}

client.on('message', message => {
  if(message.content.startsWith(prefix +"team")){
    let pokemon = db.fetch(`pokemonlist_${message.author.id}`)

    message.channel.send(pokemon)
  }})

client.on('message', message => {
if(message.content.startsWith(prefix +"ruta1")){
  var appearedpokemon = random_item(Ruta1);
  
  const filter = m => m.content.includes('s!catch');
  const collector = message.channel.createMessageCollector(filter , {time: 15000}); 

  var embed = new Discord.MessageEmbed()

  .setAuthor(`${message.author.username}`,`${message.author.avatarURL()}`)
  .setTitle(`¡Un ${appearedpokemon.Name} salvaje apareció!\n(s!catch para capturar, límite: 20 segundos)\n`)
  .setImage(`${appearedpokemon.Image}`)
  .setTimestamp()
  .setFooter("El Sicario")

  Puntos = Puntos + 3
  /*db.push(`pokemonlist_${message.author.id}`, appearedpokemon.Name)
  db.add(`pokemon_${message.author.id}`, 1)*/

  message.channel.send(embed)

  collector.on('collect', m => {
    message.channel.send(`¡Has capturado un ${appearedpokemon.Name}!`)
    let pokemon = db.fetch(`pokemonlist_${message.author.id}`)
    if(pokemon===null||!pokemon.includes(appearedpokemon.Name)) {
    db.push(`pokemonlist_${message.author.id}`, appearedpokemon.Name)
    db.add(`pokemon_${message.author.id}`, 1)
    Pokedex = Pokedex + 1
    
   } /*if(collected.first().content === appearedpokemon.Name)*/

  });

  collector.on('end', collected=> {
    message.channel.send(/*`El ${appearedpokemon.Name} salvaje ha huido`*/);
  });
}})

/*if(collected.first().content === appearedpokemon.Name){
  db.push(`pokemonlist_${message.author.id}`, appearedpokemon.Name)
  db.add(`pokemon_${message.author.id}`, appearedpokemon.ID)
}*/

client.on('message', message => {
  if(message.content.startsWith(prefix +"ruta2")){
    var appearedpokemon = random_item2(Ruta2);
    
    var embed = new Discord.MessageEmbed()
  
    .setAuthor(`${message.author.username}`,`${message.author.avatarURL()}`)
    .setTitle(`¡Has capturado un ${appearedpokemon.Name}!`)
    .setImage(`${appearedpokemon.Image}`)
    .setTimestamp()
    .setFooter("El Sicario")
  
    message.channel.send(embed)
  }})


/////////////////////MENSAJE GYM LEADER s!gym////////////////////////////

client.on('message', message => { 
  if (message.content.startsWith(prefix +"gym")){
    message.channel.send({embed: {
      color: 3447003,
      description: "Bienvenido al castillo del Líder de Gimnasio.\nEn este modo podrás desafiar a los líderes de gimnasio y obtener sus medallas para coronarte campeón.\n\nAntes de desafiar a estos entrenadores, deberás recopilar información sobre cada uno de ellos. Para ello, deberás responder correctamente 3 preguntas por cada entrenador ejecutando el siguiente comando:\n\ns!(nombre del líder de gimnasio)(un número del 1 al 3)\nP.ej., s!brock1\n\nUna vez hayas respondido correctamente a las tres preguntas, podrás desafiarle mediante el siguiente comando:\n\ns!(nombre del líder de gimnasio)battle\nP.ej., s!brockbattle\n\n¿Tienes lo que hace falta para ser el mejor?"
    }});
}
});


////////////////////////MENSAJE DE AYUDA s!help//////////////////////////  
  client.on('message', message => { 
  if (message.content.startsWith(prefix +"help")){
    ayuda(message, client);
  } 
});
 // end if

// con esto coge los archivos del .config
client.login(config.token);
