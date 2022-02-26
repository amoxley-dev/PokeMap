import Location from "./location.js"

class Map {
  constructor(bounds) {
    console.log('map loaded')
    this.bounds = bounds;
    this.locations = new Location;

    this.map = this.createMap(this.bounds);
    this.addLocations(this.locations);
  }
//make a click function in here to set currentLocation



  createMap(bounds) {
    let map = L.map('map', {
      crs: L.CRS.Simple,
      dragging: true,
      maxBounds: bounds,
      zoomControl: true,
      minZoom: 0.075,
      maxZoom: .5,
      maxBoundsViscosity: 1.0
    });

    L.imageOverlay('./src/images/sinnoh-map.jpg', bounds).addTo(map);
    map.fitBounds(bounds);

    return map
  }

  addLocations(locations) {
    for (let i = 0; i < locations.length; i++) {
      console.log('iterating')
      locations[i].addTo(this.map);
    }
  }
}

export default Map