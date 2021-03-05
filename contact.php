<?php 
    $name=$_POST['name'];

    $email=$_POST['email'];

    $subject=$_POST['subject'];

    $message=$_POST['message'];
    
    if (($name!="")||($email!="")||($message!="")) {   

        $from="From: $name<$email>\r\nReturn-path: $email";

        // Change to your email
        mail("suhaibahmadai@hotmail.com", $subject, $message, $from);  

        echo 'Contact form successfully sent. Thank you, I will get back to you soon!'; 
    }    
?> 