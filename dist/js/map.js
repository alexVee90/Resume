const locations = [
  {
    coords: { lat: 44.317, lng: 23.8 },
    message: "<h1>Craiova</h1>"
  }
];

function initMap() {
  let options = {
    zoom: 13,
    center: { lat: 44.317, lng: 23.8 }
  };

  const map = new google.maps.Map(document.getElementById("map"), options);

  function addMarker(loc) {
    const location = new google.maps.Marker({
      position: loc.coords,
      map
    });

    if (loc.message) {
      var infoWindow = new google.maps.InfoWindow({
        content: loc.message
      });
    }

    location.addListener("click", () => {
      infoWindow.open(map, location);
    });
  }

  locations.forEach(loc => {
    addMarker(loc);
  });
}
