document.addEventListener('DOMContentLoaded', () => {
  
  const form = document.querySelector('form');

  
  form.addEventListener('submit', event => {
    
    event.preventDefault();


    const fuelTypeInput = document.querySelector('#fuel-type');
    const quantityInput = document.querySelector('#quantity');
    const priceInput = document.querySelector('#price');

   
    const fuelType = fuelTypeInput.value;
    const quantity = quantityInput.value;
    const price = priceInput.value;

   
    if (!fuelType || !quantity || !price) {
      alert('Please enter a value for all fields.');
      return;
    }

    
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