fetch('/get-sales-data.php')
  .then(response => response.json())
  .then(data => {
    // Get the sales data table
    const table = document.querySelector('table');

    // Loop through the sales data and add a row for each sale
    data.forEach(sale => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${sale.id}</td>
        <td>${sale.fuel_type}</td>
        <td>${sale.quantity}</td>
        <td>${sale.price}</td>
        <td>${sale.payment_method}</td>
      `;
      table.appendChild(row);
    });
  });
