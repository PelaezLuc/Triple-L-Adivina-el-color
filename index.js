"use strict";

let baul = [];
let codigoRGB = generarCodigoRGB();

function generarCodigoRGB(red, green, blue) {
  const max = 255;

  red = Math.floor(Math.random() * max);
  green = Math.floor(Math.random() * max);
  blue = Math.floor(Math.random() * max);

  let resultado = `${red}, ${blue}, ${green}`;

  return resultado;
}

// function cambiarColor() {
//   return (document.getElementsByClassName(
//     "cajon"
//   ).style.backgroundColor = `rgb(${generarCodigoRGB()})`);
// }

function imprimirCodigoRGB() {
  const codigo = document.getElementById("codigo-rgb");

  return codigo.append(generarCodigoRGB());
}

function generarNumAleatorio() {
  const max = 3;
  let num = Math.floor(Math.random() * max);
  return num;
}

generarCodigoRGB();
imprimirCodigoRGB();
cambiarColor();
