import Location from "./location.js"

class Map {
  constructor(bounds) {
    console.log('map loaded')
    this.bounds = bounds;
    this.locations = new Location;

    this.map = this.createMap(this.bounds);
    this.addLocations(this.locations.locations);
  }

  createMap(bounds) {
    let map = L.map('map', {
      crs: L.CRS.Simple,
      dragging: true,
      maxBounds: bounds,
      zoomControl: false,
      minZoom: 0.075,
      maxZoom: 0,
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