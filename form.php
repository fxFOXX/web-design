<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);


    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format";
        exit;
    }


    $to = "windowsp2000@gmail.com";  
    $headers = "From: " . $email . "\r\n" .
               "Reply-To: " . $email . "\r\n" .
               "X-Mailer: PHP/" . phpversion();
    $fullMessage = "Name: " . $name . "\n\n" .
                   "Email: " . $email . "\n\n" .
                   "Subject: " . $subject . "\n\n" .
                   "Message: " . $message;

   
    if (mail($to, $subject, $fullMessage, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Failed to send the message.";
    }
}
?>
