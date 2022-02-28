const pokemonAPI = 'https://pokeapi.co/api/v2/pokemon/?offset=150&limit=150'

class Pokelist {
  constructor(pokeList) {
    this.pokeList = pokeList
    this.pokemon = [];
    this.populateList();
  }
  
  populateList(location) {
    this.pokeList.innerHTML = '';
    const li = document.createElement('li')

    if (!location) {
      location = 'Click On Map Location'
      li.innerHTML = `${location}`
      this.pokeList.append(li);
    } else {
    for (let i = 0; i < 20; i++) { 
      const li = document.createElement('li')
      li.innerHTML += `${location.options.name}`
      this.pokeList.append(li);
    }
  }
  }
}

export default Pokelist;