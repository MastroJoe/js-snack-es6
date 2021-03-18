// Snack2
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono
// solo nomi e falli subiti e stampiamo tutto in console.


const teams = [
{
  nome: 'Juventus',
  puntifatti: 0,
  fallisubiti: 0
},
{
  nome: 'Inter',
  puntifatti: 0,
  fallisubiti: 0
},
{
  nome: 'Milan',
  puntifatti: 0,
  fallisubiti: 0
},
{
  nome: 'Atalanta',
  puntifatti: 0,
  fallisubiti: 0
},
{
  nome: 'Roma',
  puntifatti: 0,
  fallisubiti: 0
}];

for (let i = 0; i < teams.length; i++) {
  teams[i].puntifatti = randomNumber(0,120);
  teams[i].fallisubiti = randomNumber(0,100);
};
console.log(teams);

const newTeams = [];

for (let i = 0; i < teams.length; i++) {
  const thisTeam = teams[i];
  const {nome, fallisubiti} = thisTeam;
  newTeams.push({nome, fallisubiti});
};
console.log(newTeams);

// FUNZIONI
function randomNumber (min, max) {
  if (isNaN(min) || isNaN(max)) {
    console.log("Non hai inserito un numero!");
  } else {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
};
