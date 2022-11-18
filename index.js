"use strict";

const baul = [0, 1, 2];
let codigoRGB = generarCodigoRGB();
let numGanador = generarNumAleatorio();
const divColor = document.querySelectorAll("div .caja");
let aciertos = 0;
let fallos = 0;

function generarCodigoRGB() {
  const max = 256;

  red = Math.floor(Math.random() * max);
  green = Math.floor(Math.random() * max);
  blue = Math.floor(Math.random() * max);

  let resultado = `${red}, ${blue}, ${green}`;

  return resultado;
}

function generarBackgroundColor() {
  document.getElementById(
    "caja-1"
  ).style.backgroundColor = `rgb(${generarCodigoRGB()})`;
  document.getElementById(
    "caja-2"
  ).style.backgroundColor = `rgb(${generarCodigoRGB()})`;
  document.getElementById(
    "caja-3"
  ).style.backgroundColor = `rgb(${generarCodigoRGB()})`;
}

function imprimirCodigoRGB() {
  let codigo = document.getElementById("codigo-rgb");
  codigo.textContent = `RGB: ${codigoRGB}`;
}

function generarNumAleatorio(num) {
  const max = 3;
  num = Math.floor(Math.random() * max);
  return num;
}

// function generarCajaAcierto() {
//   for (let i = 0; i <= 2; i++) {
//     //num ganador = 2
//     if (i === numGanador) {
//       baul[i] = document.querySelectorAll(".caja")[
//         i
//       ].style.backgroundColor = `rgb(${codigoRGB})`;
//     }
//   }
// }

function generarCajaAcierto() {
  document.querySelectorAll(".caja")[
    numGanador
  ].style.backgroundColor = `rgb(${codigoRGB})`;
}

const contenedorColores = document.querySelector(".contenedor-colores");
contenedorColores.addEventListener("click", (event) => {
  if (event.target.className !== "caja") {
    return;
  }
  if (event.target.style.backgroundColor === `rgb(${codigoRGB})`) {
    aciertos++;
    document.querySelector(".acierto").textContent = aciertos;
  } else {
    fallos++;
    document.querySelector(".fallos").textContent = fallos;
  }
  generarBackgroundColor();
  codigoRGB = generarCodigoRGB();
  numGanador = generarNumAleatorio();
  console.log(numGanador);
  generarCajaAcierto();
  imprimirCodigoRGB();
});

imprimirCodigoRGB();
generarBackgroundColor();
console.log(numGanador);
console.log(codigoRGB);
generarCajaAcierto();
