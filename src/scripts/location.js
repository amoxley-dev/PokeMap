import { DICTIONARY } from "./dictionary";

const routeOptions = {color: "#ff9333", weight: 1, opacity: 0.8, fillOpacity: 0.2}
const routeHovOptions = {color: "#ff7333", weight: 1.5, opacity: 1, fillOpacity: 0.3}
const townOptions = {color: "#f11e00", weight: 1, opacity: 0.8, fillOpacity: 0.2}
const townHovOptions = {color: "#eb0008", weight: 1.5, opacity: 1, fillOpacity: 0.3}
const lakeOptions = {color: "#1c24ff", weight: 1, opacity: 0.8, fillOpacity: 0.2}
const lakeHovOptions = {color: "#3800ca", weight: 1.5, opacity: 1, fillOpacity: 0.3}
const miscOptions = {color: "#c7ffd5", weight: 1, opacity: 0.8, fillOpacity: 0.2}
const miscHovOptions = {color: "#75ffca", weight: 1.5, opacity: 1, fillOpacity: 0.3}

class Locations {
  constructor() {
    this.locations = [];

    this.makeLocations();
    this.addHoverEffects();

    return this.locations;
  }

  //iterates through Dictionary and inserts leaflet objects into this.locations
  makeLocations() {
    for (const prop in DICTIONARY) {
      let locOptions = DICTIONARY[prop];
      this.addRoutes(locOptions);
    }
  }

  //Create locations
  addRouteRect(bounds) {
    return 
  }

  addRoutePoly(bounds) {
    return 
  }

  createTownRect(bounds) {
    return 
  }



  addRoutes(locOptions) {
    let newLocation = null;
    switch (locOptions.method) {
      case 'routeRect':
        newLocation = L.rectangle(locOptions.bounds, routeOptions);
        break;
      case 'routePoly':
        newLocation = L.polygon(locOptions.bounds, routeOptions);;
        break;
      case 'townRect':
        newLocation = L.rectangle(locOptions.bounds, townOptions);
        break;
      case 'townPoly':
        newLocation = L.polygon(locOptions.bounds, townOptions);;
        break;
      case 'lakeRect':
        newLocation = L.rectangle(locOptions.bounds, lakeOptions);
        break;
      case 'miscRect':
        newLocation = L.rectangle(locOptions.bounds, miscOptions);
        break;
    }

    this.locations.push(newLocation);
  }

  //Hover Functions
  hoverOver(location) {
    let func = null

    switch (location.options.color) {
      case routeOptions.color:
        location.on('mouseover', function(e) {
          e.target.setStyle(routeHovOptions)
        });
        break;
      case townOptions.color:
        location.on('mouseover', function(e) {
          e.target.setStyle(townHovOptions)
        });
        break;
      case lakeOptions.color:
        location.on('mouseover', function(e) {
          e.target.setStyle(lakeHovOptions)
        });
        break;
      case miscOptions.color:
        location.on('mouseover', function(e) {
          e.target.setStyle(miscHovOptions)
        });
        break;
    }

    /*Why does below not work? */
    // location.on('mouseover', func(e));
  }

  hoverOut(location) {
    switch (location.options.color) {
      case routeOptions.color:
        location.on('mouseout', function(e) {
          e.target.setStyle(routeOptions)
        });
        break;
      case townOptions.color:
        location.on('mouseout', function(e) {
          e.target.setStyle(townOptions)
        });
        break;
      case lakeOptions.color:
        location.on('mouseout', function(e) {
          e.target.setStyle(lakeOptions)
        });
        break;
      case miscOptions.color:
        location.on('mouseout', function(e) {
          e.target.setStyle(miscOptions)
        });
        break;
    }
  }

  addHoverEffects() {
    for (let i = 0; i < this.locations.length; i++) {
      let location = this.locations[i];
      this.hoverOver(location);
      this.hoverOut(location);
    }
  }
}

export default Locations;