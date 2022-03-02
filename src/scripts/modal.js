class Modal {
  constructor() {
    console.log("modal loaded");
    // this.createModality(this.openButtons);
  }

  createModality(openButtons) {
    const openModalButtons = openButtons;
    const closeModalButtons = document.querySelectorAll('[data-close-button]')
    const overlay = document.getElementById('overlay')
    // console.log(openModalButtons);
    openModalButton(openModalButtons);
    closeModalWindow(overlay, closeModalButtons);
  }

  openModalButton(openModalButtons) {
    openModalButtons.forEach(button => {
      let pokeId = button.dataset.pokeId;
      button.addEventListener('click', () => {
        openModal(modal, pokeId);
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
        closeModal(modal);
      })
    })
  
    closeModalButtons.forEach(button => {
      button.addEventListener('click', ()=> {
        const modal = button.closest('.modal');
        closeModal(modal);
      })
    });
  }

  async openModal(modal, pokeId) {
    if (modal === null) return;
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeId}`;
    const pokemon = await modalPokemon(url);
  
    createModalPokemon(pokemon)
  
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
  
    //refactor stats
    for (let i = 0; i < stats.length; i++) {
      const stat = stats[i];
      const statName = document.createElement('p');
      const statNum = document.createElement('div');
      statName.setAttribute("class", "stat-name");
      statNum.setAttribute("class", "stat-container");
  
      const numInnerHTML = `
        <div class="skills ${stat.stat.name}">${stat.base_stat}</div>
      ` 
  
      statName.innerHTML = stat.stat.name;
      statNum.innerHTML = numInnerHTML;
  
      pokeStats.appendChild(statName);
      pokeStats.appendChild(statNum);
    }
  
    pokeImg.innerHTML = imgInnerHTML;
    typeImg1.innerHTML = `<img src="./images/${type1}.png">`
    pokeType1.innerHTML = type1;
    pokeType1.removeAttribute("hidden");
    typeImg1.removeAttribute("hidden");
    if (type2 !== null) { 
      typeImg2.innerHTML = `<img src="./images/${type2}.png">`
      typeImg2.removeAttribute("hidden");
      pokeType2.innerHTML = type2;
      pokeType2.removeAttribute("hidden");
    }
    pokeName.innerHTML = pokemon.name;
  }
}

export default Modal;