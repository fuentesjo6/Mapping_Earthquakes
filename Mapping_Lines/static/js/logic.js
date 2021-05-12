// Add console.log to check to see if the code is working.
console.log("working");

// Create the map object with options
let map = L.map("mapid").setView([36.1733, -120.1794], 7);
// Coordinates for each point to be used in the polyline.
let line = [
  [33.9416, -118.4085],
  [37.6213, -122.3790],
  [40.7899, -111.9791],
  [47.4502, -122.3088]
]
// Create a polyline using the line coordinates and make the line red
L.polyline(line, {
  color: "yellow"
}).addTo(map);
// Create the tile layer that will be the background of the map.
let satellite = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// Then add tile layer to the map.
satellite.addTo(map);