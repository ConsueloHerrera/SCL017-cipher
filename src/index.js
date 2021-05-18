import cipher from './cipher.js';

console.log(cipher);

document.getElementById("botonEntrar").onclick = function(){
        document.getElementById("saludo").toggleAttribute("hidden")

document.getElementById("entrar").toggleAttribute("hidden")
}

document.getElementById("botonCifrar").onclick = function(){
        document.getElementById("cifrar").toggleAttribute("hidden")

document.getElementById("saludo").toggleAttribute("hidden")


}

var valor = document.getElementById("texto").value;
