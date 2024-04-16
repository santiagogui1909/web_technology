
let contenedorComentarios = document.querySelector(".comentarios");

// Verifica si ya inicio sesion
document.addEventListener('DOMContentLoaded', function() {

    let sesionData = localStorage.getItem('loginUser');

    if(sesionData == null) {
        window.location.assign('index.html');
    }

});

// Menu 

function showSubMenu() {    

    let subMenuContainer = document.querySelector('.subMenuContainer');

    if (subMenuContainer.style.display === 'none' || subMenuContainer.style.display === '') {
        subMenuContainer.style.display = 'inline-block';
    } else {
        subMenuContainer.style.display = 'none';
    }
}


/**Json servicios */
let servicios = [
    {
        "id": 1,
        "nombre": "DataManagement",
        "descripcion": "Aplicación con proposito de análisis de datos y graficación de datos.",
        "precio": 110000,
        "imagen": "dashboard.png"
    },
    {
        "id": 2,
        "nombre": "MarketSys",
        "descripcion": "Aplicación para gestión de productos de supermercados y tiendas.",
        "precio": 260000,
        "imagen": "dashboard.png"
    },
    {
        "id": 3,
        "nombre": "AdminData",
        "descripcion": "Aplicación con proposito de análisis de datos y graficación de datos.",
        "precio": 250000,
        "imagen": "dashboard.png"
    },
    {
        "id": 4,
        "nombre": "SuperMarkelo",
        "descripcion": "Aplicación para gestión de productos de supermercados y tiendas.",
        "precio": 150000,
        "imagen": "dashboard.png"
    },
    {
        "id": 5,
        "nombre": "AgendaBarber",
        "descripcion": "Software para gestión de agendamientos de citas para una barbería o peluquería",
        "precio": 350000,
        "imagen": "dashboard.png"
    },
    {
        "id": 6,
        "nombre": "HairCuftware",
        "descripcion": "Software para gestión de agendamientos de citas para una barbería o peluquería",
        "precio": 50000,
        "imagen": "dashboard.png"
    }
]

llenarServicios();

function llenarServicios(data = null) {
    if (localStorage.getItem("servicios") == null || localStorage.getItem("servicios").length == 0) {
        localStorage.setItem("servicios", JSON.stringify(servicios));
    }
    let serviciosLocalStorage;
    if (data == null) {
        serviciosLocalStorage = JSON.parse(localStorage.getItem("servicios"));
    } else {
        serviciosLocalStorage = data;
    }
    rowServiciosDOM = document.getElementById("rowServicios");
    rowServiciosDOM.innerHTML = null;
    serviciosLocalStorage.forEach((servicio, index) => {
        console.log(`ID: ${servicio.id}, Nombre: ${servicio.nombre}, Descripción: ${servicio.descripcion}, Precio: ${servicio.precio}`);
        console.log(rowServiciosDOM);
        rowServiciosDOM.innerHTML +=
            `<div class="col-md-3 ${((index) % 3 == 0) ? "" : "offset-md-1"} bg-white p-3 border-0094c6 mt-3 card-servicio">` +
            `<div class="col-md-12 mb-2 border-0094c6">` +
            `<img src="./Assets/Images/${servicio.imagen}" alt="" srcset="" width="256" height="256">` +
            `</div>` +
            `<center>` +
            `<h3 class="text-0094c6">$${new Intl.NumberFormat().format(servicio.precio)}</h3>` +
            `<p title="${servicio.descripcion}">${servicio.descripcion.substring(0, 75)}...</p>` +
            `<h4 title="${servicio.nombre}">${servicio.nombre.substring(0, 20)}${(servicio.nombre.length > 20) ? "...": ""}</h4>` +
            `</center>` +
            `</div>` +
            `</div>` +
            `</div>`;
    });
}

function ordenarDatosAlfabeticamente() {
    let ordenarPor = document.getElementById("ordenarPor").value;
    if (ordenarPor == 0) {
        llenarServicios();
        return;
    }
    const datosOrdenados = (ordenarPor == 2) ? ordenarPorNombre(false) : ordenarPorNombre();
    llenarServicios(datosOrdenados);
}

function ordenarPorNombre(ascendente = true) {
    let serviciosLocalStorage = JSON.parse(localStorage.getItem("servicios"));
    return serviciosLocalStorage.sort((a, b) => {
        const nombreA = a.nombre.toUpperCase();
        const nombreB = b.nombre.toUpperCase();

        let comparacion = 0;
        if (nombreA > nombreB) {
            comparacion = 1;
        } else if (nombreA < nombreB) {
            comparacion = -1;
        }
        return ascendente ? comparacion : comparacion * -1;
    });
}

/**AGREGAR SERVICIO */

function agregarServicio() {
    if (localStorage.getItem("servicios") == null || localStorage.getItem("servicios").length == 0) {
        localStorage.setItem("servicios", JSON.stringify(servicios));
    }
    let nombre = document.getElementById("nombre").value;
    let precio = document.getElementById("precio").value;
    let descripcion = document.getElementById("descripcion").value;
    if(!(validarCampos(nombre, precio, descripcion))) return;
    let servicios = JSON.parse(localStorage.getItem("servicios"));
    servicios.push({
        "nombre": nombre,
        "precio": parseFloat(precio),
        "descripcion": descripcion,
        "imagen": "dashboard.png"
    });
    localStorage.setItem("servicios", JSON.stringify(servicios));
    alert(`Se ha agregado el producto ${nombre}`);
    document.location.href="servicios.html";
}

function validarCampos(nombre, precio, descripcion){
    let valid = true;
    let mensajeError = "";
    if(nombre.length < 3){
        valid = false;
        mensajeError += "- La longitud del nombre debe ser de mínimo 3 caracteres. \r\n";
    }
    if(precio.length == 0){
        valid = false;
        mensajeError += "- Debe asignar un precio al servicio \r\n";
    }
    if(descripcion.length < 20){
        valid = false;
        mensajeError += "- La descripción debe tener una longitud de al menos 10 caracteres. \r\n";
    }
    if(!valid)
    alert(mensajeError);
    return valid;
}

// Comentarios
function capturarComentario(){
    let sesionData = localStorage.getItem('loginUser');
    let mensaje = document.getElementById('mensaje').value;

    let fecha = new Date();

    let cuerpo = `<div class="comentario_3">
        <h3>${sesionData}</h3>
        <h4>${mensaje}</h4>
        <h5>Fecha Comentario ${fecha.getFullYear()}-${fecha.getMonth()}-${fecha.getDay()}</h5>
    </div>`

    contenedorComentarios.innerHTML += cuerpo;
}

// Cerrar Sesion

function closeSesion() {
    localStorage.removeItem("loginUser");
    window.location.assign('index.html');
}