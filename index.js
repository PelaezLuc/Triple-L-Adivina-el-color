"use strict";

const baul = [0, 1, 2];
let codigoRGB = generarCodigoRGB();
let numGanador = generarNumAleatorio();

function generarCodigoRGB(red, green, blue) {
  const max = 255;

  red = Math.floor(Math.random() * max);
  green = Math.floor(Math.random() * max);
  blue = Math.floor(Math.random() * max);

  let resultado = `${red}, ${blue}, ${green}`;

  return resultado;
}

function generarBackgroundColor(baul) {
  baul[0] = document.getElementById(
    "caja-1"
  ).style.backgroundColor = `rgb(${generarCodigoRGB()})`;
  baul[1] = document.getElementById(
    "caja-2"
  ).style.backgroundColor = `rgb(${generarCodigoRGB()})`;
  baul[2] = document.getElementById(
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

function generarCajaAcierto(baul) {
  for (let i = 0; i <= 2; i++) {
    if (numGanador === i) {
      baul[i] = document.querySelectorAll(".caja")[
        i
      ].style.backgroundColor = `rgb(${codigoRGB})`;
    }
  }
}

console.log(numGanador);
imprimirCodigoRGB();
generarCajaAcierto();
