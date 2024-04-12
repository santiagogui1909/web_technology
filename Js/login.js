
// Obtener referencia al formulario
const loginForm = document.getElementById('loginForm');

document.addEventListener('DOMContentLoaded', function () {
    const dataUsers = [{
        nombre: 'Administrador',
        nombreUsuario: 'Admin123',
        contraseña: '123456'
    }, {
        nombre: 'Pedro Guzman',
        nombreUsuario: 'Cliente1',
        contraseña: '123456-'
    }];

    // Almacenar datos del usuario en localStorage
    localStorage.setItem('usuarios', JSON.stringify(dataUsers));
});

// Agregar evento 'submit' al formulario
loginForm.addEventListener('submit', function (event) {
    // Evitar el envío predeterminado del formulario
    event.preventDefault();

    // Obtener los valores del formulario
    let tipo = loginForm.elements['tipo'].value;

    if (tipo == 1) {
        let userName = loginForm.elements['userName'].value;
        let password = loginForm.elements['password'].value;

        // Llamar a la función iniciarSesion con los datos del formulario
        iniciarSesion(userName, password);

    } else {
        let nombre = loginForm.elements['nombre'].value;
        let userName = loginForm.elements['userName'].value;
        let password = loginForm.elements['password'].value;
        let confirmpassword = loginForm.elements['confirmpassword'].value;

        if (password !== confirmpassword) {
            Swal.fire("¡Las contraseñas no coinciden!");
        } else {
            // Llamar a la función crearUsuario con los datos del formulario
            crearUsuario(nombre,userName,password)
        }
    }
});

function iniciarSesion(userName, password) {

    let datosUsuarios = localStorage.getItem('usuarios');

    // Verificar si hay datos almacenados
    if (datosUsuarios) {
        // Convertir los datos de cadena JSON a objeto JavaScript
        const usuarios = JSON.parse(datosUsuarios);

        // Iterar sobre cada usuario y mostrar sus propiedades
        let result = usuarios.filter(function (userData) {
            return userData.nombreUsuario === userName;
        })

        if (result.length == 0) {
            Swal.fire("¡Usuario no existe!");
        } else if (result[0].nombreUsuario == userName && result[0].contraseña == password) {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Bienvenido " + userName,
                showConfirmButton: false,
                timer: 1500
            });

            localStorage.setItem('loginUser', JSON.stringify(result[0].nombreUsuario));

            setTimeout(function () {
                window.location.assign('inicio.html');
            }, 1500)

        } else {
            Swal.fire("¡Usuario o contraseña incorrecta!");
        }

    } else {
        console.log('No hay datos de usuarios almacenados en localStorage.');
    }
}

function crearUsuario(nombre, username, password) {

    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    let newUser = [{
        nombre: nombre,
        nombreUsuario: username,
        contraseña: password
    }]

    // Agregar el nuevo usuario al arreglo
    usuarios.push(newUser);

    // Guardar el arreglo actualizado en el localStorage
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    Swal.fire({
        position: "center",
        icon: "success",
        title: "Usuario creado correctamente " + username,
        showConfirmButton: false,
        timer: 1500
    });

    setTimeout(function () {
        window.location.assign('index.html');
    }, 1500)
}