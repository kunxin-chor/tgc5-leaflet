
// First argument is which id to put the map in
let map = L.map('map');

// First argument is lat-lng
// Second argumnet is the zoom level
map.setView([1.29,103.85], 11);

// create the layer
let layer = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw'
});

// add the layer to the map
layer.addTo(map);

// CREATING MARKERS ///////////////////////////////////////////
let marker = L.marker([1.359,103.989]);
marker.addTo(map);
marker.bindPopup("<p>Changi Airport</p>")

// ADD A CIRCLE ///////////////////////////////////////////////
let circle = L.circle([1.43, 103.8354],{
    radius: 500,
    color:'black', // border
    fillColor:'red', // colour to fill in the circle
    fillOpacity:0.3
})
circle.addTo(map); // the map variable is our map object
circle.bindPopup('<p>Yishun. Be careful!</p>')