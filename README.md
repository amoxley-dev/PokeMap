# PokeMap

Live Demo: https://amoxley-dev.github.io/PokeMap/

PokeMap is an interactive Pokemon map where the user can see which pokemon are catcheable by clicking on different areas of on the map. The map featured in this project will be the one from Sinnoh and include information pertaining to Generation IV of Pokemon.If the user wants additional information about the Pokemon they can then click on the Pokemon and find information such as encounter methods, encounter rates, and more!

## Functionality & MVPs

In PokeMap, users will be able to:

- Click on the map
- Bring up a list of Pokemon that are available to catch in that area.
- Click on a specific Pokemon from the list.
- Gather additional information about the Pokemon when clicked on.

In addition, this project will include:

- A production README
- A Brief explanation when the user opens the webpage

## Wireframe

<img width="809" alt="pokemap wireframe: no pokemon selected" src="https://raw.githubusercontent.com/amoxley-dev/PokeMap/main/.github/PokeMap1.png">

- Nav links include links to this project's Github repo, my LinkedIn, and PokeApi.
- Logo is on upper left corner.
- Map is in center of screen, user will be able to click on different portions of map.
- Clickable portions of map will change mouse pointer to indacate clickability.
- Scrollable Pokemon list on left(just names).
- Will be empty when page loads.

<img width="809" alt="pokemap wireframe: no pokemon selected" src="https://raw.githubusercontent.com/amoxley-dev/PokeMap/main/.github/PokeMap2.png">

- When user clicks on Pokemon name in sidebar they will be able to get more info about Pokemon.
- Info includes encounter rates & methods, PokeDex number, type, and sprite image.

## Technologies

- JavaScript
- HTML5
- CSS3
- Webpack
- Babel
- PokeApi
- Leaflet

## Implementation Timeline

- Day 1: Research Leaflet/css to understand how to create an interactable map. Have a map that correctly sends back coordinates clicked on
- Day 2: Work on Pokemon sidebar list. Make is scalable for any number of inputs. Just name, pokedex num, and if possible small sprite
- Day 3: Connect map coordinates to pokemon at coordinate and make those Pokemon appear in the list
- Day 4: Make Pokemon info box apear when name is clicked on, determine parameters and fill them in.
- Day 5: Optimize what is currently there. Fixing any bugs.
- Day 6: Use CSS to stlye.
- Day 7: Impliment finishing touches.


