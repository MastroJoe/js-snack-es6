// Milestone 1
// Definire un array di oggetti; ogni oggetto rappresenta un gatto, che è caratterizzato da:
 // nome, età, colore e sesso.
// Tramite la funzione .forEach(), stampare in pagina tutti i gattini, ciascuno con il
// proprio colore e il proprio nome.
// Milestone 2
// Dividere i gatti in due contenitori distinti in base al sesso e aggiungere a fianco di ogni gattino un fiocco colorato
// di rosa, se femmina, o di blu, se maschio. Il colore del fiocco deve essere più tenue se il gatto è più giovane, più scuro
// se il gatto è più vecchio.
// Milestone 3
// Creare un nuovo array con prima tutti i gattini femmina e poi tutti i gattini maschio, inserendo solamente nome e colore
// e colore e opacità del fiocco per ogni gatto.

// Milestone 1
$(document).ready(function (){
  // creo array di oggetti
  const cats = [
    {
      nome: 'Tom',
      eta: 10,
      colore: 'grigio',
      sesso: 'maschio'
    },
    {
      nome: 'Lilly',
      eta: 6,
      colore: 'crema',
      sesso: 'femmina'
    },
    {
      nome: 'Garfield',
      eta: 5,
      colore: 'tigrato',
      sesso: 'maschio'
    },
    {
      nome: 'Silvestro',
      eta: 15,
      colore: 'nero',
      sesso: 'maschio'
    },
    {
      nome: 'Birba',
      eta: 3,
      colore: 'arancione',
      sesso: 'femmina'
    },
    {
      nome: 'Fifi',
      eta: 1,
      colore: 'rosa',
      sesso: 'femmina'
    }
  ];

  // ciclo l'array con forEach e stampo colore e nome su HTML
  cats.forEach((item) => {
    $('#cats').append(`<li>${item.colore}, ${item.nome} </li>`)
  });

});
