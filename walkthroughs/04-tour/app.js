$(function(){
    // create the map in id 'map', at Singapore as centre and zoom level 12
    let map = createMap('map', [1.29,103.85], 12);

    let attractions = [
        {
            name:"Singapore Zoo",
            coordinates:[1.348,103.77]
        },
        {
            name:"Jurong Bird Park",
            coordinates:[1.318,103.7064]
        },
        {
            name:"Bukit Timah Nature Reserves",
            coordinates:[1.3541,103.776]
        }
    ]

    for (let a of attractions) {
        let $div = $(`<div>
            Name: ${a.name}
        </div>`);

        // create the button
        let $button = $(`<button>Go there</button>`);
        $button.click(function(){
            map.flyTo(a.coordinates, 15);
         
        })
        $div.append($button);

        // create a marker
        let m = L.marker(a.coordinates);
        m.addTo(map);

        $('#attractions').append($div);
    }
})