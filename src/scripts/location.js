import { DICTIONARY } from "./dictionary";
class Locations {
  constructor() {
    this.locations = [];
    this.firstRectBounds();
    console.log(DICTIONARY)
    return this.locations;
  }

  addRouteRect(bounds) {

    let rectangle = L.rectangle(bounds, {color: "#ff7800", weight: 1});
    this.locations.push(rectangle);
  }

  // addRoutePoly() {

  // }

  //make an add routes function that iterates through DICTIONARY

  firstRectBounds() {
    let rectBounds = [[345, 300], [600, 0]];
    this.addRouteRect(rectBounds);
  }
}

export default Locations;