// Captura de formulario por id

const formLoginEl = document.getElementById("formLogin");

// se agrega evento submit para capturar los datos


//credenciales simuladas

function validarCredenciales(email, password) {
    let emailDB = "usuario@gmail.com";
    let passwordDB = "123456";

    if (email == emailDB && password == passwordDB) {
        $("#respuestaFormulario")
            .removeClass("d-none alert-danger")
            .addClass("alert-success")
            .text("Credenciales correctas");

        setTimeout(function () {
            window.location.href = "./index.html";
        }, 1000);
    } else {
        $("#respuestaFormulario")
            .removeClass("d-none alert-success")
            .addClass("alert-danger")
            .text("Credenciales incorrectas");
    }
}


formLoginEl.addEventListener("submit", function (event) {

    // detenemos evento por defecto del formulario

    event.preventDefault();

    //rescatamos contenidos que ingreso el usuario por el email, para ello capturamos valores ingresados por usuario en inputs

    //Recuperacion mediante jquery
    let email = $('#email').val();
    let password = $('#password').val();

    // let email = document.getElementById("email").value;
    // let password = document.getElementById("password").value;

    validarCredenciales(email, password);

});