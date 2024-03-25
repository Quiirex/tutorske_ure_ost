// Razred v JavaScriptu je vrsta funkcije, ki se uporablja za ustvarjanje objektov.
// Razredi v JavaScriptu so uporabni za ustvarjanje objektov z enakimi lastnostmi in metodami.
// Razredi so uporabni za ponovno uporabo kode in organizacijo kode.
// Razredi v JavaScriptu so "syntactic sugar" za prototipno dedovanje.
// Razredi v JavaScriptu so uvedeni v ECMAScript 6 (ES6).

class Avto {
  // Konstruktor je posebna metoda, ki se uporablja za inicializacijo objekta.
  constructor(znamka, model, leto) {
    this.znamka = znamka;
    this.model = model;
    this.leto = leto;
  }

  // Metode so funkcije, ki so definirane znotraj razreda.
  podatkiAvta() {
    return this.znamka + ' ' + this.model + ', letnik ' + this.leto;
  }
}

// Ustvarimo nov objekt tipa Avto.
let mojAvto = new Avto('Toyota', 'Corolla', 2005);

// Kličemo metodo na objektu.
console.log(mojAvto.podatkiAvta()); // Izpiše: "Toyota Corolla, letnik 2005"

// Razširimo razred Avto z razredom ElektricniAvto.
class ElektricniAvto extends Avto {
  constructor(znamka, model, leto, avtonomija) {
    // Kličemo konstruktor nadrazreda.
    super(znamka, model, leto);
    // Dodamo novo lastnost.
    this.avtonomija = avtonomija;
  }

  // Prepišemo metodo iz nadrazreda.
  podatkiAvta() {
    return super.podatkiAvta() + ', avtonomija ' + this.avtonomija + ' km';
  }
}

// Ustvarimo nov objekt tipa ElektricniAvto.
let mojElektricniAvto = new ElektricniAvto('Tesla', 'Model S', 2020, 600);

// Kličemo metodo na objektu.
console.log(mojElektricniAvto.podatkiAvta()); // Izpiše: "Tesla Model S, letnik 2020, avtonomija 600 km"
