$(function() {

    let map = createMap("map", [1.3521, 103.8198], 13);
    let group = L.LayerGroup();
    axios.get('hdb.json').then(function(response){
       for (let n of nature.data) {
           let marker = L.marker(n.coordinates).bindPopup(`<p>${n.name}</p>`);
           group.addLayer(marker);
       }
       group.addTo(map);

    })
    
});
