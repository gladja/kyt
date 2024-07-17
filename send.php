<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/Exception.php';

$mail = new PHPMailer(true);
$mail->CharSet = "UTF-8";

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$email = $_POST['email'];
$tel = $_POST['tel'];
$textarea = $_POST['textarea'];
// $file = $_FILES['myfile'];

// Формирование самого письма
$title = "Заголовок письма";
$body = "
<h2>Новое письмо</h2>
<b>Имя:</b> $name<br>
<b>Почта:</b> $email<br><br>
<b>Телефон:</b> $tel<br><br>
<b>Сообщение:</b><br>$textarea 
";

$mail->addAddress('gladkih.alexander@gmail.com');
$mail->Subject = $title;
$mail->Body = $body;
$mail->send();
