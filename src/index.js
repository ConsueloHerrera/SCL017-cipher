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

document.getElementById("botonEncode").onclick = function(){
        document.getElementById("textoCifrado").toggleAttribute("hidden")

document.getElementById("cifrar").toggleAttribute("hidden")

}
document.getElementById("botonPrincipal").onclick = function(){
        document.getElementById("saludo").toggleAttribute("hidden")

        document.getElementById("textoCifrado").toggleAttribute("hidden")
}


