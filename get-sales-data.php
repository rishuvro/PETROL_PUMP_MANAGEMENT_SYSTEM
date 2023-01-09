<?php

// Connect to the database
$host = 'localhost';
$user = 'root';
$password = '';
$dbname = 'ppms';

$conn = mysqli_connect($host, $user, $password, $dbname);

if (!$conn) {
  die('Could not connect: ' . mysqli_error());
}

// Retrieve the sales data from the database
$query = 'SELECT * FROM sales';
$result = mysqli_query($conn, $query);

if (!$result) {
  die('Query failed: ' . mysqli_error($conn));
}

// Create an array to store the sales data
$salesData = [];

// Loop through the result set and add each row to the array
while ($row = mysqli_fetch_assoc($result)) {
  $salesData[] = $row;
}

// Return the sales data as a JSON object
echo json_encode($salesData);

// Close the connection
mysqli_close($conn);

?>
