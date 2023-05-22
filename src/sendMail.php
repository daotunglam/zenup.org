<?php

switch($_SERVER['REQUEST_METHOD']){
    case("OPTIONS"): //Allow preflighting to take place.
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Allow-Headers: content-type");
        exit;
    case("POST"): //Send the email;
        header("Access-Control-Allow-Origin: *");

        $json = file_get_contents('php://input');

        $params = json_decode($json);

        $firstName = $params->firstName;
        $lastName = $params->lastName;
        $phone = $params->phone;
        $email = $params->email;
        $message = $params->message;

        $recipient = 'hello@zenup.org'; //my email address
        $subject = "Contact from $firstName $lastName <$email> <tel $phone>";
        $headers = "From:  $email via zenup.org";
        

        // Construct the email body
        $body .= "Name: $firstName $lastName\r\n";
        $body .= "Phone: $phone\r\n";
        $body .= "Email: $email\r\n";
        $body .= "Message:\r\n$message\r\n";

        mail($recipient, $subject, $body, $headers);
        break;
    default: //Reject any non POST or OPTIONS requests.
        header("Allow: POST", true, 405);
        exit;
}