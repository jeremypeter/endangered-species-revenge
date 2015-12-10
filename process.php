<?php
  $to = "kate@thepondsedge.com"; 
  $email = $_POST['email'];
  $first_name = $_POST['firstName'];
  $last_name = $_POST['lastName'];
  $headers = "From: $from"; 
  $subject = "You have a message sent from your site"; 
  
  $fields = array(); 
  $fields["firstName"] = $first_name;
  $fields["lastName"] = $last_name; 
  $fields["email"] = $from;
  $body = "Here is what was sent:\n\n";

  foreach($fields as $a => $b){   $body .= sprintf("%20s: %s\n",$b,$_POST[$a]); }
  echo $body;
  // $send = mail($to, $subject, $body, $headers);
?>