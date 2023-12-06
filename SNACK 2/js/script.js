//CREO UN ARRAY DI OGGETTI DI SQUADRE DI CALCIO
const teams = [
    {
        nome: "Arsenal",
        punti_fatti: 0,
        falli_presi: 0,
    },
    {
        nome: "Manchester City",
        punti_fatti: 0,
        falli_presi: 0,
    },
    {
        nome: "Liverpool",
        punti_fatti: 0,
        falli_presi: 0,
    },
    {
        nome: "Newcastle",
        punti_fatti: 0,
        falli_presi: 0,
    },
    {
        nome: "Tottenham",
        punti_fatti: 0,
        falli_presi: 0,
    },
];

//CREO UNA FUNZIONE PER GENERARE UN NUMERO RANDOMICO
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

//ASSOCIO ALLE CHIAVI UN NUMERO RANDOMICO, UTILIZZANDO IL FOR-EACH
teams.forEach((elem) => {
  elem.punti_fatti = randomNumber(1, 120);
  elem.falli_presi = randomNumber(1, 60);
});

//CREO UN NUOVO ARRAY E RESCRIVO I NUOVI VALORI UTILIZZANDO IL MAP
const teamsEnd = teams.map(({ nome, falli_presi }) => ({ nome, falli_presi }));
console.log(teamsEnd);
