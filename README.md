<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./Css/normalize.css">
    <link rel="stylesheet" href="./Css/inicio.css">
    <link rel="stylesheet" href="./Css/styleGeneral.css">
    <link rel="stylesheet" href="fontello/css/fontello.css">
    <link rel="icon" href="./Assets/Images/Logo.png">
    <title>Inicio</title>

</head>

<body>
    <section class="headerMenu">
        <img src="./Assets/Images/Logo2.png" alt="logo" title="logo Principal">

        <nav>
            <ul>
                <li><a href="inicio.html">contacto</a></li>
                <li><a href="servicios.html">servicios</a></li>
                <li><a href="">Promociones</a></li>
                <li><a href="comentarios.html">comentarios</a></li>
                <li><a href="">contacto</a></li>
                <li class="subMenu"><span class="icon-user-circle-o" onmousedown="showSubMenu()"></span>
                    <section class="subMenuContainer">
                        <ul>
                            <li><a href="agregarServicio.html">Registrar / Editar Servicio</a></li>
                            <li><a href="FormularioNuevoUsuario.html">Registrar / Editar Usuario</a></li>
                            <li><a onclick="closeSesion()">Cerrar Sesion</a></li>
                        </ul>
                    </section>
                </li>
            </ul>
        </nav>
    </section>
    
    <main class="inicio">
        <div class="contenido">
            <p>tipo de solicitud </p>
            <section name="opcion">
                <option vvalue="uno">Peticion</option>
                <option vvalue="uno">Queje</option>
                <option vvalue="uno">Reclamo</option>
                <option vvalue="uno">Sujerencia</option>

            <a href="#"><button class="boton_servicios">ENVIAR</button></a>

        </div>


    <div class="mb-3">
         <label for="mensaje" class="form-label">observaciones</label>
         <textarea class="form-control"id="mensaje"name="observaciones"rows="3"requiret></textarea>
    </div>









        <div class="imagen">
            <img src="./Assets/Images/imagen_inicio.png">
        </div>

        <div class="contenido2">
           
            <a href="#"><button class="boton_contacto">CONTACTAR</button></a>
        </div>
    </main>

    <script src="./Js/main.js"></script>

</body>
</html>
