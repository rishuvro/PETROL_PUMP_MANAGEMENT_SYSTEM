<?php


$host = 'localhost';
$user = 'root';
$password = '';
$dbname = 'ppms';

$conn = mysqli_connect($host, $user, $password, $dbname);

if (!$conn) {
  die('Could not connect: ' . mysqli_error());
}

$query = 'SELECT * FROM sales';
$result = mysqli_query($conn, $query);

if (!$result) {
  die('Query failed: ' . mysqli_error($conn));
}


$salesData = [];


while ($row = mysqli_fetch_assoc($result)) {
  $salesData[] = $row;
}


echo json_encode($salesData);


mysqli_close($conn);

?>
