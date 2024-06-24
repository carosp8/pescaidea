<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // Ajusta la ruta según la ubicación de PHPMailer

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = htmlspecialchars($_POST['nombre']);
    $apellido = htmlspecialchars($_POST['apellido']);
    $asunto = htmlspecialchars($_POST['asunto']);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $mensaje = htmlspecialchars($_POST['msg']);

    $mail = new PHPMailer(true);

    try {
        // Configuración del servidor SMTP de Hostinger
        $mail->isSMTP();
        $mail->Host = 'smtp.hostinger.com'; // Cambia según tu proveedor SMTP
        $mail->SMTPAuth = true;
        $mail->Username = 'tu_correo@tudominio.com'; // Tu dirección de correo
        $mail->Password = 'tu_contraseña'; // Tu contraseña de correo
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        // Configuración del correo
        $mail->setFrom($email, "$nombre $apellido");
        $mail->addAddress('pescaidea.dg@gmail.com'); // Dirección de destino
        $mail->Subject = 'Nuevo mensaje desde el formulario';
        $mail->Body = "Nombre: $nombre\nApellido: $apellido\nEmail: $email\nAsunto: $asunto\nMensaje:\n$mensaje";

        // Envío del correo
        $mail->send();
        echo '<script type="text/javascript">';
        echo 'alert("Formulario enviado exitosamente.");';
        echo 'window.location.href = "index.html";';
        echo '</script>';
    } catch (Exception $e) {
        echo '<script type="text/javascript">';
        echo 'alert("Hubo un problema al enviar el formulario. Por favor, inténtalo más tarde.");';
        echo 'window.location.href = "index.html";';
        echo '</script>';
    }
} else {
    header('Location: index.html');
    exit;
}
?>