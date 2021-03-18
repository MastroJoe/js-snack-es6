// Snack1
// Creare un array di oggetti.
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

$(document).ready(function(){
// creo array di oggetti di bici con nome e peso
const bikes = [{
  nome: 'bmx',
  peso: 7
},
{
  nome: 'downhill',
  peso: 3
},
{
  nome: 'ibrida',
  peso: 10
},
{
  nome: 'da città',
  peso: 9
},
{
  nome: 'pieghevole',
  peso: 5
}];
console.log(bikes);

let pesoMinore = bikes[0];
// ciclo l'array per trovare la bici piu leggera
for (let i = 0; i < bikes.length; i++) {
  if (bikes[i].peso < pesoMinore.peso) {
    pesoMinore = bikes[i];
  };
};
console.log(pesoMinore);

const {nome, peso} = pesoMinore;
console.log();

});
