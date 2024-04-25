let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: 12.9235, lng: 77.4986 },
    zoom: 17,
  });
  const marker = new google.maps.Marker({
    position: { lat: 12.92443, lng: 77.49973 },
    map: map,
    label: "RV",
    title: "RV University"
  });
  const infoWindow = new google.maps.InfoWindow({
    content: "<p>Current Location</p>"
  });
  infoWindow.open(map, marker);
  
  new google.maps.Marker({
    position: { lat: 12.92434, lng: 77.49924 },
    map: map,
    icon: { 
      url: "/images/dustbin.png",
      scaledSize: new google.maps.Size(32, 32) // Adjust the size according to the actual size of the icon
    }
  });

  new google.maps.Marker({
    position: { lat: 12.92369, lng: 77.49925 },
    map: map,
    icon: "/images/dustbin.png",
    scaledSize: new google.maps.Size(32, 32), // Adjust the size according to the actual size of the icon
  });

  new google.maps.Marker({
    position: { lat: 12.92370, lng: 77.50083 },
    map: map,
    icon: "/images/dustbin.png",
    scaledSize: new google.maps.Size(32, 32), // Adjust the size according to the actual size of the icon
  });

  new google.maps.Marker({
    position: { lat: 12.92274, lng: 77.49961 },
    map: map,
    icon: "/images/dustbin.png",
    scaledSize: new google.maps.Size(32, 32), // Adjust the size according to the actual size of the icon
  });

  new google.maps.Marker({
    position: { lat: 12.92550, lng: 77.49891 },
    map: map,
    icon: "/images/dustbin.png",
    scaledSize: new google.maps.Size(32, 32), // Adjust the size according to the actual size of the icon
  });

  new google.maps.Marker({
    position: {}, // You need to specify the position
    map: map,
    icon: "/images/dustbin.png",
    scaledSize: new google.maps.Size(32, 32), // Adjust the size according to the actual size of the icon
  });

}
initMap();
