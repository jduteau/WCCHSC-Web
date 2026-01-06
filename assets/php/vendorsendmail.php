<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';
require 'PHPMailer/src/Exception.php';


$name = $_POST['name'];
$assistantname = $_POST['assistantname'];
$company= $_POST['company'];
$email= $_POST['email'];
$contactno= $_POST['contactno'];
$check1= $_POST['check1'];
if($check1=="Yes")
{
    $check1="Yes";
}else{
    $check1="No";
}
$check2= $_POST['check2'];
if($check2=="Yes")
{
    $check2="Yes";
}else{
    $check2="No";
}

$basicQty = $_POST['basicQty'];
$additionalQty= $_POST['additionalQty'];
$repQty= $_POST['repQty'];

$friBkft= $_POST['friBkft'];
$friLnh= $_POST['friLnh'];
$friDnr= $_POST['friDnr'];
$satBkft= $_POST['satBkft'];
$satLnh= $_POST['satLnh'];
$foodNote3= $_POST['foodNote3'];

$total= $_POST['gtotal'];

$message =nl2br("<b><u> Vendor's Details : </u></b>\r\n\r\n<b><u> Basic Details : </u></b>\r\n Name : ". $name . "\r\n Assistant name : " . $assistantname . "\r\n Company name : " . $company . "\r\n Email : " . $email . "\r\n Contact no. : " . $contactno . "\r\n Electrical access required : " . $check1 . "\r\n Wall preferred : " . $check2 . "\r\n\r\n<b><u> Counter's Details : </u></b>\r\n Basic (1 table/2 reps) - Early : " . $basicQty . "\r\n Additional Table - Early : " . $additionalQty . "\r\n Additional Rep - Early : " . $repQty . "\r\n\r\n<b><u> Meals Detail : </u></b>\r\n Friday breakfast : " . $friBkft . "\r\n Friday lunch : " . $friLnh . "\r\n Friday supper : " . $friDnr . "\r\n Saturday breakfast : " . $satBkft . "\r\n Saturday lunch : " . $satLnh ."\r\n Special meal instruction : " . $foodNote3 . "\r\n\r\n <b>Total due - Please Remit ASAP: " . $total . "</b>", false);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

//get data from form 

try {

    //Server settings

    $phpmailer = new PHPMailer(true);
    $phpmailer->isMail();
    $phpmailer->isHTML(true);
    $phpmailer->CharSet= 'UTF-8';

    //Recipients

    $phpmailer->AddReplyTo($email, $email);
    $phpmailer->addAddress('wcchscvendors@gmail.com'); // Recipient's email
    $phpmailer->addAddress($email);

    // Content

    $phpmailer->isHTML(true);
    $phpmailer->Subject = 'Vendor registration form';
    $phpmailer->Body = $message;
    $phpmailer->send();
    header("Location:../../thankyou.html");
} catch (Exception $e) {

    echo 'Email could not be sent. Error: ' . $phpmailer->ErrorInfo;

}
}

?>


