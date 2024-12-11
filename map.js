let map;
let marker;

function initMap() {
  // Default location (center of the world)
  const defaultLocation = { lat: 28.8905284, lng: 76.6040205 };

  // Initialize the map
  map = new google.maps.Map(document.getElementById("map"), {
    center: defaultLocation,
    zoom: 2,
  });

  // Default marker
  marker = new google.maps.Marker({
    position: defaultLocation,
    map: map,
    title: "Default Location",
  });
}

document.getElementById("submit-btn").addEventListener("click", () => {
  const lat = parseFloat(document.getElementById("latitude").value);
  const lng = parseFloat(document.getElementById("longitude").value);

  if (!isNaN(lat) && !isNaN(lng)) {
    const newLocation = { lat: lat, lng: lng };

    // Update map center
    map.setCenter(newLocation);
    map.setZoom(10);

    // Update marker position
    marker.setPosition(newLocation);
    marker.setTitle(`Latitude: ${lat}, Longitude: ${lng}`);
  } else {
    alert("Please enter valid latitude and longitude!");
  }
});

// Initialize the map when the script loads
window.onload = initMap;
