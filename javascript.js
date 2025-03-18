const Min_Length = 3;
const nombre = document.querySelector("#name");
const avisoNombre = document.querySelector("#aviso");
const form = document.querySelector(".registration-form");
const btn = document.querySelector(".submit-button");
const email = document.querySelector("#email");
const avisoMailText = document.querySelector("#avisoMail")
const password = document.querySelector("#password")
const passwordConfirmation = document.querySelector("#passwordConfirmation")
const avisoPasswordText = document.querySelector("#avisoPassword")

const avisoPasswordLetra = document.querySelector("#avisoPasswordLetra")
const avisoPasswordNumero = document.querySelector("#avisoPasswordNumero")
const avisoPasswordLongitud = document.querySelector("#avisoPasswordLongitud")

const avisoGeneral = document.querySelector(".avisoGeneral")

let regex = /^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

// Nombre
nombre.addEventListener("input", () => {
    if (nombre.value.length < Min_Length) {
        checkMinLength();
        avisoNombre.id = "aviso"


    } else {
        avisoNombre.id = "aviso1"
    }
});

// Email
email.addEventListener("input", () => {
    if (checkEmail(email) == false) {
        avisoMail()
        avisoMailText.id = "avisoMail1";
    }
    else {
        avisoMailText.id = "avisoMail";

    }
})

// Contraseña

password.addEventListener("input", () => {
    let valor = password.value;
    let tieneLetra = /[a-zA-Z]/.test(valor);
    let tieneNumero = /\d/.test(valor);
    let tieneLongitudMinima = valor.length >= 8;

    avisoPassword(tieneLetra, tieneNumero, tieneLongitudMinima)

})

function avisoPassword(tieneLetra, tieneNumero, tieneLongitudMinima) {
    if (tieneLetra) {
        avisoPasswordLetra.innerHTML = "Tiene al menos una letra✅"
        avisoPasswordLetra.id = "avisoPasswordLetra1"
    }
    else {
        avisoPasswordLetra.innerHTML = "Tiene al menos una letra ❌"
        avisoPasswordLetra.id = "avisoPasswordLetra"
    }
    if (tieneNumero) {
        avisoPasswordNumero.innerHTML = "Tiene al menos un numero ✅"
        avisoPasswordNumero.id = "avisoPasswordNumero1"
    } else {
        avisoPasswordNumero.innerHTML = "Tiene al menos un numero ❌"
        avisoPasswordNumero.id = "avisoPasswordNumero"
    }
    if (tieneLongitudMinima) {
        avisoPasswordLongitud.innerHTML = "La contraseña tiene al menos 8 caracteres ✅"
        avisoPasswordLongitud.id = "avisoPasswordLongitud1";
    }
    else {
        avisoPasswordLongitud.innerHTML = "La contraseña tiene al menos 8 caracteres ❌"
        avisoPasswordLongitud.id = "avisoPasswordLongitud"
    }
}

// Confirmar contraseña

passwordConfirmation.addEventListener("input", () => {
    if (passwordConfirmation.value != password.value) {
        avisoPasswordConfirmacion();
        avisoPasswordText.id = "avisoPassword1"
    }
    else {
        avisoPasswordText.id = "avisoPassword"
        avisoPasswordText.innerHTML = "La contraseña es la misma"

    }

})

form.addEventListener("submit", (event) => {
    if (nombre.value.length < Min_Length || checkEmail(email) == false || regex.test(password.value) == false || passwordConfirmation.value != password.value) {
        event.preventDefault();
        avisoGeneral.innerHTML = "¡Ingrese los campos de manera correcta!"
        anime({
            targets: avisoGeneral,
            opacity: [0, 1], 
            duration: 1000, 
            easing: 'linear' 
        });
        setTimeout(() => {
            anime({
                targets: avisoGeneral,
                opacity: [1, 0], 
                duration: 2000,
                easing: 'linear'
            });
        }, 3000);
        setTimeout(() => {
        avisoGeneral.innerHTML=""
        },5300)
    }
});




function checkEmail(email) {
    return email.value.includes('@');
}
function checkMinLength() {
    const avisoText = "Tiene que tener más de 3 letras";
    avisoNombre.innerHTML = avisoText;
}

function avisoMail() {
    const avisoTextEmail = "Tiene que ser un mail valido";
    avisoMailText.innerHTML = avisoTextEmail;
}

function avisoPasswordConfirmacion() {
    const avisoTextPassword = "La contraseña no es la misma";
    avisoPasswordText.innerHTML = avisoTextPassword;
}

function clearAviso(msg) {
    msg.innerHTML = "";
}


// Animaciones

