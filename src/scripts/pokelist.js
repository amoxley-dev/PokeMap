class Pokelist {
  constructor(pokeList) {
    this.pokeList = pokeList
    this.pokemon = [];
    this.populateList();
  }
  
  populateList(name) {
    // console.log(this.pokeList)
    for (let i = 0; i < 20; i++) {
      const li = document.createElement('li')
      li.innerHTML = `${i+1}`
      this.pokeList.append(li);
      // this.pokeList.innerHTML = ''; this is how to reset the list
    }
  }
}

export default Pokelist;