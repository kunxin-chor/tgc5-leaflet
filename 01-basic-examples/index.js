// setup the map
let singapore = [ 1.29,103.85]; // Singapore latlng
let map = L.map('map').setView(singapore, 13)

// create the tile layer
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw' //demo access token
}).addTo(map);

// add a marker
let singaporeMarker = L.marker([1.29, 103.85]).addTo(map);

// add a cirlce to bukit timah
let circle = L.circle([1.35, 103.76], {
    color: 'red',
    fillColor:'#f03',
    fillOpacity:0.5,
    radius:500
}).addTo(map);

singaporeMarker.bindPopup(`<p>Singapore</p>`);
circle.bindPopup(`<p>Bukit Timah<p>`);

var popup = L.popup()
    .setLatLng([1.25, 103.83])
    .setContent("Sentosa")
    .openOn(map);