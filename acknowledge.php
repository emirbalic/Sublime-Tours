<?php
include("index.html");
if(isset($_POST['send'])) {
    $to = 'emirbalic@gmail.com';
    $subject = 'Feedback from SublimeTours';
    $message = 'Name: ' . $_POST['name'] . "r\n\r\n";
    $message = 'Email: ' . $_POST['email'] . "r\n\r\n";
    $message = 'Comments: ' . $_POST['comments'] . "r\n\r\n";

    echo $message;
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=h1h, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <h1>Thank You</h1>
    <p>Your message has been sent.</p>
    <h1>Oops!</h1>
    <p>Sorry, there was a problem sending your message.</p>
</body>
</html>