//console.log("jummm");

// codigo del cuadrado
console.group("Cuadrado");

//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden:" + ladoCuadrado + "cm");

//const perimetroCuadrado = ladoCuadrado * 4;
//console.log("El perimetro del cuadrado es :" + perimetroCuadrado + "cm");

function perimetroCuadrado(lado) {
  return lado * 4;
}

//const areaCuadrado = ladoCuadrado * ladoCuadrado;
//console.log("El area del cuadrado es :" + areaCuadrado + " cm^2");

function areaCuadrado(lado) {
  return lado * lado;
}

console.groupEnd();
// triangulo

console.group("Triangulo");
//const ladoTriangulo1 = 6;
//const LadoTriangulo2 = 6;
//const baseTriangulo = 4;
//const alturaTriangulo = 5.5;
//
//console.log(
//  "Los lados del triangulo miden:" +
//    ladoTriangulo1 +
//    "cm, " +
//    LadoTriangulo2 +
//    "cm, " +
//    baseTriangulo +
//    "cm"
//);

//const perimetroTriangulo = ladoTriangulo1 + LadoTriangulo2 + baseTriangulo;
//console.log("El perimetro del triangulo es :" + perimetroTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base) {
  resul = lado1 + lado2 + base;
  return resul;
}

//const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
//console.log("El area del triangulo es :" + areaTriangulo + " cm^2");

function baseTIsosceles(lado1, lado2, base) {
  if (lado1 != lado2) {
    return "Error :  No es un triangulo isosceles";
  } else {
    return Math.sqrt(lado1 * lado2 - (base * base) / 4);
  }
}

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

console.groupEnd();

// circulo

console.group("Circulo");

//const radioCirculo = 4;
//console.log("El radio del circulo es :" + radioCirculo + "cm");
//const diametroCirculo = radioCirculo * 2;
//console.log("El diametroCirculo del circulo es :" + diametroCirculo + "cm");

const PI = Math.PI;
console.log("PI es :" + PI);

function diametroCirculo(radio) {
  return radio * 2;
}

//const perimetroCirculo = diametroCirculo * PI;
//console.log("El perimetroCirculo del circulo es :" + perimetroCirculo + "cm");

function perimetroCirculo(radio) {
  diametro = diametroCirculo(radio);
  return diametro * PI;
}

//const areCirculo = radioCirculo * radioCirculo * PI;
//console.log("El areCirculo del circulo es :" + areCirculo + " cm^2");

function areaCirculo(radio) {
  return radio * radio * PI;
}

console.groupEnd();

//integracion Html
function calcualarPerimetroCuadrado() {
  const input = document.getElementById("perimetroCuadrado");
  const value = input.value;
  alert(perimetroCuadrado(value));
}

function calcualarAreaCuadrado() {
  const input = document.getElementById("perimetroCuadrado");
  const value = input.value;
  alert(areaCuadrado(value));
}

function calcualarPerimetroTriangulo() {
  const inputld1 = document.getElementById("ladoUno");
  const valueld1 = inputld1.value;
  const inputld2 = document.getElementById("ladoDos");
  const valueld2 = inputld2.value;
  const inputbs = document.getElementById("base");
  const valuebs = inputbs.value;

  alert(perimetroTriangulo(valueld1, valueld2, valuebs));
}

function calcualarAreaTriangulo() {
  const inputh = document.getElementById("altura");
  const valueh = inputh.value;
  const inputbs = document.getElementById("base");
  const valuebs = inputbs.value;
  alert(areaTriangulo(valuebs, valueh));
}

function calcualarPerimetroCirculo() {
  const input = document.getElementById("radio");
  const value = input.value;
  alert(perimetroCirculo(value));
}

function calcualarAreaTriCirculo() {
  const input = document.getElementById("radio");
  const value = input.value;
  alert(areaCirculo(value));
}
