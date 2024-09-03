//  textareas
const inputText = document.querySelector('.input-text');
const outputText = document.querySelector('.output-text');


// encriptar texto

function encriptarButton() {
    const textoEncriptado = encriptar(inputText.value);
    outputText.value = textoEncriptado;
    inputText.value = '';
}


function encriptar(texto) {
    texto = texto.toLowerCase();
    let matriz = [["e", "entra"], ["a", "aply"], ["i", "int"], ["o", "ogta"], ["u", "uialo"]];
    //let matriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    for (let i = 0; i < matriz.length; i++) {
        texto = texto.replaceAll(matriz[i][0], matriz[i][1]);
    }
    return texto
}


// desencriptar texto

function desencriptarButton() {
    const button = desencriptar(outputText.value);
    inputText.value = button;
    outputText.value = '';
}

function desencriptar(texto) {
    let matriz = [["e", "entra"], ["a", "aply"], ["i", "intrs"], ["o", "ogtja"], ["u", "uialo"]];
    texto.toLowerCase();

    for (let i = 0; i < matriz.length; i++) {
        texto = texto.replaceAll(matriz[i][1], matriz[i][0]);
        
    }
    return texto
}

// copiar texto encriptado

function copiar() {
    if (outputText.value) {
        navigator.clipboard.writeText(outputText.value)
        alert('Copiado correctamente a tu clipboard!');
    } else {
        alert("No hay ningun texto para copiar");
    }

}
