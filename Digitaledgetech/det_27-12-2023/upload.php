<?php


$cd_name = $_POST['candidateName'];
$cd_email = $_POST['candidateEmail'];
$cd_mob = $_POST['candidateNum'];
$target_dir = "uploads/";
    $target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
    $uploadOk = 1;
// $cf_message = $_POST['message'];

$subject = 'Message from a Job Seeker' . $cd_name;

$body_message = 'From: ' . $cd_name . "\n";
$body_message .= 'E-mail: ' . $cd_email . "\n";
$body_message .= 'Contact: ' . $cd_mob;
// $body_message .= 'Message: ' . $cf_message;

$headers = 'From: ' . $cd_email . "\r\n";
$headers .= 'Reply-To: ' . $cd_email . "\r\n";

//$mail_status = mail($mail_to, $subject, $body_message, $headers);

if (
    empty($cd_name) ||
    empty($cd_email) ||
    empty($cd_mob)
) {
    header('location:career.php?error');
    // $msg =
        // 'Something went wrong, try refreshing and submitting the form again.';
    // echo '<div id="error" class="alert alert-danger wow fadeInUp" role="alert">' .
        // $msg .
        // '</div>';
} else {
    //$mail_to = 'swapnil@digitaledgetech.in, swapnildarge65@gmail.com';
    //if (mail($mail_to, $subject, $body_message, $headers)) {
        //header('location:https://digitaledgetech.in/career?success');
        // $msg =
            // 'Your message was sent successfully! We will be in touch as soon as we can.';
        // echo '<div id="success" class="alert alert-success wow fadeInUp" role="alert">' .
            // $msg .
            // '</div>';
    }
}

    
    // $imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));

// Check if image file is a actual image or fake image
if(isset($_POST["submit"])) {
  $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
  if($check !== false) {
    echo "File is an image - " . $check["mime"] . ".";
    $uploadOk = 0;
  } else {
    echo "File is not an image.";
    $uploadOk = 1;
  }
}

// Check if $uploadOk is set to 0 by an error
if ($uploadOk == 0) {

      // Check if file already exists
    if (file_exists($target_file)) {
      echo "Sorry, file already exists.";
      $uploadOk = 0;
    }

    // Check file size
    if ($_FILES["fileToUpload"]["size"] > 500000) {
      echo "Sorry, your file is too large.";
      $uploadOk = 0;
    }

    // Allow certain file formats
    if($imageFileType != "pdf" && $imageFileType != "txt" && $imageFileType != "docx") {
    header('location:https://digitaledgetech.in/career.php?file_format');
    $uploadOk = 0;
}

    // header('location:career.php?error');
// if everything is ok, try to upload file
} else {
  if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file) && mail($mail_to, $subject, $body_message, $headers)) {
    // echo "The file ". htmlspecialchars( basename( $_FILES["fileToUpload"]["name"])). " has been uploaded.";
    header('location:https://digitaledgetech.in/career.php?success');
  } else {
    echo "Sorry, there was an error uploading your file.";
  }
}
