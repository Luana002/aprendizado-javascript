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

//Transformar a letra em maiuscula e minuscula
const Maiuscula = document.getElementById("maiusculo");
function geradorMaius() {
   Maiuscula.innerText = Maiuscula.innerText.toUpperCase();
}
function removerMaius() {
    Maiuscula.innerText = Maiuscula.innerText.toLowerCase();
}

// Trocar cor de fundo da web
function corFundo() { // Math tem várias funções, random gera numeros aleatorios
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    document.body.style.background = `rgb(${r},${g},${b})`;
}

// Descobrir o número do caractere
function char(inputText) {
    console.log(letra.CharCodeAt(0));
    inputText.innerText = inputText.innerText.CharCodeAt(0);
}

