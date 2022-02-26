import { DICTIONARY } from "./dictionary";
const routeOptions = {color: "#ff9333", weight: 1, opacity: 0.8, fillOpacity: 0.2}
const townOptions = {color: "#f11e00", weight: 1, opacity: 0.8, fillOpacity: 0.2}

class Locations {
  constructor() {
    this.locations = [];
  
    for (const prop in DICTIONARY) {
      let location = DICTIONARY[prop];
      let locMethod = DICTIONARY[prop].method;
      this.addRoutes(location, locMethod);
    }

    this.addHoverEffects();

    return this.locations;
  }

  //Create locations
  addRouteRect(bounds) {
    return L.rectangle(bounds, routeOptions);
  }

  addRoutePoly(bounds) {
    return L.polygon(bounds, routeOptions);
  }

  createTownRect(bounds) {
    return L.rectangle(bounds, townOptions);
  }

  addRoutes(location, locMethod) {
    let newLocation = null;
    switch (locMethod) {
      case 'routeRect':
        newLocation = this.addRouteRect(location.bounds);
        break;
      case 'routePoly':
        newLocation = this.addRoutePoly(location.bounds);
        break;
      case 'townRect':
        newLocation = this.createTownRect(location.bounds);
        break;
    }

    this.locations.push(newLocation);
  }

  //Hover Functions

  

  addHoverEffects() {
    for (let i = 0; i < this.locations.length; i++) {
      
    }
  }
}

export default Locations;