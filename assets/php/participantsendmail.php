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

$no_of_participants = $_POST['No_of_participants'];
$email= $_POST['email'];
$contactno= $_POST['contactno'];
$city= $_POST['city'];

$single= $_POST['single1'];
$married= $_POST['married1'];
$youth= $_POST['youth1'];

$friBkft= $_POST['friBkft1'];
$friLnh= $_POST['friLnh1'];
$friDnr= $_POST['friDnr1'];
$satBkft= $_POST['satBkft1'];
$satLnh= $_POST['satLnh1'];
$foodNote1= $_POST['foodNote1'];

$total= $_POST['gtotal'];

$message =nl2br("<b><u> Participants with accommodation details : </u></b>\r\n No. of participants : ". $no_of_participants . "\r\n", false);

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
$message .= " Special meal instruction : " . $foodNote1;
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
        $phpmailer->addAddress('wcchscreg@gmail.com');
        $phpmailer->addAddress($email);

        // Recipient's email

        // Content
        $phpmailer->isHTML(true);
        $phpmailer->Subject = 'Participants form';
        $phpmailer->Body = $message;
        $phpmailer->send();
       
        header("Location:../../thankyou.html");
    } catch (Exception $e) {
        echo 'Email could not be sent. Error: ' . $phpmailer->ErrorInfo;
        

    }

}
?>
