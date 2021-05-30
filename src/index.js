import cipher from './cipher.js';

console.log(cipher);


// funciones interfaz página

document.getElementById("botonEntrar").onclick = function(){
        document.getElementById("saludo").toggleAttribute("hidden")

document.getElementById("entrar").toggleAttribute("hidden")
}

document.getElementById("botonCifrar").onclick = function(){
        document.getElementById("cifrarMensaje").toggleAttribute("hidden")

document.getElementById("saludo").toggleAttribute("hidden")
}

document.getElementById("botonDescifrar").onclick = function(){
        document.getElementById("descifrarMensaje").toggleAttribute("hidden")

document.getElementById("saludo").toggleAttribute("hidden")
}

document.getElementById("cifrar").onclick = function(){
        document.getElementById("textoCifrado").toggleAttribute("hidden")

document.getElementById("cifrarMensaje").toggleAttribute("hidden")

}
document.getElementById("botonPrincipal").onclick = function(){
        document.getElementById("saludo").toggleAttribute("hidden")

        document.getElementById("textoCifrado").toggleAttribute("hidden")
}
document.getElementById("boton2").onclick = function(){
        document.getElementById("mensajeParaDescifrar").value = document.getElementById("mensaje2").value;
        document.getElementById("descifrarMensaje").toggleAttribute("hidden")

document.getElementById("textoCifrado").toggleAttribute("hidden")
}
document.getElementById("botonPrincipal2").onclick = function(){
        document.getElementById("saludo").toggleAttribute("hidden")

        document.getElementById("textoDescifrado").toggleAttribute("hidden")
}

document.getElementById("botonQueDescifra").onclick = function(){
        document.getElementById("descifrarMensaje").toggleAttribute("hidden")
        
        document.getElementById("textoDescifrado").toggleAttribute("hidden")
}


// cifrado
const cifrar = document.getElementById("cifrar"); 

cifrar.addEventListener ("click", function () {
        let mensaje = document.getElementById("mensaje").value;
        let mensajeMayuscula = mensaje.toUpperCase();
        let desplazamiento = document.getElementById("desplazamiento").value;

        let mensajeCifrado = cipher.encode (mensajeMayuscula, desplazamiento);

        document.getElementById("mensaje2").value=mensajeCifrado;
       
})

// descifrado
const descifrar = document.getElementById("botonQueDescifra"); 

descifrar.addEventListener ("click", function () {
        let mensaje = document.getElementById("mensajeParaDescifrar").value;
        let mensajeMayuscula = mensaje.toUpperCase();
        let desplazamiento = document.getElementById("desplazamiento2").value;

        let mensajeCifrado = cipher.decode (mensajeMayuscula, desplazamiento);

        document.getElementById("mensaje3").value=mensajeCifrado;
       
})
