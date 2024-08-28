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


function encriptarTexto(texto) {
    //  llaves de encriptacion
    /*const letraE = inputText.replace("e", "enter");
    const letraI = inputText.replace("i", "imes");
    const letraA = inputText.replace("a", "ai");
    const letraO = inputText.replace("o", "ober");
    const letraU = inputText.replace("u", "ufat");*/

}

function encriptarTexto(texto) {
    //  llaves de encriptacion
    const letraE = outputText.replace("enter", "e");
    const letraI = outputText.replace("imes", "i");
    const letraA = outputText.replace("ai", "a");
    const letraO = outputText.replace("ober", "o");
    const letraU = outputText.replace("ufat", "u");
    
    
    }