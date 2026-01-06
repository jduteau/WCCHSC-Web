<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';
require 'PHPMailer/src/Exception.php';

$stringArray = $_POST['stringArray'];
$count=1;

//get data from form  

               
$No_of_participants = $_POST['No_of_participants1'];
$email= $_POST['email2'];
$contactno= $_POST['contactno2'];
$city= $_POST['city2'];
                
$single= $_POST['single'];
$married= $_POST['married'];
$youth= $_POST['youth'];

$accTotal= $_POST['accTotal'];

$friBkft= $_POST['friBkft'];
$friLnh= $_POST['friLnh'];
$friDnr= $_POST['friDnr'];
$satBkft= $_POST['satBkft'];
$satLnh= $_POST['satLnh'];
$foodNote2= $_POST['foodNote2'];

$total= $_POST['cgtotal1'];


$message =nl2br("<b><u> Participants with accommodation details : </u></b>\r\n No. of participants : ". $No_of_participants . "\r\n", false);
$message .= "<br>";

foreach ($stringArray as $string) {
    $message .= " Participant #".$count." : " . $string;
    $message .= "<br>";
    $count++;
}

$message .=" Email : " . $email;
$message .= "<br>";
$message .=" Contact No : " . $contactno;
$message .= "<br>";
$message .= " City : " . $city;
$message .= "<br><br>";
$message .= "<b><u> Registration Details : </u></b>";
$message .= "<br>";
$message .= " Single : " . $single;
$message .= "<br>";
$message .= " Married : " . $married;
$message .= "<br>";
$message .= " Youth : " . $youth;
$message .= "<br>";
$message .= " Accommodation charge : " . $accTotal;
$message .= "<br><br>";
$message .= "<b><u> Meals Detail : </u></b>";
$message .= "<br>";
$message .= " Friday breakfast : " . $friBkft;
$message .= "<br>";
$message .= " Friday lunch : " . $friLnh;
$message .= "<br>";
$message .= " Friday supper : " . $friDnr;
$message .= "<br>";
$message .= " Saturday breakfast : " . $satBkft;
$message .= "<br>";
$message .= " Saturday lunch : " . $satLnh;
$message .= "<br>";
$message .= " Special meal instruction : " . $foodNote2;
$message .= "<br><br>";
$message .= " <b>Total due - Please Remit ASAP : " . $total . "</b>";
                
             

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
     
    try {
        //Server settings
        $phpmailer = new PHPMailer(true);
        $phpmailer->isMail();
        $phpmailer->isHTML(true);
        $phpmailer->CharSet= 'UTF-8';
                        
                        
        //$phpmailer->SMTPDebug = 4;

        //Recipients
        $phpmailer->AddReplyTo($email, $email);
        $phpmailer->addAddress('wcchscreg@gmail.com'); // Recipient's email
        $phpmailer->addAddress($email);
                        
        // Content
        $phpmailer->isHTML(true);
        $phpmailer->Subject = 'Participant + Accommodation form';
        $phpmailer->Body = $message;
        $phpmailer->send();
        
        header("Location:../../thankyou.html");
    } catch (Exception $e) {
        echo 'Email could not be sent. Error: ' . $phpmailer->ErrorInfo;
                        
    }
                
}
?>
