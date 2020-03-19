// Example endpoint:
// https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2020-02-17&endtime=2020-03-18

let apiURL=' https://earthquake.usgs.gov/fdsnws/event/1/query';

let map = createMap(2);

$(function(){
    $('#load-earthquakes').click(function(){
        axios.get(apiURL,{
            params: {
                'format':'geojson',
                'starttime':'2020-02-17',
                'endtime':'2020-03-18'
            }
        }).then(function(response){

            let cluster = L.markerClusterGroup();

            let earthquakes = response.data.features;
            for (let e of earthquakes) {
                let lat = e.geometry.coordinates[1];
                let lng = e.geometry.coordinates[0];

                let m = L.marker([lat,lng]);
                cluster.addLayer(m);

            }
            map.addLayer(cluster);
        })    
    })
})
