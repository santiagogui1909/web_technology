// Comentarios
let contenedorComentarios = document.querySelector(".comentarios");

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
