import Map from "./scripts/map.js";
import Location from "./scripts/location.js";
import Pokelist from "./scripts/pokelist.js";
import Modal from "./scripts/modal.js";

document.addEventListener("DOMContentLoaded", () => {
  console.log('loaded');
  const bounds = [[0,0], [640,893]];
  const pokeList = document.getElementById("pokemon-list");
  let pokemonList = new Pokelist(pokeList);
  let locations = new Location(pokemonList);
  let map = new Map(bounds, locations);
  // new Modal;
});