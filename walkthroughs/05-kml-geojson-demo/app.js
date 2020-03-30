$(function() {

    let map = createMap("map", [1.3521, 103.8198], 13);

    let cyclingLayer;
    // let cyclingLayer = omnivore.kml('data/cycling-path-network-kml.kml', 'data/cycling-path-network-geojson.geojson')
    // .on('ready', function() {
    //     map.fitBounds(cyclingLayer.getBounds());
    //     /*
    //     cyclingLayer.eachLayer(function(layer) {
    //         layer.bindPopup(layer.feature.properties.name);
    //         layer.setStyle({
    //             color:'green',
    //             opacity:0.5
    //         });
    //     });
    //     */
    // })
    // .addTo(map);

    axios.get('data/cycling-path-network-geojson.geojson').then(function(r){
        cyclingLayer = L.geoJson(r.data,{
            onEachFeature:(feature, layer) => {
                layer.bindPopup(feature.properties.Description);
            }
        }).addTo(map);

        cyclingLayer.setStyle({
            color:'red'
        })
    })



        


    let underConstruction = omnivore.kml('data/hdb-cycling-paths-under-construction-kml.kml')
    .addTo(map);

    $("#show-cycling").click(function(){
        if (map.hasLayer(cyclingLayer)) {
            map.removeLayer(cyclingLayer)
            $(this).text("Show Cycling Paths");
        } else {
            map.addLayer(cyclingLayer);
            $(this).text("Hide Cycling Paths");
        }
    })

    $("#show-construction").click(function(){
        if (map.hasLayer(underConstruction)) {
            map.removeLayer(underConstruction);
            $(this).text("Show Under Construction Paths")
        } else {
            map.addLayer(underConstruction);
            $(this).text("Show Under Construction Paths");
        }
    })
});
