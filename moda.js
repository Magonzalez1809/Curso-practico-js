const lista1 = [1, 2, 3, 5, 3, 2, 2];

function calcularmoda(lista) {
  const lista1Count = {};

  lista.map(function (elemento) {
    if (lista1Count[elemento]) {
      lista1Count[elemento] += 1;
    } else {
      lista1Count[elemento] = 1;
    }
  });

  const listaCountArray = Object.entries(lista1Count).sort(function (
    elementoA,
    elementoB
  ) {
    return elementoA[1] - elementoB[1];
  });

  const moda = listaCountArray[listaCountArray.length - 1];

  return moda[0];
}
