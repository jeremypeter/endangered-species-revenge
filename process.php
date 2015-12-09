<?php
    $to = "kate@thepondsedge.com"; 
    $from = $_POST['email'];
    $first_name = $_POST ['first_name'];
    $$last_name = $_POST ['last_name'];
    $headers = "From: $from"; 
    $subject = "You have a message sent from your site"; 
    $fields = array(); 
    $fields["firstName"] = $first_name;
    $fields["lastName"] = $last_name; 
    $fields["email"] = $from;
    $body = "Here is what was sent:\n\n";
        foreach($fields as $a => $b){   $body .= sprintf("%20s: %s\n",$b,$_POST[$a]); }
    // $send = mail($to, $subject, $body, $headers);
        echo $body, $to, $from, $last_name, $first_name;
?>