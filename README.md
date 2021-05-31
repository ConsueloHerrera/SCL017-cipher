



<details> 
  <summary>
  
  Click para desplegar Read Me Laboratoria
   </summary>
  
  # Cifrado César

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Criterios de aceptación mínimos del proyecto](#3-criterios-de-aceptación-mínimos-del-proyecto)
* [4. Criterios de aceptación adicionales](#4-criterios-de-aceptación-adicionales)
* [5. Objetivos de aprendizaje](#5-objetivos-de-aprendizaje)
* [6. Recomendaciones generales](#6-recomendaciones-generales)
* [7. Recursos y temas relacionados](#7-recursos-y-temas-relacionados)
* [8. Checklist](#8-checklist)

***


#### 3.5.3 Sobre tus Scripts / Archivos
* `README.md`: debe explicar cómo descargar, instalar y ejecutar la aplicación
  así como una introducción a la aplicación, su funcionalidad y decisiones de
  diseño que tomaron.
* `src/index.html`: este es el punto de entrada a tu aplicación. Este archivo
  debe contener tu _markup_ (HTML) e incluir el CSS y JavaScript necesario.
* `src/cipher.js`: acá debes implementar el objeto `cipher`, el cual ya está
  _exportado_ en el _boilerplate_. Este objeto (`cipher`) debe contener dos
  métodos:
  - `cipher.encode(offset, string)`: `offset` es el número de posiciones que
    queremos mover a la derecha en el alfabeto y `string` el mensaje (texto)
    que queremos cifrar.
  - `cipher.decode(offset, string)`: `offset` es el número de posiciones que
    queremos mover a la izquierda en el alfabeto y `string` el mensaje
    (texto) que queremos descifrar.
* `src/index.js`: acá debes escuchar eventos del DOM, invocar `cipher.encode()`
  o `cipher.decode()` según sea necesario y actualizar el resultado en la UI.
* `test/cipher.spec.js`: este archivo contiene algunos tests de ejemplo y acá
  tendrás que implementar los tests para `cipher.encode()` y `cipher.decode()`.

## 4. Criterios de aceptación adicionales
Si te alcanza el tiempo y las ganas para explorar un poco más, intenta:

* Cifrar minúsculas, ñ, números, etc. El _boilerplate_ incluye algunos tests
(comentados en principio) que puedes usar como punto de partida para implementar el soporte para estos casos.

* Permitir un _offset_ negativo.

## 5. Objetivos de aprendizaje

### HTML y CSS

* [ ] [Uso de HTML semántico.](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML)
* [ ] Uso de selectores de CSS.
* [ ] Construir tu aplicación respetando el diseño realizado (maquetación).

### DOM

* [ ] Uso de selectores del DOM.
* [ ] Manejo de eventos del DOM.
* [ ] [Manipulación dinámica del DOM.](https://developer.mozilla.org/es/docs/Referencia_DOM_de_Gecko/Introducci%C3%B3n)
(appendChild |createElement | createTextNode| innerHTML | textContent | etc.)

### JavaScript

* [ ] Manipulación de strings.
* [ ] Uso de condicionales (if-else | switch | operador ternario)
* [ ] Uso de bucles (for | for..in | for..of | while)
* [ ] Uso de funciones (parámetros | argumentos | valor de retorno)
* [ ] Declaración correcta de variables (const & let)

### Testing

* [ ] [Testeo unitario.](https://jestjs.io/docs/es-ES/getting-started)

### Estructura del código y guía de estilo

* [ ] Organizar y dividir el código en módulos (Modularización)
* [ ] Uso de identificadores descriptivos (Nomenclatura | Semántica)
* [ ] Uso de linter (ESLINT)

### Git y GitHub

* [ ] Uso de comandos de git (add | commit | pull | status | push)
* [ ] Manejo de repositorios de GitHub (clone | fork | gh-pages)

### UX

* [ ] Diseñar la aplicación pensando y entendiendo al usuario.
* [ ] Crear prototipos para obtener feedback e iterar.
* [ ] Aplicar los principios de diseño visual (contraste, alineación, jerarquía)

***

## 6. Recomendaciones generales

Pierde el miedo a preguntar a tus _coaches_ y a tus compañeras. Estás aquí
porque quieres aprender. Si ya supieras, estarías trabajando como _developer_
y no el _bootcamp_ de Laboratoria.

Hazte amiga de Trello. No solamente te ayudará a organizar tu trabajo, es
también una excelente manera de ir razonando sobre los pasos que seguirás,
en qué orden hacerlos, identificar qué necesitas aprender, etc.

Al prinncipio, Git y GitHub te resultarán misteriosos, no les temas y úsalos a
tu favor. Procura hacer _commits_ con frecuencia, eso te ayudará a tener un respaldo
en todo momento y podrás acceder a él siempre que lo necesites. ¡No lo dejes al final!

Anímate a correr los _tests_ cuanto antes para que te ayude a la construcción de
tus funciones.

### 6.1 Primeros pasos, tu prototipo en papel
Comienza por la ideación y el prototipado de tu proyecto. Dibuja en papel y lápiz
exactamente cada elemento que tendrá tu interfaz y prueba con algunas personas
para ver si se comprende, si es suficientemente intuitivo, etc.

Este paso es fundamental para que tú misma comprendas si tus ideas "funcionan"
fuera de tu cabeza. Te ayudará a entender mejor todo lo que tienes que hacer.
**No inviertas demasiado tiempo en esto. Con uns pocas horas debería ser más
que suficiente.**

A partir de acá puedes seguir por diferntes caminos. Es como armar un rompecabezas
o _puzzle_, puedes comenzar por una esquina, luego otra, un pedazo de un borde,
de otro, etc. Poco a poco te será más fácil ver "el todo" y entender cómo encajan
todas las partes.

Te sugerimos seguir por lo que menos sabes. Evita caer en el juego de
"la ilusión del avance". Quizás te sienteas "cómoda" trabajando en HTML y CSS
porque lo que haces se "ve" en el navegador y puede resultarte más fácil de comprender.
Si te quedas trabajando en eso tendrás la sensación de estar "avanzando", pregúntante
si estás "aprendiendo". No estás acá para "entregar proyectos", estás para aprender
lo que no sabes.

### 6.2 Achicando el gran problema en problemas más pequeños
Un "superpoder" que esperamos puedas desarrollar durante el _bootcamp_ es el de
definir "mini-proyectos" que te acerquen paso a paso a la solución del
"gran proyecto". Es el equvalente a comenzar armando esquinas o bordes del
rompecabezas/puzzle sin saber necesariamente cómo encajarán al final. Déjate
llevar y explora. Estas son algunas sugerencias:

#### "Mover" un valor de una caja de texto a otra
Crea una interfaz simple con 2 cajas de texto y un botón. Si escribo algo en la
caja de texto 1 y le doy click al botón, quiero que lo que escribí se "mueva"
desde la caja 1 hacia la caja 2.

Para lograr esto tendrás que aprender a: detectar un evento en el navegador (_click_), identificar un elemento de tu interfaz para obtener su contenido/valor (la caja de texto 1), "escribir" un valor en otro elemento de la interfaz (caja de texto 2).

#### "Convertir" una letra en su código ASCII
Pensando en la misma interfaz anterior (2 cajas de texto y 1 botón). Quiero
escribir A o B (una sola) en la caja de texto 1 y que cuando le dé _click_ al botón,
aparezca el código ASCII de la letra en la caja de texto 2.

Ahora no solamente estás "leyendo" y "escribiendo" valores en el navegador, también
tendrás que "manipularlos" antes de "escribirlos".

#### "Cifrar" A o B con un desplazamiento (_offset_) de 3
Cuando escriba A o B en la caja de texto 1 y le dé click al botón, quiero que
apaezca la letra cifrada en la caja de texto 2. Por ejemplo, si escribo B
debe aparecer E.

#### "Cifrar" una letra con un desplazamiento de 30 caracteres
En los casos anteriores probamos con letras y con un desplazamiento que no
implicaban llegar "más allá" de final del alfabeto. Ahora prueba con un caso que
sí lo requiera. Por ejmplo 30 caracteres de desplazamiento. Para esto te puede
ayudar el video de la sección "Recursos y temas relacionados". **La fórmula no es
lo importante en este proyecto, lo importante es lo que haces con la fórmula.**

#### "Cifrar" tres letras con un desplazamiento cuqlquiera
Hasta ahora hemos explorado trabajar con una sola letra pero ¿cómo haríamos si
son más? Para hacerlo tendrás que aprender cómo ir cifrando letra por letra y
ya estás mucho más cerca de resolver el proyecto "grande"

Fíjate que la complejidad es creciente, la clave está en definir el primer paso
lo más simple y pequeño que puedas. Luego tú misma puedes ir agregando complejidad
a medida que avanzas.

### 5.3 Tu caja de arena para "jugar"
Así como existen las cajas de arena para que las niñas jueguen en un espacio
seguro y controlado", tú también puedes procurarte condiciones "controladas" en
las que puedas identificar lo que te falla. Si comienzas explorando y probando
en archivos con muchas líenas de código y muchas cosas sucediento al mismo tiempo,
será difícil que sepas qué falla y/o por qué no te funciona algo que acabas de
leer y estás segura en entender. Esto puede ser muy frustrante y hacerte perder
mucho tiempo.

Para probar los mini-proyectos que te proponnemos, puedes hacerlo en un
proyecto/archivos en blanco en los que tú tienes el control y sabes exactamente
qué es y qué hace cada cosa. También puedes utilizar CodePen o Replit (por ejemplo).

### 6.4 Herramientas y configuración de tu PC

1. Antes que nada, asegúrate de tener un :pencil: editor de texto en
   condiciones, algo como [Atom](https://atom.io/) o
   [Code](https://code.visualstudio.com/).
2. Para ejecutar los comandos a continuación necesitarás una :shell:
   [UNIX Shell](../../topics/shell),
   que es un programita que interpreta líneas de comando (command-line
   interpreter) así como tener [git](../../topics/scm/01-git)
   instalado. Si usas un sistema operativo "UNIX-like", como GNU/Linux o MacOS,
   ya tienes una _shell_ (terminal) instalada por defecto (y probablemente `git`
   también). Si usas Windows puedes usar la versión completa de [Cmder](https://cmder.net/)
   que incluye [Git bash](https://git-scm.com/download/win) y si tienes Windows
   10 o superior puedes usar [Windows Subsystem for Linux](https://docs.microsoft.com/en-us/windows/wsl/install-win10).
3. Tú o una de las integrantes del equipo debe realizar un :fork_and_knife:
   [fork](https://help.github.com/articles/fork-a-repo/) del repositorio de tu cohort,
   tus _coaches_ te compartirán un _link_ a un repo y te darán acceso de lectura
   en ese repo. La otra integrante del equipo deber hacer un fork **del
   repositorio de su compañera** y
   [configurar](https://gist.github.com/BCasal/026e4c7f5c71418485c1) un `remote`
   hacia el mismo.
4. :arrow_down: [Clona](https://help.github.com/articles/cloning-a-repository/)
   tu *fork* a tu computadora (copia local).
5. 📦 Instala las dependencias del proyecto con el comando `npm install`. Esto
   asume que has instalado [Node.js](https://nodejs.org/) (que incluye [npm](https://docs.npmjs.com/)).
6. Si todo ha ido bien, deberías poder ejecutar las :traffic_light:
   pruebas unitarias (unit tests) con el comando `npm test`.
7. Para ver la interfaz de tu programa en el navegador, usa el comando
   `npm start` para arrancar el servidor web y dirígete a
   `http://localhost:5000` en tu navegador.

## 7. Recursos y temas relacionados

### 7.1 fórmula matemática del Cifrado César y un par de cosas más
A continuación un video de Michelle ¡Escúchala con detenimiento y sigue sus consejos! :)

[![tips caesar cipher](https://img.youtube.com/vi/zd8eVrXhs7Y/0.jpg)](https://www.youtube.com/watch?v=zd8eVrXhs7Y)

[Link](https://www.youtube.com/watch?v=zd8eVrXhs7Y)

### 7.2 Terminal y shell de UNIX:

[![Playlist de Terminal y shell de UNIX](https://img.youtube.com/vi/GB35Eyb-J4c/0.jpg)](https://www.youtube.com/playlist?list=PLiAEe0-R7u8nGH5TEHfSTeDNIvjZFe_Yd)

[Link](https://www.youtube.com/playlist?list=PLiAEe0-R7u8nGH5TEHfSTeDNIvjZFe_Yd)

### 7.3 Control de versiones y trabajo colaborativo con Git y GitHub:

[![Playlist de control de versiones y trabajo colaborativo](https://img.youtube.com/vi/F1EoBbvhaqU/0.jpg)](https://www.youtube.com/playlist?list=PLiAEe0-R7u8k9o3PbT3_QdyoBW_RX8rnV)

[Link](https://www.youtube.com/playlist?list=PLiAEe0-R7u8nGH5TEHfSTeDNIvjZFe_Yd)

### 7.4 Temas relacionados
#### Diseño de experiencia de usuario (User Experience Design):

* Ideación
* Prototipado (sketching)
* Testeo e Iteración

#### Desarrollo Front-end:

* Valores
* Tipos
* Variables
* Control de flujo
* Tests unitarios
* [Aprende más sobre `charCodeAt()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/charCodeAt)
* [Aprende más sobre `String.fromCharCode()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/fromCharCode)
* [Aprende más sobre `ASCII`](http://conceptodefinicion.de/ascii/)
* [Documentación de NPM](https://docs.npmjs.com/)

#### Organización del Trabajo:

* [Metodologías Ágiles](https://www.youtube.com/watch?v=v3fLx7VHxGM)
* [Scrum en menos de 2 minutos](https://www.youtube.com/watch?v=TRcReyRYIMg)
* [Scrum en Detalle](https://www.youtube.com/watch?v=nOlwF3HRrAY&t=297s). No
  esperamos que hagas todo eso desde este proyecto. Iremos profundizando poco a
  poco a lo largo del -_bootcamp_.

## 8. Checklist
<details>
  <summary>!Click para expandir¡</summary>

Esta sección está para ayudarte a llevar un control de lo que vas completando.

### Criterios de aceptación mínimos

* [ ] `README.md` incluye info sobre proceso y decisiones de diseño.
* [ ] `README.md` explica quiénes son las usuarias y su relación con
  el producto.
* [ ] `README.md` explica cómo el producto soluciona los problemas/necesidades
de las usuarias.
* [ ] Usa VanillaJS.
* [ ] No utiliza `this`.
* [ ] Implementa `cipher.encode`.
* [ ] Implementa `cipher.decode`.
* [ ] Pasa linter con configuración provista.
* [ ] Pasa pruebas unitarias.
* [ ] Pruebas unitarias cubren 70% de _statements_, _functions_ y _lines_, y un
  mínimo del 50% de _branches_.
* [ ] Interfaz permite elegir el `offset` o _desplazamiento_ a usar en el
  cifrado/descifrado.
* [ ] Interfaz permite escribir un texto para ser cifrado.
* [ ] Interfaz muestra el resultado del cifrado correctamente.
* [ ] Interfaz permite escribir un texto para ser descifrado.
* [ ] Interfaz muestra el resultado del descifrado correctamente.

### Criterios de aceptación adicionales (opcionales)

* [ ] Cifra/descifra minúsculas
* [ ] Cifra/descifra _otros_ caracteres (espacios, puntuación, `ñ`, `á`, ...)
* [ ] Permite usar un `offset` negativo.

</details>
