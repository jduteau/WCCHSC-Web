<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';
require 'PHPMailer/src/Exception.php';


$name = $_POST['name1'];
$assistantname = $_POST['assistantname1'];
$company= $_POST['company1'];
$email= $_POST['email1'];
$contactno= $_POST['contactno1'];
$check3= $_POST['check3'];
if($check3=="Yes")
{
    $check3="Yes";
}else{
    $check3="No";
}
$check4= $_POST['check4'];
if($check4=="Yes")
{
    $check4="Yes";
}else{
    $check4="No";
}

$basicQty = $_POST['basicQty1'];
$additionalQty= $_POST['additionalQty1'];
$repQty= $_POST['repQty1'];

$accTotal= $_POST['accTotal1'];

$friBkft= $_POST['friBkft1'];
$friLnh= $_POST['friLnh1'];
$friDnr= $_POST['friDnr1'];
$satBkft= $_POST['satBkft1'];
$satLnh= $_POST['satLnh1'];
$foodNote4= $_POST['foodNote4'];

$total= $_POST['gtotal1'];

$message =nl2br("<b><u> Vendor's Details : </u></b>\r\n\r\n<b><u> Basic Details : </u></b>\r\n Name : ". $name . "\r\n Assistant name : " . $assistantname . "\r\n Company name : " . $company . "\r\n Email : " . $email . "\r\n Contact no. : " . $contactno . "\r\n Electrical access required : " . $check3 . "\r\n Wall preferred : " . $check4 . "\r\n\r\n<b><u> Counter's Details : </u></b>\r\n Basic (1 table/2 reps) - Early : " . $basicQty . "\r\n Additional Table - Early : " . $additionalQty . "\r\n Additional Rep - Early : " . $repQty . "\r\n\r\n<b><u> Accommodation Detail : </u></b>\r\n Accommodation charge : " . $accTotal . "\r\n\r\n<b><u> Meals Detail : </u></b>\r\n Friday breakfast : " . $friBkft . "\r\n Friday lunch : " . $friLnh . "\r\n Friday supper : " . $friDnr . "\r\n Saturday breakfast : " . $satBkft . "\r\n Saturday lunch : " . $satLnh . "\r\n Special meal instruction : " . $foodNote4 . "\r\n\r\n <b>Total due - Please Remit ASAP : " . $total . "</b>", false);

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
    $phpmailer->Subject = 'Vendor + Accommodation registration form';
    $phpmailer->Body = $message;
    $phpmailer->send();
    header("Location:../../thankyou.html");
} catch (Exception $e) {

    echo 'Email could not be sent. Error: ' . $phpmailer->ErrorInfo;

}
}

?>


