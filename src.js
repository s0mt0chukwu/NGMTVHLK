// Add event listener to the form
document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Get the license plate number
    var plate = document.getElementById('plate').value;
  
    // Make an HTTP GET request to the server to retrieve the vehicle information
    fetch('/vehicle?plate=' + plate)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        // Display the vehicle information
        var result = '<h2>Vehicle Information</h2>';
        result += '<p>Make: ' + data.make + '</p>';
        result += '<p>Model: ' + data.model + '</p>';
        result += '<p>Year: ' + data.year + '</p>';
        result += '<p>Color: ' + data.color + '</p>';
        result += '<h2>Owner Information</h2>';
        result += '<p>Name: ' + data.name + '</p>';
        result += '<p>Address: ' + data.address + '</p>';
        result += '<p>Phone: ' + data.phone + '</p>';
        document.getElementById('result').innerHTML = result;
      });
  });
  