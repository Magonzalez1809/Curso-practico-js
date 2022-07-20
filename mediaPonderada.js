const notes = [
  {
    course: "Educación Física",
    note: 10,
    credit: 2,
  },
  {
    course: "Programacion",
    note: 8,
    credit: 5,
  },
  {
    course: "Finanzas personales",
    note: 7,
    credit: 5,
  },
];

const noteswhitcreditos = notes.map(function (noteObject) {
  return noteObject.note * noteObject.credit;
});

const sumOfNotesWithCredit = noteswhitcreditos.reduce(function (
  sum = 0,
  newVal
) {
  return sum + newVal;
});

const credits = notes.map(function (noteObject) {
  return noteObject.credit;
});

const sumOfcredits = credits.reduce(function (sum = 0, newVal) {
  return sum + newVal;
});

const promedioPonderadoNotesWhitCredits = sumOfNotesWithCredit / sumOfcredits;
