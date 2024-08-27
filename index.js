document.addEventListener("DOMContentLoaded", function () {
    const titulo = document.getElementById("titulo");
    const botonEncriptar = document.getElementById("boton__encriptar");
    const botonDesencriptar = document.getElementById("boton__desencriptar");
    const botonCopiar = document.getElementById("boton__copiar");
    const mensaje = document.getElementById("mensaje");
    const mensajeDos = document.getElementById("mensaje__dos");
    const contenedorSalida = document.getElementById("contenedor__salida");
    const imagen = document.getElementById("imagen");

    const regExp = /^[a-z\s]*$/;

    function validarTexto(texto) {
        return regExp.test(texto);
    }

    function encriptarTexto(texto) {
        return texto.replace(/e/g, "enter")
                    .replace(/i/g, "imes")
                    .replace(/a/g, "ai")
                    .replace(/o/g, "ober")
                    .replace(/u/g, "ufat");
    }

    function desencriptarTexto(texto) {
        return texto.replace(/enter/g, "e")
                    .replace(/imes/g, "i")
                    .replace(/ai/g, "a")
                    .replace(/ober/g, "o")
                    .replace(/ufat/g, "u");
    }

    function actualizarSalida(texto) {
        imagen.classList.add("ocultar");
        mensaje.textContent = texto;
        mensaje.classList.add("modificar");
        mensajeDos.textContent = "";
        botonCopiar.classList.remove("boton__ocultar");
    }

    function mostrarAlerta(mensaje) {
        alert(mensaje);
    }

    botonEncriptar.addEventListener("click", function () {
        const texto = titulo.value.trim();
        if (!validarTexto(texto)) {
            mostrarAlerta("Por favor, ingrese solo letras minúsculas y sin acentos.");
            return;
        }
        const textoEncriptado = encriptarTexto(texto);
        actualizarSalida(textoEncriptado);
    });

    botonDesencriptar.addEventListener("click", function () {
        const texto = titulo.value.trim();
        if (!validarTexto(texto)) {
            mostrarAlerta("Por favor, ingrese solo letras minúsculas y sin acentos.");
            return;
        }
        const textoDesencriptado = desencriptarTexto(texto);
        actualizarSalida(textoDesencriptado);
    });

    botonCopiar.addEventListener("click", function () {
        navigator.clipboard.writeText(mensaje.textContent)
            .then(() => {
                mostrarAlerta("Texto copiado al portapapeles");
            })
            .catch(err => {
                console.error("Error al copiar el texto: ", err);
                mostrarAlerta("Error al copiar el texto");
            });
    });
});
