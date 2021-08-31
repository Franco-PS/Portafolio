<?php
    $destino="perez_salazarf@hotmail.com";
    $nombre= "$_Post["nombre"]";
    $correo= "$_Post["correo"]";
    $asunto= "$_Post["asunto"]";
    $mensaje= "$_Post["mensaje"]";
    $contenido= "nombre".$nombre . "\ncorreo". $correo . "\nasunto" . $asunto . "\nmensaje" .  $mensaje;
    mail($destino,"asunto",$contenido);
    header("Location:index.html");
?>