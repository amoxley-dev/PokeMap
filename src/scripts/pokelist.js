class Pokelist {
  constructor(pokeList) {
    this.pokeList = pokeList
    this.populateList();
  }
  
  async populateList(location) {
    if (!location) {return;} 

    this.displayLoading();
    this.pokeList.innerHTML = '';
    this.pokeNames = [];
    this.pokemon = {};
    const li = document.createElement('li')
    
    let locations = await this.getLocation(location);
    if (!(locations instanceof Array)) {
      li.innerHTML = `No Catcheable Pokemon At ${locations}`
      this.pokeList.append(li);
      this.hideLoading();
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

    const openButtons = document.querySelectorAll("[data-poke-id]");
    this.createModality(openButtons);
    this.hideLoading();
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
        this.pokemon[pokemon.id] = pokemon;

      }
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
        <h3 class="name">${name}</h3>
      </div>
    </button>      
    `

    pokemonEl.innerHTML = pokeInnerHTML;

    this.pokeList.appendChild(pokemonEl);
  }

  //Loading
  displayLoading() {
    const loader = document.querySelector("#loading");
    loader.classList.add("display");
  }

  hideLoading() {
    const loader = document.querySelector("#loading");
    loader.classList.remove("display");
  }


  //modal stuff
  createModality(openButtons) {
    const openModalButtons = openButtons;
    const closeModalButtons = document.querySelectorAll('[data-close-button]')
    const overlay = document.getElementById('overlay')
    // console.log(openModalButtons);
    this.openModalButton(openModalButtons);
    this.closeModalWindow(overlay, closeModalButtons);
  }

  openModalButton(openModalButtons) {
    openModalButtons.forEach(button => {
      let pokeId = button.dataset.pokeId;
      button.addEventListener('click', () => {
        const modal = document.querySelector('.modal');
        this.openModal(modal, pokeId);
      });
    });
  }

  async modalPokemon(url) {
    const res = await fetch(url);
    const pokemon = await res.json();
    return pokemon;
  }

  closeModalWindow(overlay, closeModalButtons) {
    overlay.addEventListener('click', () => {
      const modals = document.querySelectorAll('.modal.active')
      modals.forEach(modal => {
        this.closeModal(modal);
      })
    })
  
    closeModalButtons.forEach(button => {
      button.addEventListener('click', ()=> {
        const modal = button.closest('.modal');
        this.closeModal(modal);
      })
    });
  }

  async openModal(modal, pokeId) {
    if (modal === null) return;

    this.displayLoading();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeId}`;
    const pokemon = await this.modalPokemon(url);
  
    this.createModalPokemon(pokemon)
  
    this.hideLoading();
    modal.classList.add('active');
    overlay.classList.add('active')
  }

  closeModal(modal) {
    if (modal === null) return;
    modal.classList.remove('active');
    overlay.classList.remove('active')
  }

  createModalPokemon(pokemon) {
  
    let type1 = pokemon.types[0].type.name;
    let type2 = null;
    if (pokemon.types.length > 1) {
      type2 = pokemon.types[1].type.name;
    }
    const stats = pokemon.stats
  
    const pokeImg = document.querySelector(".poke-image-container");
    const pokeName = document.querySelector(".poke-name");
    const pokeType1 = document.querySelector(".poke-type-1");
    const typeImg1 = document.querySelector("#type-1-img");
    const pokeType2 = document.querySelector(".poke-type-2");
    const typeImg2 = document.querySelector("#type-2-img");
    const pokeStats = document.querySelector(".poke-stats");
  
    console.log(pokeStats);
  
    const imgInnerHTML = `
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png">
    `;

    pokeStats.innerHTML = "";
    for (let i = 0; i < stats.length; i++) {
      let stat = stats[i];
      let statNum = document.createElement('div');
      statNum.setAttribute("class", "stat-container");
      let statCap = stat.stat.name[0].toUpperCase() + stat.stat.name.slice(1);
      
      let numInnerHTML = `
        <div class="skills ${stat.stat.name}">${statCap}: ${stat.base_stat}</div>
      ` 
      statNum.innerHTML = numInnerHTML;
      
      pokeStats.appendChild(statNum);
    }

    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    const typeCap1 = type1[0].toUpperCase() + type1.slice(1);

    pokeImg.innerHTML = imgInnerHTML;
    typeImg1.innerHTML = `<img src="./src/images/${type1}.png">`
    pokeType1.innerHTML = typeCap1;
    pokeType1.removeAttribute("hidden");
    typeImg1.removeAttribute("hidden");
    pokeType2.hidden = true;
    typeImg2.hidden = true;
    if (type2 !== null) { 
      const typeCap2 = type2[0].toUpperCase() + type2.slice(1);
      typeImg2.innerHTML = `<img src="./src/images/${type2}.png">`
      typeImg2.removeAttribute("hidden");
      pokeType2.innerHTML = typeCap2;
      pokeType2.removeAttribute("hidden");
    }
    pokeName.innerHTML = name;
  }
}

export default Pokelist;