// Funkcija je blok kode, ki izvaja določeno nalogo.
// Funkcije v JavaScriptu so objekti.

// Definicija funkcije
function pozdravi() {
  console.log('Pozdravljen, svet!');
}

// Klic funkcije
pozdravi();

// Funkcija z argumenti
function seštej(a, b) {
  return a + b;
}

// Klic funkcije z argumenti
console.log(seštej(5, 3)); // Izpiše 8

// Funkcija z privzetimi vrednostmi
function pozdraviOsebo(ime = 'Anonimnež') {
  console.log('Pozdravljen, ' + ime + '!');
}

// Klic funkcije z privzeto vrednostjo
pozdraviOsebo(); // Izpiše "Pozdravljen, Anonimnež!"
pozdraviOsebo('Luka'); // Izpiše "Pozdravljen, Luka!"

// Anonimna funkcija
var kvadrat = function (x) {
  return x * x;
};

// Klic anonimne funkcije
console.log(kvadrat(5)); // Izpiše 25

// Puščična funkcija
var kub = (x) => x * x * x;

// Klic puščične funkcije
console.log(kub(3)); // Izpiše 27

// Rekurzivna funkcija
function fakulteta(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * fakulteta(n - 1);
  }
}

// Klic rekurzivne funkcije
console.log(fakulteta(5)); // Izpiše 120

// Funkcija znotraj funkcije
function zunanjaFunkcija(x) {
  function notranjaFunkcija(y) {
    return x + y;
  }
  return notranjaFunkcija;
}

// Klic funkcije znotraj funkcije
var notranja = zunanjaFunkcija(5);
console.log(notranja(3)); // Izpiše 8

// Funkcija kot argument
function operacija(a, b, funkcija) {
  return funkcija(a, b);
}

// Klic funkcije z funkcijo kot argument
console.log(operacija(5, 3, seštej)); // Izpiše 8

// Funkcija kot vrednost
function izvedi(funkcija) {
  return funkcija();
}

// Klic funkcije z funkcijo kot vrednost
console.log(izvedi(pozdravi)); // Izpiše "Pozdravljen, svet!"

// Metoda
var objekt = {
  ime: 'Luka',
  pozdravi: function () {
    console.log('Pozdravljen, ' + this.ime + '!');
  },
};

// Klic metode
objekt.pozdravi(); // Izpiše "Pozdravljen, Luka!"
