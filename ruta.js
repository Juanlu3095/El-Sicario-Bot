const Ruta1 = [kanto.WildPokemon.Kakuna]

function random_item(Ruta1)
{
  return Ruta1[Math.floor(Math.random()*Ruta1.length)];
}

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
    
      message.channel.send(embed)
    
      collector.on('collect', m => {
        message.channel.send(`¡Has capturado un ${appearedpokemon.Name}!`)
        if(appearedpokemon.Name != `pokemonlist_${message.author.id}`){
        db.push(`pokemonlist_${message.author.id}`, appearedpokemon.Name)
        db.add(`pokemon_${message.author.id}`, 1)
        
       } 
    
      });
    
      collector.on('end', collected=> {
        message.channel.send(/*`El ${appearedpokemon.Name} salvaje ha huido`*/);
      });
    }})