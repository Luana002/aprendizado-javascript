//função do texto sumir e aparecer
const texto = document.getElementById("Texto");

function mostrarTexto() {
    texto.innerText ="Olá";
    texto.style.display = "block";
}
function apagarTexto() {
    texto.style.display = "none";
}
console.log(mostrarTexto());
console.log(apagarTexto());

// Fatiamento de texto
const fatiamento = document.getElementById("textoFatiado");
const textoGuardado = fatiamento.innerText;

function botaoFatiamento() {
    fatiamento.innerText = fatiamento.innerText.slice(5);
    console.log("Texto após fatiar:", fatiamento.innerText.slice(5));
}
function voltarFatiamento() {
    fatiamento.innerText = textoGuardado;
    console.log("Texto quando volta:", textoGuardado);
}

//Gerador de números aleatórios e cores
const elementoParagrafo = document.getElementById("Numero");

function gerarNumero() {
    let numeroGerado = Math.floor(Math.random() * 100);
    elementoParagrafo.innerText = numeroGerado;

    console.log(numeroGerado);

    if (numeroGerado > 50) {
        elementoParagrafo.style.color = "blue";
    } else {
        elementoParagrafo.style.color = "red";
    }
}

//