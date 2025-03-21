const Min_Length = 3;
const nombre = document.querySelector("#name");
const avisoNombre = document.querySelector("#aviso");
const form = document.querySelector(".registration-form");
const email = document.querySelector("#email");
const avisoMailText = document.querySelector("#avisoMail");
const password = document.querySelector("#password");
const passwordConfirmation = document.querySelector("#passwordConfirmation");
const avisoPasswordText = document.querySelector("#avisoPassword");

const avisoPasswordLetra = document.querySelector("#avisoPasswordLetra");
const avisoPasswordNumero = document.querySelector("#avisoPasswordNumero");
const avisoPasswordLongitud = document.querySelector("#avisoPasswordLongitud");

const avisoGeneral = document.querySelector(".avisoGeneral");

let regex = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;

nombre.addEventListener("input", () => {
    if (nombre.value.length < Min_Length) {
        avisoNombre.innerHTML = "Tiene que tener más de 3 letras";
        avisoNombre.id = "aviso";
    } else {
        avisoNombre.innerHTML = "Nombre correcto";
        avisoNombre.id = "aviso1";
    }
});

email.addEventListener("input", () => {
    if (!checkEmail(email)) {
        avisoMailText.innerHTML = "Tiene que ser un mail válido";
        avisoMailText.id = "avisoMail1";
    } else {
        avisoMailText.innerHTML = "Email correcto";
        avisoMailText.id = "avisoMail";
    }
});

password.addEventListener("input", () => {
    let valor = password.value;
    let tieneLetra = /[a-zA-Z]/.test(valor);
    let tieneNumero = /\d/.test(valor);
    let tieneLongitudMinima = valor.length >= 8;
    avisoPasswordFn(tieneLetra, tieneNumero, tieneLongitudMinima);
});

passwordConfirmation.addEventListener("input", () => {
    if (passwordConfirmation.value !== password.value) {
        if(password.value != ""){
            avisoPasswordText.innerHTML = "La contraseña no es la misma";
            avisoPasswordText.id = "avisoPassword1";    
        }
        else{
            avisoPasswordText.id = "avisoPassword1";    
            avisoPasswordText.innerHTML = "Todavia no ha ingresado una contraseña para validar!";
        }
    } else {
        avisoPasswordText.innerHTML = "La contraseña es la misma";
        avisoPasswordText.id = "avisoPassword";
    }
    if(passwordConfirmation.value == ""){
        avisoPasswordText.innerHTML = "";
    }
});

function avisoPasswordFn(tieneLetra, tieneNumero, tieneLongitudMinima) {
    if (tieneLetra) {
        avisoPasswordLetra.innerHTML = "Tiene al menos una letra ✅";
        avisoPasswordLetra.id = "avisoPasswordLetra1";
    } else {
        avisoPasswordLetra.innerHTML = "Tiene al menos una letra ❌";
        avisoPasswordLetra.id = "avisoPasswordLetra";
    }
    if (tieneNumero) {
        avisoPasswordNumero.innerHTML = "Tiene al menos un número ✅";
        avisoPasswordNumero.id = "avisoPasswordNumero1";
    } else {
        avisoPasswordNumero.innerHTML = "Tiene al menos un número ❌";
        avisoPasswordNumero.id = "avisoPasswordNumero";
    }
    if (tieneLongitudMinima) {
        avisoPasswordLongitud.innerHTML = "La contraseña tiene al menos 8 caracteres ✅";
        avisoPasswordLongitud.id = "avisoPasswordLongitud1";
    } else {
        avisoPasswordLongitud.innerHTML = "La contraseña tiene al menos 8 caracteres ❌";
        avisoPasswordLongitud.id = "avisoPasswordLongitud";
    }
}

form.addEventListener("submit", (event) => {
    if (nombre.value.length < Min_Length) {
        avisoNombre.innerHTML = "Tiene que tener más de 3 letras";
        avisoNombre.id = "aviso";
    } else {
        avisoNombre.innerHTML = "Nombre correcto";
        avisoNombre.id = "aviso1";
    }

    if (!checkEmail(email)) {
        avisoMailText.innerHTML = "Tiene que ser un mail válido";
        avisoMailText.id = "avisoMail1";
    } else {
        avisoMailText.innerHTML = "Email correcto";
        avisoMailText.id = "avisoMail";
    }

    let valor = password.value;
    let tieneLetra = /[a-zA-Z]/.test(valor);
    let tieneNumero = /\d/.test(valor);
    let tieneLongitudMinima = valor.length >= 8;
    avisoPasswordFn(tieneLetra, tieneNumero, tieneLongitudMinima);

    if (passwordConfirmation.value !== password.value) {
        avisoPasswordText.innerHTML = "La contraseña no es la misma";
        avisoPasswordText.id = "avisoPassword1";
    } else {
        avisoPasswordText.innerHTML = "La contraseña es la misma";
        avisoPasswordText.id = "avisoPassword";
    }

    if (nombre.value.length < Min_Length || !checkEmail(email) || !regex.test(password.value) || passwordConfirmation.value !== password.value) {
        event.preventDefault();
        avisoGeneral.innerHTML = "¡Ingrese los campos de manera correcta!";
        avisoGeneral.classList = "errorAG"
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
            avisoGeneral.innerHTML = "";
        }, 5300);
    }
    else
    {
        // A pesar de que el event.preventDefault() no debería estar acá porque el formulario se envia, lo puse para que no tire un error y se pueda mostrar el mensaje de exito en la misma pagina. Si el caso no fuese así, no estaría puesto
        event.preventDefault(); 
        avisoGeneral.innerHTML = `Formulario enviado correctamente!`
        avisoGeneral.classList = "correctoAG"
        nombre.value =""
        email.value = ""
        password.value = ""
        passwordConfirmation.value = ""
       avisoMailText.innerHTML = ""
       avisoNombre.innerHTML = ""
       avisoPasswordLetra.innerHTML = ""
       avisoPasswordLongitud.innerHTML = ""
       avisoPasswordNumero.innerHTML=""
       avisoPasswordText.innerHTML= ""

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
            avisoGeneral.innerHTML = "";
        }, 5300);
    }
});

function checkEmail(email) {
    return email.value.includes('@');
}




// Opcionales

// Modo oscuro
document.addEventListener("DOMContentLoaded", () => {
    const botonModo = document.createElement("button");
    botonModo.innerText = "Modo Oscuro";
    botonModo.classList.add("cambiar-tema");
    document.body.appendChild(botonModo);
    
    function aplicarTema(tema) {
        if (tema === "oscuro") {
            document.body.classList.add("modo-oscuro");
            botonModo.innerText = "Modo Claro";
        } else {
            document.body.classList.remove("modo-oscuro");
            botonModo.innerText = "Modo Oscuro";
        }
    }

    const temaGuardado = localStorage.getItem("tema") || "claro";
    aplicarTema(temaGuardado);
    
    botonModo.addEventListener("click", () => {
        const nuevoTema = document.body.classList.contains("modo-oscuro") ? "claro" : "oscuro";
        localStorage.setItem("tema", nuevoTema);
        aplicarTema(nuevoTema);
    });
});

