document.getElementById('submit').addEventListener('click', function() {
    var subject = document.getElementById('subject').value;
    var description = document.getElementById('description').value;

    if(subject && description) {
        alert('Your query has been submitted successfully!');
        document.getElementById('subject').value = '';
        document.getElementById('description').value = '';
    } else {
        alert('Please fill in all fields before submitting.');
    }
});