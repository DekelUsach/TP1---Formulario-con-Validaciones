const Min_Length = 3;
const nombre = document.querySelector("#name");
const avisoNombre = document.querySelector("#aviso");
const form = document.querySelector(".registration-form");
const btn = document.querySelector(".submit-button");
const email = document.querySelector("#email");
const avisoMailText = document.querySelector("#avisoMail")
const password = document.querySelector("#password")
let regex = /^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

// Nombre
nombre.addEventListener("input", () => {
    if (nombre.value.length < Min_Length) {
        checkMinLength();
    } else {
        clearAviso(avisoNombre);
    }
});

// Email
email.addEventListener("input", () => {
    if (checkEmail(email)== false) {
        avisoMail()
    }
    else{
        clearAviso(avisoMailText)

    }
})

// Contraseña

password.addEventListener("input", () =>  {

let result = regex.test(password.value)

console.log(result)

})

form.addEventListener("submit", (event) => {
    if (nombre.value.length < Min_Length || checkEmail(email) == false ) {
        event.preventDefault();
        
    }
});

function checkEmail(email) {
    return email.value.includes('@');
}
function checkMinLength() {
    const avisoText = "Tiene que tener más de 3 letras";
    avisoNombre.innerHTML = avisoText;
}

function avisoMail(){
    const avisoTextEmail = "Tiene que ser un mail valido";
    avisoMailText.innerHTML = avisoTextEmail;
}

function clearAviso(msg) {
    msg.innerHTML = "";
}
