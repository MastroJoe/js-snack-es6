// Milestone 1
// Definire un array di oggetti; ogni oggetto rappresenta un gatto, che è caratterizzato da:
 // nome, età, colore e sesso.
// Tramite la funzione .forEach(), stampare in pagina tutti i gattini, ciascuno con il
// proprio colore e il proprio nome.
// Milestone 2
// Dividere i gatti in due contenitori distinti in base al sesso e
// aggiungere a fianco di ogni gattino un fiocco colorato di rosa, se Femmina,
// o di blu, se Maschio.
// Il colore del fiocco deve essere più tenue se il gatto è più giovane, più scuro
// se il gatto è più vecchio.
// Milestone 3
// Creare un nuovo array con prima tutti i gattini Femmina e poi tutti i gattini Maschio,
// inserendo solamente nome e colore
// e colore e opacità del fiocco per ogni gatto.


$(document).ready(function (){
  // Milestone 1
  // creo array di oggetti
  const cats = [
    {
      nome: 'Tom',
      eta: 2,
      colore: 'grigio',
      sesso: 'Maschio'
    },
    {
      nome: 'Lilly',
      eta: 6,
      colore: 'crema',
      sesso: 'Femmina'
    },
    {
      nome: 'Garfield',
      eta: 5,
      colore: 'tigrato',
      sesso: 'Maschio'
    },
    {
      nome: 'Silvestro',
      eta: 15,
      colore: 'nero',
      sesso: 'Maschio'
    },
    {
      nome: 'Birba',
      eta: 8,
      colore: 'arancione',
      sesso: 'Femmina'
    },
    {
      nome: 'Fifi',
      eta: 1,
      colore: 'rosa',
      sesso: 'Femmina'
    }
  ];
  console.log(cats);

  // ciclo l'array con forEach e stampo colore e nome su HTML
  cats.forEach((item) => {
    $('#cats').append(`<li>${item.colore}, ${item.nome} </li>`)
    console.log(`${item.colore}, ${item.nome}`);
  });

  // Milestone 2
  // filtro array Cats in base al sesso e stampo anche su HTML
  const maleCats = cats.filter((item) => item.sesso == 'Maschio');
  const femaleCats = cats.filter((item) => item.sesso == 'Femmina');
  console.log(maleCats);
  console.log(femaleCats);

  // ciclo gli array con forEach per verificare il sesso
  cats.forEach((item) => {
    if (item.sesso == 'Maschio' && item.eta <= 5) {
    $('#cats-gender').append(`<li class="blue giovane">${item.nome}, ${item.sesso} <i class="fas fa-ribbon"></i></li>`)
  } else if (item.sesso == 'Maschio' && item.eta > 5) {
    $('#cats-gender').append(`<li class="blue adulto">${item.nome}, ${item.sesso} <i class="fas fa-ribbon"></i></li>`)
  } else if (item.sesso == 'Femmina' && item.eta <= 5) {
    $('#cats-gender').append(`<li class="pink giovane">${item.nome}, ${item.sesso} <i class="fas fa-ribbon"></i></li>`)
  } else if (item.sesso == 'Femmina' && item.eta > 5) {
    $('#cats-gender').append(`<li class="pink adulto">${item.nome}, ${item.sesso} <i class="fas fa-ribbon"></i></li>`)
  }
  });

  // Milestone 3
  // con Spread unisco gli array del gender, prima le Femmine poi i Maschi
  const catsMix = [...femaleCats, ...maleCats];
  console.log(catsMix);

  catsMix.forEach((item) => {
    if (item.sesso == 'Maschio' && item.eta <= 5) {
    $('#cats-mix').append(`<li class="blue giovane">${item.nome}, ${item.colore} <i class="fas fa-ribbon"></i></li>`)
  } else if (item.sesso == 'Maschio' && item.eta > 5) {
    $('#cats-mix').append(`<li class="blue adulto">${item.nome}, ${item.colore} <i class="fas fa-ribbon"></i></li>`)
  } else if (item.sesso == 'Femmina' && item.eta <= 5) {
    $('#cats-mix').append(`<li class="pink giovane">${item.nome}, ${item.colore} <i class="fas fa-ribbon"></i></li>`)
  } else if (item.sesso == 'Femmina' && item.eta > 5) {
    $('#cats-mix').append(`<li class="pink adulto">${item.nome}, ${item.colore} <i class="fas fa-ribbon"></i></li>`)
  }
  });

  const newCats = catsMix.map((item, index, array) => {
    const {nome, colore} = item;

    let opacita;
    if (item.eta <= 5) {
      opacita = 'chiara';
    } else {
      opacita = 'scura';
    }

    let fiocco;
    if (item.sesso == 'Maschio') {
      fiocco = 'azzurro';
    } else if (item.sesso == 'Femmina'){
      fiocco = 'rosa';
    }

    let obj = {
      nome,
      colore,
      opacita,
      fiocco
    }

    return obj;
  })
  console.log(newCats);
});
