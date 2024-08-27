//  vars
const inputText = document.getElementById('input');
const outputText = document.getElementById('output');
const notFoundMessage = document.getElementById('not-found-msg');

//  buttons
const encriptarButton = document.getElementById('encriptar__btn');
const desencriptarButton = document.getElementById('desencriptar__btn');
const copiarButton = document.getElementById('copiar__btn');

//  agregar la funcion a los buttons
encriptarButton.addEventListener('click', encriptarTexto(inputText.value));
desencriptarButton.addEventListener('click', desencriptarTexto(inputText.value));

//  desactivar output hasta que sea necesario (o activar)
outputText.style.display = "none";
copiarButton.style.display = "none";


// function encriptar texto

function encriptarTexto(texto) {
//  llaves de encriptacion
const letraE = "enter";
const letraI = "imes";
const letraA = "ai";
const letraO = "ober";
const letraU = "ufat";




}

