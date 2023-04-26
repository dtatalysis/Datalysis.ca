<?php
  // Replace with your receiving email address
  $to_email = "datalysiscanadainc@gmail.com";

  if(isset($_POST['email'])) {
    // Sanitize email input
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);

    // Validate email
    if(filter_var($email, FILTER_VALIDATE_EMAIL)) {
      // Email headers
      $headers = "From: $email" . "\r\n" .
                  "Reply-To: $email" . "\r\n" .
                  "X-Mailer: PHP/" . phpversion();

      // Email subject
      $subject = "New email subscription";

      // Email message
      $message = "A new visitor has subscribed to your website's email list.\n\n" .
                  "Email: $email";

      // Send email
      if(mail($to_email, $subject, $message, $headers)) {
        echo "success";
      } else {
        echo "error";
      }
    } else {
      echo "error"; 
    }
  }
?>

