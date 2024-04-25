document.getElementById('submit').addEventListener('click', function() {
    var subject = document.getElementById('subject').value;
    var description = document.getElementById('description').value;
    var type = document.getElementById('type').value;
    var location = document.getElementById('location').value;

    if(subject && description && type && location) {
        alert('Your repair request has been submitted successfully!');
        document.getElementById('subject').value = '';
        document.getElementById('description').value = '';
        document.getElementById('type').value = '';
        document.getElementById('location').value = '';
    } else {
        alert('Please fill in all fields before submitting.');
    }
});

document.getElementById('getLocation').addEventListener('click', function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var location = "Latitude: " + position.coords.latitude + 
            ", Longitude: " + position.coords.longitude; 
            document.getElementById('location').value = location;
        });
    } else { 
        alert("Geolocation is not supported by this browser.");
    }
});