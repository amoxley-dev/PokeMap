class Map {
  constructor(bounds, locations) {
    console.log('map loaded')
    this.bounds = bounds;
    this.map = this.createMap(this.bounds);
    console.log(locations);
    this.addLocations(locations);
  }

  createMap(bounds) {
    let map = L.map('map', {
      crs: L.CRS.Simple,
      dragging: false,
      maxBounds: bounds,
      zoomControl: false,
      maxZoom: 0 
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