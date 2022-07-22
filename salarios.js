const colombia = [];

colombia.push({
  name: "Juanita",
  salary: 100,
});

colombia.push({
  name: "marcela",
  salary: 500,
});

colombia.push({
  name: "maria",
  salary: 100,
});

colombia.push({
  name: "mercedes",
  salary: 200,
});

colombia.push({
  name: "aida",
  salary: 500000,
});
colombia.push({
  name: "jorge",
  salary: 100,
});

colombia.push({
  name: "marcos",
  salary: 200,
});

colombia.push({
  name: "ana",
  salary: 70000,
});

colombia.push({
  name: "santi",
  salary: 90000,
});

colombia.push({
  name: "willian",
  salary: 200,
});

colombia.push({
  name: "daniel",
  salary: 100000000,
});

colombia.push({
  name: "mike",
  salary: 100000000,
});

// Helpers

function calcularMediaAritmetica(lista) {
  const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });

  const promedioLista = sumaLista / lista.length;

  return promedioLista;
}

function esPar(numero) {
  return numero % 2 === 0;
}

//Calculadora de mediana

function medianaSalarial(lista) {
  const mitad = parseInt(lista.length / 2);
  if (esPar(lista.leng)) {
    const mediana = calcularMediaAritmetica([lista[mitad - 1], lista[mitad]]);
    return mediana;
  } else {
    const mediana = lista[mitad];
    return mediana;
  }
}

//Mediana General

const salariosCol = colombia.map(function (persona) {
  return persona.salary;
});

const salariosColSorted = salariosCol.sort(function (a, b) {
  return a - b;
});

const medianaGeneralCol = medianaSalarial(salariosColSorted);

//Mediana del Top 10%

const splaceStart = (salariosColSorted.length * 90) / 100;
const splaceCount = salariosColSorted.length - splaceStart;

const salariosColTop10 = salariosColSorted.splice(splaceStart, splaceCount);

const medinaTop10Col = medianaSalarial(salariosColTop10);

console.log(medianaGeneralCol, medinaTop10Col);
