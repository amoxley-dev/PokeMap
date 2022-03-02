import { DICTIONARY } from "./dictionary";

const routeOptions = {color: "#ffb552", weight: 2, opacity: 0.8, fillOpacity: 0.2};
const routeHovOptions = {color: "#ff7333", weight: 3, opacity: 1, fillOpacity: 0.3};
const townOptions = {color: "#f11e00", weight: 2, opacity: 0.8, fillOpacity: 0.2};
const townHovOptions = {color: "#eb0008", weight: 3, opacity: 1, fillOpacity: 0.3};
const lakeOptions = {color: "#1c24ff", weight: 2, opacity: 0.8, fillOpacity: 0.2};
const lakeHovOptions = {color: "#3800ca", weight: 3, opacity: 1, fillOpacity: 0.3};
const miscOptions = {color: "#29ffdd", weight: 2, opacity: 0.8, fillOpacity: 0.2};
const miscHovOptions = {color: "#03b4ff", weight: 3, opacity: 1, fillOpacity: 0.3};
const selectedOptions = { color: '#39FF14', weight: 3.5, opacity: 1, fillOpacity: 0.3};

let currentLoc = undefined;
let selectedLoc = undefined;
let prevLoc = undefined;

class Locations {
  constructor(pokelist) {
    this.locations = [];
    this.pokelist = pokelist;
    this.makeLocations();
    this.addHoverEffects();
    this.addClickEffects();
  }

  //iterates through Dictionary and inserts leaflet objects into this.locations
  makeLocations() {
    for (const prop in DICTIONARY) {
      let locOptions = DICTIONARY[prop];
      this.addRoutes(locOptions);
    }
  }

  //Create locations
  addRoutes(locOptions) {
    let newLocation = null;
    switch (locOptions.method) {
      case 'routeRect':
        newLocation = L.rectangle(locOptions.bounds, routeOptions);
        newLocation.options.resetStlye = routeOptions;
        break;
      case 'routePoly':
        newLocation = L.polygon(locOptions.bounds, routeOptions);
        newLocation.options.resetStlye = routeOptions;
        break;
      case 'townRect':
        newLocation = L.rectangle(locOptions.bounds, townOptions);
        newLocation.options.resetStlye = townOptions;
        break;
      case 'townPoly':
        newLocation = L.polygon(locOptions.bounds, townOptions);
        newLocation.options.resetStlye = townOptions;
        break;
      case 'lakeRect':
        newLocation = L.rectangle(locOptions.bounds, lakeOptions);
        newLocation.options.resetStlye = lakeOptions;
        break;
      case 'miscRect':
        newLocation = L.rectangle(locOptions.bounds, miscOptions);
        newLocation.options.resetStlye = miscOptions;
        break;
      case 'miscPoly':
        newLocation = L.polygon(locOptions.bounds, miscOptions);
        newLocation.options.resetStlye = miscOptions;
        break;
    }

    newLocation.options.urls = locOptions.urls;
    newLocation.options.name = locOptions.name;
    this.locations.push(newLocation);
  }

  //Hover Functions
  hoverOver(location) {
    let options = routeHovOptions;

    let func = (e) => {
      currentLoc = e.target;
      
      if (currentLoc !== selectedLoc) {
        e.target.setStyle(options);
      }
    };
    
    switch (location.options.color) {
      case routeOptions.color:
        options = routeHovOptions;
        break;
      case townOptions.color:
        options = townHovOptions;
        break;
      case lakeOptions.color:
        options = lakeHovOptions;
        break;
      case miscOptions.color:
        options = miscHovOptions;
        break;
    }

    location.on('mouseover', func);
  }

  hoverOut(location) {
    let options = selectedOptions;

    switch (location.options.color) {
      case routeOptions.color:
        options = routeOptions
        break;
      case townOptions.color:
        options = townOptions;
        break;
      case lakeOptions.color:
        options = lakeOptions;
        break;
      case miscOptions.color:
        options = miscOptions;
        break;
    }

    let func = (e) => {
      if (currentLoc !== selectedLoc) {
        e.target.setStyle(options);
      }
    };

    location.on('mouseout', func);
  }

  addHoverEffects() {
    for (let i = 0; i < this.locations.length; i++) {
      let location = this.locations[i];
      this.hoverOver(location);
      this.hoverOut(location);
    }
  }

  //click functions
  onClick(location) {
    let func = (e) => {
      const h2 = document.querySelector(".clicked-location");
      if (prevLoc) {
        let reset = prevLoc.options.resetStlye
        prevLoc.setStyle(reset);
      }
      selectedLoc = currentLoc;
      console.log(selectedLoc);
      h2.innerHTML = selectedLoc.options.name;
      this.pokelist.populateList(selectedLoc);
      // console.log(selectedLoc);
      console.log(selectedLoc.options.urls);
      e.target.setStyle(selectedOptions)
      prevLoc = selectedLoc;
    }
    location.on('click', func);
  }

  addClickEffects() {
    for (let i = 0; i < this.locations.length; i++) {
      let location = this.locations[i]
      this.onClick(location);
    }
  }
}

export default Locations;