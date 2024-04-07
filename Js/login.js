
// Obtener referencia al formulario
const loginForm = document.getElementById('loginForm');

document.addEventListener('DOMContentLoaded', function() {
    const dataUsers = [{
        nombreUsuario: 'Admin123',
        contraseña: '123456'
    },{
        nombreUsuario: 'Cliente19',
        contraseña: '123456-'
    }];

    // Almacenar datos del usuario en localStorage
    localStorage.setItem('usuarios', JSON.stringify(dataUsers));
});

// Agregar evento 'submit' al formulario
loginForm.addEventListener('submit', function(event) {
    // Evitar el envío predeterminado del formulario
    event.preventDefault();
    
    // Obtener los valores del formulario
    let userName = loginForm.elements['userName'].value;
    let password = loginForm.elements['password'].value;
    
    // Llamar a la función iniciarSesion con los datos del formulario
    iniciarSesion(userName, password);
});

function iniciarSesion(userName,password){

    let datosUsuarios = localStorage.getItem('usuarios');

    // Verificar si hay datos almacenados
    if (datosUsuarios) {
        // Convertir los datos de cadena JSON a objeto JavaScript
        const usuarios = JSON.parse(datosUsuarios);
        
        // Iterar sobre cada usuario y mostrar sus propiedades
        let result = usuarios.filter(function(userData) {
            return userData.nombreUsuario === userName;
        })

        if(result.length == 0) {
            Swal.fire("¡Usuario no existe!");
        } else if (result[0].nombreUsuario == userName && result[0].contraseña == password) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Bienvenido " + userName,
                showConfirmButton: false,
                timer: 1500
            });

            localStorage.setItem('loginUser', JSON.stringify(result[0].nombreUsuario));

            setTimeout(function() {
                window.location.assign('inicio.html');
            },1500)

        } else {
            Swal.fire("¡Usuario o contraseña incorrecta!");
        }

    } else {
        console.log('No hay datos de usuarios almacenados en localStorage.');
    }
}
























// // Utiliza la función fetch() para obtener el archivo JSON
// fetch('../db.json')
//   .then(response => {
//     // Verifica si la solicitud fue exitosa
//     if (!response.ok) {
//       throw new Error('No se pudo cargar el archivo JSON');
//     }
//     // Analiza el contenido JSON
//     return response.json();
//   })
//   .then(data => {
//     // Aquí puedes acceder a los datos del archivo JSON
//     console.log('Nombre:', data.nombre);
//     console.log('Apellido:', data.apellido);
//     console.log('Edad:', data.edad);
//     console.log('Ciudad:', data.ciudad);
//   })
//   .catch(error => {
//     // Captura cualquier error que ocurra durante el proceso
//     console.error('Error:', error);
//   });

