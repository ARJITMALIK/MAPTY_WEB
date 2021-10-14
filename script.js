navigator.geolocation.getCurrentPosition(
  function (pos) {
    console.log(pos);
  },
  function () {
    alert("couldn't get your location'");
  }
);
