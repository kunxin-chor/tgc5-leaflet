let map = L.map("map"); // create leaflet map and store the resultant object inside the map variable
map.setView([1.29, 103.85], 11);

let layer = L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
    accessToken:
      "pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw" //demo access token
  }
);

layer.addTo(map);

$(function() {
  $("#find-taxi-btn").click(function() {
    let apiURL = "https://api.data.gov.sg/v1/transport/taxi-availability";
    axios.get(apiURL).then(function(response) {
      let taxiCoordinates = response.data.features[0].geometry.coordinates;
      for (let t of taxiCoordinates) {
        let m = L.marker([t[1], t[0]]);
        m.addTo(map);
      }
    });
  });
});
