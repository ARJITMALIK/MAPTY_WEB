// const map = L.map("map").fitWorld();

// L.tileLayer(
//   "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
//   {
//     attribution:
//       'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     tileSize: 512,
//     zoomOffset: -1,
//   }
// ).addTo(map);
let lat = 0;
let long = 0;
navigator.geolocation.watchPosition(
  function onSuccess(position) {
    lat = position.coords.latitude;
    long = position.coords.longitude;

    const mymap = L.map("map").setView([lat, long], 18);
    L.tileLayer(
      "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 20,
        id: "mapbox/streets-v11",
        tileSize: 512,
        zoomOffset: -1,
        accessToken:
          "pk.eyJ1IjoiYXJqaXRtYWxpayIsImEiOiJja3U0enZjZ20wMnliMndvNzJneWQxbjA3In0.xT6NTkj5fLDXL8p2xgxO9A",
      }
    ).addTo(mymap);

    const marker = L.marker([lat, long]).addTo(mymap);
    const circle = L.circle([lat, long], {
      color: "green",
      fillColor: "#18f404",
      fillOpacity: 0.5,
      radius: 80,
    }).addTo(mymap);

    marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();

    // const popup = L.popup()
    //   .setLatLng([lat, long])
    //   .setContent("I am a standalone popup.")
    //   .openOn(mymap);

    // function onMapClick(e) {
    //   alert("You clicked the map at " + e.latlng);
    // }

    // mymap.on("click", onMapClick);

    const popup = L.popup();

    function onMapClick(e) {
      popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
    }

    mymap.on("click", onMapClick);
  },
  function onError() {
    console.log("acess denied");
  }
);
