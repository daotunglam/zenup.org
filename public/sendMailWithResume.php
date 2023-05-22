<?php

switch ($_SERVER['REQUEST_METHOD']) {
    case ("OPTIONS"): //Allow preflighting to take place.
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Allow-Headers: content-type");
        exit;
    case ("POST"): //Send the email;
        header("Access-Control-Allow-Origin: *");

        $firstName = $_POST['firstName'];
        $lastName = $_POST['lastName'];
        $phone = $_POST['phone'];
        $email = $_POST['email'];
        $message = $_POST['message'];

        $recipient = 'hello@zenup.org'; //my email address
        $subject = "Resume from $firstName $lastName <$email> <tel $phone>";
        $headers = "From: $email via zenup.org";

        // Handle file attachment
        $attachment = null;
        if (isset($_FILES['attachment']) && $_FILES['attachment']['error'] === UPLOAD_ERR_OK) {
            $attachment = $_FILES['attachment']['tmp_name'];
        }

        // Set up email parameters
        $boundary = md5(uniqid());
        $headers .= "\r\nMIME-Version: 1.0\r\n";
        $headers .= "Content-Type: multipart/mixed; boundary=\"" . $boundary . "\"\r\n";
        $headers .= "This is a multi-part message in MIME format.\r\n";

        // Construct the email body
        $body = "--" . $boundary . "\r\n";
        $body .= "Content-Type: text/plain; charset=UTF-8\r\n";
        $body .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
        $body .= "Name: $firstName $lastName\r\n";
        $body .= "Phone: $phone\r\n";
        $body .= "Email: $email\r\n";
        $body .= "Message:\r\n$message\r\n";

        // Add attachment if available
        if ($attachment !== null) {
            $attachmentContent = file_get_contents($attachment);
            $attachmentName = $_FILES['attachment']['name'];
            $attachmentType = $_FILES['attachment']['type'];

            $body .= "--" . $boundary . "\r\n";
            $body .= "Content-Type: " . $attachmentType . "; name=\"" . $attachmentName . "\"\r\n";
            $body .= "Content-Transfer-Encoding: base64\r\n";
            $body .= "Content-Disposition: attachment; filename=\"" . $attachmentName . "\"\r\n\r\n";
            $body .= chunk_split(base64_encode($attachmentContent)) . "\r\n";
            $body .= "--" . $boundary . "--";
        }

        // Send the email
        mail($recipient, $subject, $body, $headers);
        break;
    default: //Reject any non POST or OPTIONS requests.
        header("Allow: POST", true, 405);
        exit;
}
