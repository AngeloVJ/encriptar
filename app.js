
function Encriptar(parrafo) {
    return parrafo.toLowerCase()
        .replaceAll("e", "enter")
        .replaceAll("i", "imes")
        .replaceAll("a", "ai")
        .replaceAll("o", "ober")
        .replaceAll("u", "ufat");
}

function Desencriptar(parrafo) {
    return parrafo.toLowerCase()
        .replaceAll("enter", "e")
        .replaceAll("imes", "i")
        .replaceAll("ai", "a")
        .replaceAll("ober", "o")
        .replaceAll("ufat", "u");
}

function ocultarImagen() {
    document.getElementById('info').style.display = "none";
    document.getElementById('respuesta').style.display = "flex";
}

function botonEncriptar() {
    let encriptado = Encriptar(document.getElementById('textoNuevo').value);
    document.getElementById('textoEncriptado').textContent = encriptado;
    ocultarImagen();
}

function botonDesencriptar() {
    let desencriptado = Desencriptar(document.getElementById('textoNuevo').value);
    document.getElementById('textoEncriptado').textContent = desencriptado;
    ocultarImagen();
}

function copiarTexto() {
    let texto = document.getElementById("textoEncriptado");
    var textoACopiar = texto.innerText;
    navigator.clipboard.writeText(textoACopiar);
}

function reiniciar() {
    document.getElementById('info').style.display = "flex";
    document.getElementById('respuesta').style.display = "none";
    document.getElementById('textoEncriptado').value = " ";
    document.getElementById('textoNuevo').value = " ";
}

