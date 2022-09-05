let formulario = document.getElementById('formulario-login');

let emailInput = document.getElementById('email-input');

let passInput = document.getElementById('pass-input');

let textoEmail = emailInput.value;

let textoPass = passInput.value;

formulario.addEventListener('submit', function(e) {
    let textoEmail = emailInput.value;
    let textoPass = passInput.value;

    if(textoEmail.length < 1 || textoPass.length < 1) {
        e.preventDefault();
        if(textoEmail.length < 1 && textoPass.length < 1) {
            document.getElementById('alerta-email').innerHTML = "Debes ingresar tu email";
            document.getElementById('alerta-pass').innerHTML = "Debes ingresar tu contraseña";
            document.getElementById('email-input').style.border= "3px solid #FF0000";
            document.getElementById('pass-input').style.border= "3px solid #FF0000";
        } else if(textoEmail.length < 1){
            document.getElementById('alerta-email').innerHTML = "Debes ingresar tu email";
            document.getElementById('alerta-pass').innerHTML = "";
            document.getElementById('email-input').style.border= "3px solid #FF0000";
            document.getElementById('pass-input').style.border= "";
        } else {
            document.getElementById('alerta-pass').innerHTML = "Debes ingresar tu contraseña";
            document.getElementById('alerta-email').innerHTML = "";
            document.getElementById('pass-input').style.border= "3px solid #FF0000";
            document.getElementById('email-input').style.border= "";
        }
    }
    localStorage.setItem('username', textoEmail);
});