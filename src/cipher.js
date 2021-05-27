const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const cipher = { 
  encode: (texto, desplazamiento) => { 
    let resultado = "";

    desplazamiento = ((desplazamiento % 26) + 26) %26;

    if (texto) {

      for(let i = 0; i < texto.length; i++) {
        if (letras.indexOf(texto[i]) != -1) {
          let posicion = (letras.indexOf (texto[i]) + desplazamiento) % 26;
          resultado += letras[posicion];
          } else { 
            resultado += texto [i];
          } 
      }
    }
return resultado;
  // ...
} }

export default cipher;
