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

function encriptar () {
    event.preventDefault(); //Evita que la página se recargue
    let arrayTexto = convertirArray(); //Declarando variable con el valor que retorna la función
    for (let i = 0; i < arrayTexto.length; i++) { //Recorriendo array y modificando los valores
        if (arrayTexto[i] == 'a') {
            arrayTexto[i] = 'ai';
        } else if (arrayTexto[i] == 'e') {
            arrayTexto[i] = 'enter';
        } else if (arrayTexto[i] == 'i') {
            arrayTexto[i] = 'imes';
        } else if (arrayTexto[i] == 'o') {
            arrayTexto[i] = 'ober';
        } else if (arrayTexto[i] == 'u') {
            arrayTexto[i] = 'ufat';
        }
    }
    let valorDespuesEncriptado = arrayTexto.join(''); //El array resultante se convierte denuevo a string
    document.getElementById('textoResultado').innerText=valorDespuesEncriptado; //.innerText asigna el valorDepuesEncriptado al elemento "textoResultado"
    // Falta ocultar .caja-preresultado y activar display de <p>
}

function desencriptar () {
    event.preventDefault();
    let arrayTexto = convertirArray();
    for (let i = 0; i < arrayTexto.length; i++) {
        if (arrayTexto[i] == 'a' || arrayTexto[i] == 'e' || arrayTexto[i] == 'i' || arrayTexto[i] == 'o' || arrayTexto[i] == 'u' ) {
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
        } else {
            arrayTexto[i] = arrayTexto[i];
        }
    }
    let valorDespuesDesencriptado = arrayTexto.join('');
    document.getElementById('textoResultado').innerText=valorDespuesDesencriptado;
    // ocultar .caja-preresultado
}