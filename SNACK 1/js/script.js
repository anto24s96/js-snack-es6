//CREO UN ARRAY DI OGGETTI, DI BICICLETTE DA CORSA CON NOME E PESO
const bicycles = [
    {
        nome: "Savadeck 700c",
        weight: 9.6,
    },
    {
        nome: "Pinarello Angliru",
        weight: 7,
    },
    {
        nome: "Savadeck HERD 6.0",
        weight: 8,
    },
    {
        nome: "Duobado",
        weight: 8.5,
    },
    {
        nome: "Trek Emonda 2020",
        weight: 6.81,
    },
];

//CREO UNA VARIABILE E ASSOCIO IL VALORE DI PARTENZA
let lightweight = bicycles[0];

//CREO UN CICLO FOR PER TROVARE IL VALORE MINIMO
for (let i = 1; i < bicycles.length; i++) {
  if (bicycles[i].weight < lightweight.weight) {
    lightweight = bicycles[i];
  }
}

//FACCIO IL DESTRUCTURING E STAMPO
const { nome, weight } = lightweight;
console.log(`La bici da corsa "${nome}" è la più leggera con un peso di ${weight} kg.`);





