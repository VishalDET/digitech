<?php
$cf_name = $_POST['name'];
$cf_email = $_POST['email'];
$cf_mob = $_POST['phone'];
$cf_message = $_POST['message'];

$subject = 'Message from a Digital Edge Technology site visitor ' . $cf_name;

$body_message = 'From: ' . $cf_name . "\n";
$body_message .= 'E-mail: ' . $cf_email . "\n";
$body_message .= 'Contact: ' . $cf_mob . "\n";
$body_message .= 'Message: ' . $cf_message;

$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type: text/html; charset=iso-8859-1" . "\r\n";
$headers .= 'From: ' . $cf_email . "\r\n";
$headers .= 'Reply-To: ' . $cf_email . "\r\n";

//$mail_status = mail($mail_to, $subject, $body_message, $headers);

if (
    empty($cf_name) ||
    empty($cf_email) ||
    empty($cf_mob) ||
    empty($cf_message)
) {
    header('location:https://digitaledgetech.in/contact.php?error');
    //$msg =
        //'Something went wrong, try refreshing and submitting the form again.';
    //echo '<div id="error" class="alert alert-danger wow fadeInUp" role="alert">' .
        //$msg .
        //'</div>';
} else {
    $mail_to = 'vishal@digitaledgetech.in';
    if (mail($mail_to, $subject, $body_message, $headers)) {
		header('location:https://digitaledgetech.in/contact.php?success');
        //$msg =
            //'Your message was sent successfully! We will be in touch as soon as we can.';
        //echo '<div id="success" class="alert alert-success wow fadeInUp" role="alert">' .
            //$msg .
            //'</div>';
    }
}
?>

