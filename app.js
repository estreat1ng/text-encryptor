const textArea = document.querySelector(".content__input");
const mensaje = document.querySelector(".texto-modificado");
const copyButton = document.querySelector('.copiar');

/*    
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

function botonEncriptar(){ 
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
    }
    return stringEncriptada;
}

function botonDesencriptar(){ 
    const textoDesencriptado = desencriptar(textArea.value);
    mensaje.value = textoDesencriptado;
    textArea.value = "";
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["enter", "e"], ["imes", "i"], ["ai", "a"], ["ober", "o"], ["ufat", "u"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
    }
    return stringDesencriptada;
}

function copiarAlPortapapeles() {
    mensaje.select(); 
    mensaje.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(mensaje.value)
        .then(() => {
            alert('Texto copiado con éxito');
        })
        .catch(err => {
            alert('Error al copiar el texto: ' + err);
        });
}
function mostrarMensajeExito() {
    const mensajeExito = document.getElementById('mensaje-exito');
    mensajeExito.style.display = 'block';
    setTimeout(() => {
        mensajeExito.style.display = 'none';
    }, 2000);
}

