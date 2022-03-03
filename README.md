# PokeMap

Live Demo: https://amoxley-dev.github.io/PokeMap/

PokeMap is an interactive Pokemon map where the user can see which pokemon are catcheable by clicking on different areas of on the map. The map featured in this project will be the one from Sinnoh and include information about the fourth Generation of Pokemon. After the user clicks on a location the user can click on a Pokemon on the sidebar and get additional information such as stats type and a more detailed picture!

# Technologies

- JavaScript
- HTML5
- CSS3
- Webpack
- Babel
- PokeApi
- Leaflet

# Functionality & MVPs

## Populating the sidebar


Getting the sidebar to populate correctly required first fetching a list of pokemon from the locationURL, then getting each Pokemon from that list in an array then ordering them by id. This is needed because in certain areas there can be multiple floors in game and each floor can have the different pokemon. So if the Pokemon grabbed were in just the order put in by the locations the list of Pokemon could be out of order. After the Pokemon were put in order then they the program iterates through the list of Pokemon and populates the sidebar with the name and sprite.

``` javascript
// src/scripts/pokelist.js
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
```
<img width="809" alt="pokemap: no pokemon selected" src="https://raw.githubusercontent.com/amoxley-dev/PokeMap/main/.github/pokemap.jpg">

## Highlight the selected location

Making the selected area stay visually selected until another area was selected was challenging. The leaflet hover on/off event would reset the color and borders of a selected area even if it was selected. SO in order to have a selected area stay selected even if the user hovered off I set a check in the hover on/off event to see if the place is the selected location, if it is then the hover on/off event doesn't occur. However, this posed another problem. When the use would click on another item the last location would still be highlighted. So I created a previous location variable that stores location data of the selected location and when another location is selected the previous location resets it's style to what it originally was. 

``` javascript
  onClick(location) {
    let func = (e) => {
      const h2 = document.querySelector(".clicked-location");
      if (prevLoc) {
        let reset = prevLoc.options.resetStlye
        prevLoc.setStyle(reset);
      }
      selectedLoc = currentLoc;
      h2.innerHTML = selectedLoc.options.name;
      this.pokelist.populateList(selectedLoc);
      e.target.setStyle(selectedOptions)
      prevLoc = selectedLoc;
    }
    location.on('click', func);
  }
```

## Modal Window

<img width="809" alt="modal window" src="https://raw.githubusercontent.com/amoxley-dev/PokeMap/main/.github/pokemap_modal.jpg">

## Implementation Timeline

- Day 1: Research Leaflet/css to understand how to create an interactable map.
- Day 2: Have a map that correctly sends back coordinates clicked on. Add hover on/off and click listening events.
- Day 3: Create location DICTIONARY for PokeList sidedar poulation.
- Day 4: Add populate sidebar functionality depending on what location was clicked.
- Day 5: Create modal window for clicked pokemon.
- Day 6: Clean up modal window functionality and begin styling
- Day 7: Impliment finishing styling and clean up code.

## Future Feature

- Add encounter data to Pokemon window.
- Add stat visualization.

