$(function() {

    let map = createMap("map", [1.3521, 103.8198], 13);
    let group = L.layerGroup();

    $('#load').click(function(){
        
    axios.get('nature.json').then(function(response){

        // empty the layer first, this way no matter how many times you press the button,
        // the markers won't accumulate
        group.clearLayers();
       for (let n of response.data) {
           let marker = L.marker(n.coordinates).bindPopup(`<p>${n.name}</p>`);
           group.addLayer(marker);
       }
       group.addTo(map);

    })
    
    })

});
