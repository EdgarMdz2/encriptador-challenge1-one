let textoUsuario = document.getElementById('textoUsuario'); //Asignando el texto ingresado a una variable
let botonEncriptar = document.getElementById('btnEncriptar'); //Asignando botón a una variable
let botonDesencriptar = document.getElementById('btnDesencriptar'); //Asignando botón a una variable

botonEncriptar.onclick = encriptar; //Al hacer click, ejecutar función encriptar
botonDesencriptar.onclick = desencriptar; //Al hacer click, ejecutar función desencriptar

function convertirArray() {
    let valorTextoUsuario = textoUsuario.value; //Variable toma el valor (string) del textarea
    let arrayTexto = valorTextoUsuario.split(''); //Variable que almacena el string convertido en array
    return arrayTexto;
}

function cambioPantalla() { // ocultar .caja-preresultado y activar display block de <p>
    document.getElementById('textoResultado').style = 'display: block';
    document.getElementById('cajaPreresultado').style = 'display: none';
}

function reestablecerPantalla() { // mostrar .caja-preresultado y activar display none de <p>
    document.getElementById('textoResultado').style = 'display: none';
    document.getElementById('cajaPreresultado').style = 'display: block';
}

function evaluarAcentos(texto){ //Evalúa la presencia de acentos en el texto
    const regex = /[A-Z\u00C0-\u00FF]/;
    if (regex.test(texto)) {
        return true;
    } else {
        return false;
    }
}

function encriptar (event) {
    event.preventDefault(); //Evita que la página se recargue
    let arrayTexto = convertirArray(); //Declarando variable con el valor que retorna la función "convertirArray"
    if (arrayTexto == '' || evaluarAcentos(textoUsuario.value)) {
        alert('Ingresa un texto para encriptar. Solo letras minúsculas y sin acentos.');
        reestablecerPantalla(); // mostrar .caja-preresultado y activar display none de <p>
    } else {
        for (let i = 0; i < arrayTexto.length; i++) { //Recorriendo array y modificando los valores
            if (arrayTexto[i] == 'a') {
                arrayTexto[i] = 'ai';
            } 
            else if (arrayTexto[i] == 'e') {
                arrayTexto[i] = 'enter';
            } 
            else if (arrayTexto[i] == 'i') {
                arrayTexto[i] = 'imes';
            } 
            else if (arrayTexto[i] == 'o') {
                arrayTexto[i] = 'ober';
            } 
            else if (arrayTexto[i] == 'u') {
                arrayTexto[i] = 'ufat';
            }
        }
        const valorDespuesEncriptado = arrayTexto.join(''); //El array resultante se convierte denuevo a string
        document.getElementById('textoResultado').innerText = valorDespuesEncriptado; //.innerText asigna el valorDepuesEncriptado al elemento "textoResultado"
        cambioPantalla(); // Ocultar .caja-preresultado y activar display block de <p>
    }
}

function desencriptar (event) {
    event.preventDefault();
    let arrayTexto = convertirArray(); //Declarando variable con el valor que retorna la función "convertirArray"
    if (arrayTexto == '' || evaluarAcentos(textoUsuario.value)) {
        alert('Ingresa un texto para desencriptar. Solo letras minúsculas y sin acentos.');
        reestablecerPantalla(); // mostrar .caja-preresultado y activar display none de <p>
    } else {
        for (let i = 0; i < arrayTexto.length; i++) { //Recorriendo array y modificando los valores
            if (arrayTexto[i] == 'a' || arrayTexto[i] == 'e' || arrayTexto[i] == 'i' || arrayTexto[i] == 'o' || arrayTexto[i] == 'u' ) { //Al encontrar una vocal...
                if (arrayTexto[i] == 'a' && arrayTexto[i+1] == 'i') {
                    arrayTexto.splice(i+1,1);
                    console.log(arrayTexto);
                }
                else if (arrayTexto[i] == 'e' && arrayTexto[i+1] == 'n' && arrayTexto[i+2] == 't' && arrayTexto[i+3] == 'e' && arrayTexto[i+4] == 'r') {
                    arrayTexto.splice(i+1,4);
                }
                else if (arrayTexto[i] == 'i' && arrayTexto[i+1] == 'm' && arrayTexto[i+2] == 'e' && arrayTexto[i+3] == 's') {
                    arrayTexto.splice(i+1,3);
                }
                else if (arrayTexto[i] == 'o' && arrayTexto[i+1] == 'b' && arrayTexto[i+2] == 'e' && arrayTexto[i+3] == 'r') {
                    arrayTexto.splice(i+1,3);
                }
                else if (arrayTexto[i] == 'u' && arrayTexto[i+1] == 'f' && arrayTexto[i+2] == 'a' && arrayTexto[i+3] == 't') {
                    arrayTexto.splice(i+1,3);
                }
            } 
        }
        const valorDespuesDesencriptado = arrayTexto.join(''); //El array resultante se convierte denuevo a string
        document.getElementById('textoResultado').innerText = valorDespuesDesencriptado; //.innerText asigna el valorDepuesEncriptado al elemento "textoResultado"
        cambioPantalla(); // Ocultar .caja-preresultado y activar display block de <p>
    }
}