<?php


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  
  $fuelType = $_POST['fuel-type'];
  $quantity = $_POST['quantity'];
  $price = $_POST['price'];
  $paymentMethod = $_POST['payment-method'];

 
  $host = 'localhost';
  $user = 'root';
  $password = '';
  $dbname = 'ppms';

  $conn = mysqli_connect($host, $user, $password, $dbname);

  if (!$conn) {
    die('Could not connect: ' . mysqli_error());
  }

  $query = "INSERT INTO sales (fuel_type,  quantity, price, payment_method) VALUES ('$fuelType',  '$quantity', '$price', '$paymentMethod')";

  if (mysqli_query($conn, $query)) {
    
    header('Location: index.html');
  } else {
    echo "Error: " . $query . "<br>" . mysqli_error($conn);
  }

  mysqli_close($conn);
}

?>
