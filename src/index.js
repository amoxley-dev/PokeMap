import Map from "./scripts/map.js"

document.addEventListener("DOMContentLoaded", () => {
  console.log('loaded');
  let bounds = [[0,0], [690,975]];
  let map = new Map(bounds);
});