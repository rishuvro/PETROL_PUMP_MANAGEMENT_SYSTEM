document.addEventListener('DOMContentLoaded', () => {
  // Select form element
  const form = document.querySelector('form');

  // Add submit event listener to form
  form.addEventListener('submit', event => {
    // Prevent default form submission behavior
    event.preventDefault();

    // Get fuel type, quantity, and price input elements
    const fuelTypeInput = document.querySelector('#fuel-type');
    const quantityInput = document.querySelector('#quantity');
    const priceInput = document.querySelector('#price');

    // Get the values of the input elements
    const fuelType = fuelTypeInput.value;
    const quantity = quantityInput.value;
    const price = priceInput.value;

    // Validate input values
    if (!fuelType || !quantity || !price) {
      alert('Please enter a value for all fields.');
      return;
    }

    // Send POST request to /add-fuel-inventory with fuelType, quantity, and price in the request body
    fetch('/add-fuel-inventory', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ fuelType, quantity, price })
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        alert('Fuel inventory data added successfully.');
      })
      .catch(error => {
        console.error(error);
        alert('An error occurred. Please try again later.');
      });
  });
});