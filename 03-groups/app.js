$(function() {

    let map = createMap("map", [1.3521, 103.8198], 13);

    // load in both json files before proceeding
    let promises = [axios.get('nature.json'), axios.get('shopping.json'), axios.get('hdb.json')];
    axios.all(promises).then(axios.spread(function(nature, shopping, hdb){
       // create the markers for nature
       let natureGroup = L.layerGroup();
       for (let n of nature.data) {
           let marker = L.marker(n.coordinates).bindPopup(`<p>${n.name}</p>`);
           natureGroup.addLayer(marker);
       }

       // create the markers for shopping
       let shoppingGroup = L.layerGroup();
       for (let s of shopping.data) {
           let marker = L.marker(s.coordinates).bindPopup(`<p>${s.name}</p>`);
           shoppingGroup.addLayer(marker);
       }

       let hdbGroup = L.layerGroup();
       for (let h of hdb.data) {
           let circle = L.circle(h.coordinates,{
               'color':'black',
               'fillColor':'red',
               'fillOpacity':0.3,
               'radius':500
           })
           hdbGroup.addLayer(circle);
       }

       // add to map
       map.addLayer(natureGroup);

       let baseLayers = {
           'Nature':natureGroup,
           'Shopping':shoppingGroup
       }

       let overLayLayers = {
            'HDB':hdbGroup
       }
       
       // setup the control
       L.control.layers(baseLayers, overLayLayers).addTo(map);

       // setup the buttons
       $("#show-hdb-btn").click(function(){
           if (map.hasLayer(hdbGroup)){
                map.removeLayer(hdbGroup)
           } else {
               map.addLayer(hdbGroup);
           }
         
       })


    }));


  
});
