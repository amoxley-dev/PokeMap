import Modal from "./pokelist.js";

class Pokelist {
  constructor(pokeList) {
    this.pokeList = pokeList
    console.log("pokeList Loaded")
    //causes stackoverflow when not in index.js
    // new Modal;
    this.populateList();
  }
  
  async populateList(location) {
    if (!location) {return;} 
    
    this.pokeList.innerHTML = '';
    this.pokeNames = [];
    this.pokemon = {};
    const li = document.createElement('li')
    
    let locations = await this.getLocation(location);

    console.log(locations);
    // console.log(!(locations instanceof Array))
    if (!(locations instanceof Array)) {
      li.innerHTML = `No Pokemon at ${locations}`
      this.pokeList.append(li);
      return;
    }
    
    for (let i = 0; i < locations.length; i++) { 
      let location = locations[i];
      await this.getPokemon(location.pokemon_encounters);
    }
        
    this.pokemon.sort;
    const pokeId = Object.keys(this.pokemon);

    for (let i = 0; i < pokeId.length; i++) {
      let key = pokeId[i];
      this.createPokemon(this.pokemon[key])
    }

    new Modal;
    // const openButtons = document.querySelectorAll("[data-poke-id]");
    // console.log(openButtons);
    // new Modal(openButtons);
  }
  
  //get location
  async getLocation(location) {
  if (!location.options.urls) {
    return location.options.name;
  }    
    
    let urls = location.options.urls;

    const locations = [];
    for (let i = 0; i < urls.length; i++) {
      const res = await fetch(urls[i]);
      const location = await res.json();
      locations.push(location);
    }
    
    return locations;
  }

  //get pokemon
  async getPokemon(pokemonEncounters) {

    for (let i = 0; i < pokemonEncounters.length; i++) {
      let pokeInfo = pokemonEncounters[i];
      let notIncludes = !this.pokeNames.includes(pokeInfo.pokemon.name);
      if (notIncludes) {
        this.pokeNames.push(pokeInfo.pokemon.name);
        const res = await fetch(pokeInfo.pokemon.url);
        const pokemon = await res.json();
        // console.log(pokemon.id); //put url into pokemon option!!!!!!!
        this.pokemon[pokemon.id] = pokemon;
        // this.createPokemon(pokemon);
      }
      //include url down here???
    }

  }

  createPokemon(pokemon) {
    const pokemonEl = document.createElement('li');
    pokemonEl.classList.add('pokemon');

    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    const typesArr = pokemon.types.map(el => el.type.name);
    const types = typesArr.join(" ")

    //make a hidden urls tag
    const pokeInnerHTML = `
    <button data-poke-id="${pokemon.id}">
      <div class="img-container">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png">
      </div>
      <div class="info">
        <span class="number">${pokemon.id}</span>
        <h3 class="name">${name}</h3>
      </div>
    </button>      
    `

    pokemonEl.innerHTML = pokeInnerHTML;

    this.pokeList.appendChild(pokemonEl);
  }
}

export default Pokelist;