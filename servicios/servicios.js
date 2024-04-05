/**Json servicios */
let servicios = [
    {
        "id": 1,
        "nombre": "DataManagement",
        "descripcion": "Aplicación con proposito de análisis de datos y graficación de datos.",
        "precio": 110000
    },
    {
        "id": 2,
        "nombre": "MarketSys",
        "descripcion": "Aplicación para gestión de productos de supermercados y tiendas.",
        "precio": 260000
    },
    {
        "id": 3,
        "nombre": "AdminData",
        "descripcion": "Aplicación con proposito de análisis de datos y graficación de datos.",
        "precio": 250000
    },
    {
        "id": 4,
        "nombre": "SuperMarkelo",
        "descripcion": "Aplicación para gestión de productos de supermercados y tiendas.",
        "precio": 150000
    },
    {
        "id": 5,
        "nombre": "AgendaBarber",
        "descripcion": "Software para gestión de agendamientos de citas para una barbería o peluquería",
        "precio": 350000
    },
    {
        "id": 6,
        "nombre": "HairCuftware",
        "descripcion": "Software para gestión de agendamientos de citas para una barbería o peluquería",
        "precio": 50000
    }
]
llenarServicios();

function llenarServicios(data = null) {
    if(localStorage.getItem("servicios") == null || localStorage.getItem("servicios").length == 0){
        localStorage.setItem("servicios",JSON.stringify( servicios));
    }
    let serviciosLocalStorage;
    if (data == null) {
    serviciosLocalStorage = JSON.parse(localStorage.getItem("servicios"));
    }else{
        serviciosLocalStorage = data;
    }
    rowServiciosDOM = document.getElementById("rowServicios");
    rowServiciosDOM.innerHTML = null;
    serviciosLocalStorage.forEach((servicio, index) => {
        console.log(`ID: ${servicio.id}, Nombre: ${servicio.nombre}, Descripción: ${servicio.descripcion}, Precio: ${servicio.precio}`);
        console.log(rowServiciosDOM);
        rowServiciosDOM.innerHTML +=
            `<div class="col-md-3 ${((index) % 3 == 0 ) ? "" : "offset-md-1"} bg-white p-3 border-0094c6 mt-3 card-servicio">`+
            `<div class="col-md-12 mb-2 border-0094c6">`+
            `<img src="../Assets/Images/dashboard.png" alt="" srcset="" width="256" height="256">`+
            `</div>`+
            `<center>`+
            `<h3 class="text-0094c6">$${new Intl.NumberFormat().format(servicio.precio)}</h3>`+
            `<p>${servicio.descripcion}</p>`+
            `<h4>${servicio.nombre}</h4>`+
            `</center>`+
            `</div>`+
            `</div>`+
            `</div>`;
    });
}

function ordenarDatosAlfabeticamente(){
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