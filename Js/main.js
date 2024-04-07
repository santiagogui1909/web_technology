
document.addEventListener('DOMContentLoaded', function() {

    let sesionData = localStorage.getItem('loginUser');

    if(sesionData == null) {
        window.location.assign('index.html');
    }

});