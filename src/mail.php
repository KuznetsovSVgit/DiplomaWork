<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$email = $_POST['user_email'];
$type = $_POST['type_work'];
$theme = $_POST['work_theme'];
$discipline = $_POST['discipline'];
$data = $_POST['date_work'];
$pages = $_POST['number_pages'];
//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'Al1enKenny90@mail.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'a0772163one'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('Al1enKenny90@mail.ru'); // от кого будет уходить письмо?
$mail->addAddress('79102451200@yandex.ru');     // Кому будет уходить письмо 
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заявка с сайта Образовательный центр Умник';
$mail->Body    = '' .$name . ' оставил заявку, его телефон ' .$phone. '<br>Тип работы: ' .$type. '<br>Тема работы: ' .$theme. '<br> Предмет работы: ' .$discipline. '<br> Количество страниц: ' .$pages. '<br> Дата выполнения: ' .$data.  '<br>Почта этого пользователя: ' .$email;
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    header('location: thank-you.html');
}
?>