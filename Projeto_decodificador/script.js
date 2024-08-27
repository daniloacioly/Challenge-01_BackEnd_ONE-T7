let textInput = document.querySelector("#text__area");
let outInput = document.querySelector("#output__texto");
const btnEncriptar = document.querySelector("#btn__encriptar");
const btnDesencriptar = document.querySelector("#btn__desencriptar");
const btnCopiar = document.querySelector("#btn__copiar");

function validar() {
    let mensagem = textInput.value;
    let testNumero = /[0-9]/g.test(mensagem);
    let testCaracter = /[!"#$%&'()*+,-./:;?@[\\\]_`{|}~]/g.test(mensagem);
    let testLetra = /[A-Z\u00C0-\u00FF]+/g.test(mensagem);

    if (mensagem == "") {
        return false;
    }else if (testNumero == true || testCaracter == true || testLetra == true) {
        return false;
    }else {
        return true;
    }
}

function encriptar() {
    let mensagem = textInput.value;
    let valido = validar();
    if (valido == false) {
        alert("Texto inválido! Digite um texto com apenas letras minúsculas e sem acento.");
    }else {
        var textCripto = mensagem.replaceAll("a", "ax").replaceAll("e", "enter").replaceAll("i", "imes").replaceAll("o", "ober").replaceAll("u", "ufat");

        document.getElementById("semMensagem").style.display = "none";
        outInput.value = textCripto;
        textInput.value = "";
        document.getElementById("btn__copiar").style.display = "block";
    }
}

function descriptografar() {
    let mensagem = textInput.value;
    let valido = validar();
    if (valido == false) {
        alert("Texto inválido! Digite um texto com apenas letras minúsculas e sem acento.");
    }else {
        var textDescripto = mensagem.replaceAll("ax", "a").replaceAll("enter", "e").replaceAll("imes", "i").replaceAll("ober", "o").replaceAll("ufat", "u");
        
        document.getElementById("semMensagem").style.display = "none";
        outInput.value = textDescripto;
        textInput.value = "";
        document.getElementById("btn__copiar").style.display = "block";
    }
}

function limparSaida() {
    outInput.value = "";
}

async function copiarTexto() {
    let text = outInput.value;
    await navigator.clipboard.writeText(text);
    alert("A mensagem foi copiada com sucesso!");
    document.getElementById("btn__copiar").style.display = "none";
    document.getElementById("semMensagem").style.display = "block";
    limparSaida();
}

btnEncriptar.onclick = document.getElementById("btn__encriptar").addEventListener("click", encriptar);
btnDesencriptar.onclick = document.getElementById("btn__desencriptar").addEventListener("click", descriptografar);
btnCopiar.onclick = document.getElementById("btn__copiar").addEventListener("click", copiarTexto);

