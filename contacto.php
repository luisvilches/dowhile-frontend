<?php
	$nombre = $_POST['nombre'];
	$mail = $_POST['correo'];
	$telefono = $_POST['telefono'];
	$asunto = $_POST['asunto'];
	$msg = $_POST['mensaje'];
	$header = 'From: ' . $mail . " \r\n";
	$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
	$header .= "Mime-Version: 1.0 \r\n";
	$header .= "Content-Type: text/plain";
	$mensaje = "Este mensaje fue enviado por " . $nombre ." \r\n";
	$mensaje .= "Su e-mail es: " . $mail . " \r\n";
	$mensaje .= "Su Telefono es: " . $telefono . " \r\n";
	$mensaje .= "". " \r\n";
	$mensaje .= "Mensaje: " . $msg . " \r\n";
	$mensaje .= "". " \r\n";
	$mensaje .= "Enviado el " . date('d/m/Y', time());
	$para = 'lvilches21@gmail.com';
	$asunto = $asunto;
	mail($para, $asunto, utf8_decode($mensaje), $header);
	echo 'success'
?>
