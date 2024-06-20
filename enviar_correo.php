<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Obtener los datos del formulario y sanitizarlos
        $nombre = htmlspecialchars(trim($_POST['nombre']));
        $apellido = htmlspecialchars(trim($_POST['apellido']));
        $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
        $mensaje = htmlspecialchars(trim($_POST['msg']));
        
        // Obtener el asunto y verificar si está vacío
        $asunto = htmlspecialchars(trim($_POST['asunto']));
        if (empty($asunto)) {
            $asunto = "Nuevo mensaje desde el formulario de contacto"; // Asunto predeterminado
        }
    
        // Email de destino
        $para = 'pescaidea.dg@gmail.com';
    
        // Contenido del email
        $contenido = "Nombre: $nombre $apellido\n";
        $contenido .= "Email: $email\n\n";
        $contenido .= "Mensaje:\n$mensaje";
    
        // Cabeceras del email
        $cabeceras = "From: $email\r\n";
        $cabeceras .= "Reply-To: $email\r\n";
        $cabeceras .= "X-Mailer: PHP/" . phpversion();
    
        // Enviar el email
        if (mail($para, $asunto, $contenido, $cabeceras)) {
            // Éxito
            echo '<script>alert("¡Mensaje enviado correctamente!"); window.location.href = "gracias.html";</script>';
        } else {
            // Error
            echo '<script>alert("Hubo un problema al enviar el mensaje. Por favor, inténtalo de nuevo más tarde."); window.history.back();</script>';
        }
    } else {
        // Si el acceso no es a través de POST, redirigir a la página del formulario
        header('Location: index.html');
        exit();
    }
?>