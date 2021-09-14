<?php
    $destino="@hotmail.com";
    $nombre= "$_POST["nombre"]";
    $correo= "$_POST["correo"]";
    $asunto= "$_POST["asunto"]";
    $mensaje= "$_POST["mensaje"]";
    $contenido= "nombre".$nombre . "\ncorreo". $correo . "\nasunto" . $asunto . "\nmensaje" .  $mensaje;
    mail($destino,$nombre,$contenido);
    header("Location:index.html");
?>