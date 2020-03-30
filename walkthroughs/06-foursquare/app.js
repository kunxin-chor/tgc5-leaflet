$(function() {
  let map = createMap("map", [1.3521, 103.8198], 13);

  // API Exploration
  // 1. Try out the API out for ourselves -- so we need to know the endpoint
  // 2. Determine what are the parameters
  // 3. Use Jsonpathfinder to examine the results

  let client_id = "OWM4RWDVI1IXUTU0PGYXUBKQ0BDVLGV1VWP2N35XIJ4TYXEF";
  let client_secret = "EIIORYOHQZDTH540G4W54A0ZMNLDSAC5XYNDOFGIYOPNVGJ5";

  let apiURL = "https://api.foursquare.com/v2/venues/search";
  let apiCategoryURL = "https://api.foursquare.com/v2/venues/categories";
  let venueDetailsURL = "https://api.foursquare.com/v2/venues/";
  axios
    .get(apiCategoryURL, {
      params: {
        client_id,
        client_secret,
        v: "20200326"
      }
    })
    .then(function(r) {
      console.log(r.data);
    });

  axios
    .get(apiURL, {
      params: {
        client_id,
        client_secret,
        near: "Singapore",
        intent: "browse",
        v: "20200326",
        categoryId: "4d4b7104d754a06370d81259"
      }
    })
    .then(function(response) {
      let venues = response.data.response.venues;
      console.log(venues);
      for (let v of venues) {
        let marker = L.marker([v.location.lat, v.location.lng]);
        marker.bindPopup(`<p>${v.name}</p>`);
        marker.on("click", function(e) {
          console.log(e);
          console.log(v);
          axios
            .get(venueDetailsURL + v.id, {
              params: {
                client_id,
                client_secret,
                v: "20200326"
              }
            })
            .then(function(r) {
              console.log(r.data);
              $("#venue-name").text(r.data.response.venue.name)
            });
        });
        marker.addTo(map);
      }
    });
});
