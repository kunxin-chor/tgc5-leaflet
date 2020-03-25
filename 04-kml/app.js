$(function() {

    let map = createMap("map", [1.3521, 103.8198], 13);


    var runLayer = omnivore.kml('data/cycling-path-network-kml.kml')
    .on('ready', function() {
        map.fitBounds(runLayer.getBounds());
    })
    .addTo(map);
  
});
