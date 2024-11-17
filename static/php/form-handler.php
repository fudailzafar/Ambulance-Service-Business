<?php
// Capture form data
$name = htmlspecialchars($_POST['Name']);
$visitor_email = filter_var($_POST['Email'], FILTER_VALIDATE_EMAIL);
$number = htmlspecialchars($_POST['Number']);
$location = htmlspecialchars($_POST['Location']);
$message = htmlspecialchars($_POST['Message']);

// Validate email
if (!$visitor_email) {
    die("Invalid email address.");
}

// Email details
$email_from = 'khadhijaoffical@gmail.com'; // Use a valid domain email
$email_subject = 'New Form Submission';
$email_body = "User Name: $name\n" .
              "User Email: $visitor_email\n" .
              "User Number: $number\n" .
              "User Location: $location\n" .
              "Message: $message\n";

$to = 'mail4roughuse@gmail.com';
$headers = "From: $email_from \r\n";
$headers .= "Reply-To: $visitor_email \r\n";

// Send email
if (mail($to, $email_subject, $email_body, $headers)) {
    header("Location: contact.html"); // Redirect on success
    exit();
} else {
    echo "Error sending email. Please try again later.";
}
?>
