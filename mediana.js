//const lista1 = [100, 200, 300, 500, 1000000];

function calcularMediaAritmetica(lista) {
  const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });

  const promedioLista = sumaLista / lista.length;

  return promedioLista;
}

function esPar(numero) {
  if (numero % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function calcularMediana(lista) {
  const mitadlista1 = lista.length / 2;
  let mediana;

  lista.sort(function (a, b) {
    return a - b;
  });

  if (esPar(lista.length)) {
    mediana = calcularMediaAritmetica([
      lista[mitadlista1],
      lista[mitadlista1 - 1],
    ]);
  } else {
    mediana = lista[parseInt(mitadlista1)];
  }

  return mediana;
}
