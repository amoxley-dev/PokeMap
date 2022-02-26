import Map from "./scripts/map.js"
import Location from "./scripts/location.js"

document.addEventListener("DOMContentLoaded", () => {
  console.log('loaded')
  let bounds = bounds = [[0,0], [690,975]]
  let locations = new Location;
  let map = new Map(bounds, locations);
});