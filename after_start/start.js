let map;
let markers = [];

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: 12.9235, lng: 77.4986 },
    zoom: 17,
  });

  const rvMarker = new google.maps.Marker({
    position: { lat: 12.92443, lng: 77.49973 },
    map: map,
    label: "RV",
    title: "RV University"
  });
  markers.push(rvMarker);

  const infoWindow = new google.maps.InfoWindow({
    content: "<p>Current Location</p>"
  });
  infoWindow.open(map, rvMarker);

  addMarkerAndPolyline(12.92443, 77.49973);
  addMarkerAndPolyline(12.92434, 77.49924);
  addMarkerAndPolyline(12.92369, 77.49925);
  addMarkerAndPolyline(12.92370, 77.50083);
  addMarkerAndPolyline(12.92274, 77.49961);
  addMarkerAndPolyline(12.92550, 77.49891);
  addMarkerAndPolyline(12.92529, 77.50013);
  addMarkerAndPolyline(12.92477, 77.50045);

  drawPolyline();
}

function addMarkerAndPolyline(lat, lng) {
  const marker = new google.maps.Marker({
    position: { lat: lat, lng: lng },
    map: map,
    icon: "/images/dustbin.png",
    scaledSize: new google.maps.Size(32, 32)
  });
  markers.push(marker);
}

function drawPolyline() {
  const path = markers.map(marker => ({
    lat: marker.getPosition().lat() + 0.0001, // Adding a small offset to avoid overlapping
    lng: marker.getPosition().lng()
  }));

  const polyline = new google.maps.Polyline({
    path: path,
    geodesic: true,
    strokeColor: "#000000", // Black color
    strokeOpacity: 1.0,
    strokeWeight: 4 // Thicker line
  });
  polyline.setMap(map);
}

initMap();
