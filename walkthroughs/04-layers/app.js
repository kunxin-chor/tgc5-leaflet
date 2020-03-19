$(function() {

    let map = createMap("map", [1.3521, 103.8198], 13);
    let natureLayerGroup = null;
    let shoppingLayerGroup = null;
    let HDBLayerGroup = null;
    // whenever we call axios.get(), it returns a promise
    // when we call .then(), it actually applies the promise
    let promises = [axios.get('data/nature.json'), 
                    axios.get('data/shopping.json'), 
                    axios.get('data/hdb.json')];
    
    axios.all(promises).then(axios.spread(function(natureResponse, shoppingResponse, hdbResponse){
        // create layer group for the nature POIs
        natureLayerGroup = L.layerGroup();
        for (let n of natureResponse.data) {
            // create the marker
            let marker = L.marker(n.coordinates).bindPopup(`<p>${n.name}</p>`);
            // add to the layer we want
            natureLayerGroup.addLayer(marker);
        }
        map.addLayer(natureLayerGroup);


       // create the layer group for the shopping POIs
       shoppingLayerGroup = L.layerGroup();
       for (let s of shoppingResponse.data) {
           let marker = L.marker(s.coordinates).bindPopup(`<p>${s.name}</p>`);
           shoppingLayerGroup.addLayer(marker);
       }
  
       // create the HDB layer group
       HDBLayerGroup= L.layerGroup();
       for (let h of hdbResponse.data) {
           let circle = L.circle(h.coordinates, {
               radius:1000
           }).bindPopup(`<p>${h.name}</p>`)
           HDBLayerGroup.addLayer(circle);
       }

        let baseLayers = {
            'Nature':natureLayerGroup,
            'Shopping':shoppingLayerGroup
        }

        let overlayLayers = {
            'HDB':HDBLayerGroup
        }


     let control = L.control.layers(baseLayers, overlayLayers).addTo(map)
     map.addControl(control);
        
    }))

    $("#hide-nature-btn").click(function(){
         map.removeLayer(natureLayerGroup);
    })

    $("#toggle-shopping-btn").click(function(){

        // use hasLayer() to check if the map already have the shopping layer group
        if (map.hasLayer(shoppingLayerGroup)) {
            map.removeLayer(shoppingLayerGroup);
        } else {
              map.addLayer(shoppingLayerGroup);
        }
      
    })
});
