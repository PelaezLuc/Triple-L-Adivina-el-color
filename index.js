"use strict";

const baul = [0, 1, 2];
let codigoRGB = generarCodigoRGB();
let numGanador = generarNumAleatorio();
const divColor = document.querySelectorAll("div .caja");

function generarCodigoRGB(red, green, blue) {
  const max = 255;

  red = Math.floor(Math.random() * max);
  green = Math.floor(Math.random() * max);
  blue = Math.floor(Math.random() * max);

  let resultado = `${red}, ${blue}, ${green}`;

  return resultado;
}

function generarBackgroundColor(baul) {
  baul = document.getElementById(
    "caja-1"
  ).style.backgroundColor = `rgb(${generarCodigoRGB()})`;
  baul = document.getElementById(
    "caja-2"
  ).style.backgroundColor = `rgb(${generarCodigoRGB()})`;
  baul = document.getElementById(
    "caja-3"
  ).style.backgroundColor = `rgb(${generarCodigoRGB()})`;

  return baul;
}

function imprimirCodigoRGB() {
  let codigo = document.getElementById("codigo-rgb");

  return codigo.append(codigoRGB);
}

function generarNumAleatorio(num) {
  const max = 3;
  num = Math.floor(Math.random() * max);
  return num;
}

function generarCajaAcierto() {
  for (let i = 0; i <= 2; i++) {
    if (numGanador === i) {
      baul[i] = document.querySelectorAll(".caja")[
        i
      ].style.backgroundColor = `rgb(${codigoRGB})`;
    }
  }
}

function puntuar(divColor) {
  let contador = 0;
  let acierto = true;
  let fallo = true;
  // while (contador < 6) {

  // }
}

imprimirCodigoRGB();
generarBackgroundColor();
console.log(numGanador);
console.log(codigoRGB);
generarCajaAcierto();
