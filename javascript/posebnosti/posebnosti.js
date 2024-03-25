// 1. JavaScript je dinamično tipiziran jezik. To pomeni, da lahko ista spremenljivka vsebuje različne tipe podatkov.
let variable = 'Hello, World!'; // String
variable = 42; // Number

// 2. JavaScript ima "truthy" in "falsy" vrednosti. To pomeni, da se nekatere vrednosti, ki niso strogo true ali false, obnašajo kot true ali false.
if (0) {
  // Ta blok se ne bo izvedel, ker je 0 "falsy" vrednost.
}

// 3. JavaScript uporablja prototipno dedovanje namesto klasičnega dedovanja na osnovi razredov.
let obj = { a: 1 };
let obj2 = Object.create(obj);
obj2.a; // 1

// 4. JavaScript ima koncept "hoisting", kar pomeni, da se deklaracije spremenljivk in funkcij "dvignejo" na vrh njihovega obsega.
console.log(x); // undefined, ne napaka
var x = 5;

// 5. JavaScript ima dve enakosti: == in ===. Prva preverja enakost z avtomatsko konverzijo tipov, druga preverja strogo enakost brez konverzije tipov.
1 == '1'; // true
1 === '1'; // false

// 6. JavaScript ima posebno vrednost NaN (Not a Number), ki je edina vrednost v jeziku, ki ni enaka sama sebi.
NaN == NaN; // false

// 7. JavaScript ima tri logične operacije: AND (&&), OR (||) in NOT (!).
true && false; // false
true || false; // true
!true; // false

// 8. JavaScript ima tri vrste zank: for, while in do...while.
for (let i = 0; i < 5; i++) {
  console.log(i);
}

let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

let j = 0;
do {
  console.log(j);
  j++;
} while (j < 5);

// 9. JavaScript ima tri vrste funkcij: funkcije, ki so deklarirane z besedo ključnico function, funkcije, ki so deklarirane z besedo ključnico arrow (=>) in anonimne funkcije.
function greet(name) {
  return 'Hello, ' + name + '!';
}

let greetArrow = (name) => {
  return `Hello, ${name}!`;
};

let greetAnon = function (name) {
  return 'Hello, ' + name + '!';
};

// 10. JavaScript ima dva načina definiranja objektov: objektne dobesedne zapiske in konstruktorje objektov.
let objLiteral = { key: 'value' };

function ObjConstructor(key) {
  this.key = key;
}

let objInstance = new ObjConstructor('value');

// 11. JavaScript ima dva načina za obdelavo napak: izjave try...catch in metoda .catch() pri obljubah.
try {
  throw new Error('Something went wrong');
} catch (error) {
  console.error(error);
}

new Promise((resolve, reject) => {
  reject('Something went wrong');
}).catch((error) => {
  console.error(error);
});

// 12. JavaScript ima dva načina za obdelavo asinhronih operacij: izjave async...await in veriženje obljub.
async function fetchData() {
  let response = await fetch('https://api.example.com/data');
  let data = await response.json();
  return data;
}

fetch('https://api.example.com/data')
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

// 13. JavaScript ima dva načina za manipulacijo DOM-a: uporaba metode document.querySelector() in uporaba jQuery knjižnice.
document.querySelector('#elementId').style.color = 'red';

$('#elementId').css('color', 'red');

// 14. JavaScript ima dva načina za manipulacijo CSS lastnosti: neposredno spreminjanje lastnosti elementa in dodajanje/odstranjevanje razredov.
document.querySelector('#elementId').style.color = 'red';

document.querySelector('#elementId').classList.add('redText');

// 15. JavaScript ima dva načina za manipulacijo dogodkov: uporaba metode addEventListener() in uporaba atributa onEvent.
document.querySelector('#elementId').addEventListener('click', () => {
  console.log('Element clicked');
});

<button onclick="console.log('Button clicked')">Click me</button>;

// 16. JavaScript ima dva načina za manipulacijo lokalnega pomnilnika brskalnika: uporaba localStorage in sessionStorage.
localStorage.setItem('key', 'value');
let value = localStorage.getItem('key');

// 17. JavaScript je poseben, ko pride do primerjav vrednosti, ki niso strogo enake.
typeof NaN; // "number"

null == undefined; // true

[] == []; // false

'1' == 1; //true

Number('1') === 1; //true

'' == 0; //true

0 == '0'; //true

'' == '0'; //false

0.0 === 0; //true

parseInt('8'); //8

parseInt('08'); //0

'3' - '1'; // 2

3 + ''; // "3"

typeof {} === 'object'; //true

typeof '' === 'string'; //true

typeof [] === 'array'; //false

'hello' instanceof String; //false

new String('hello') instanceof String; //true

['item1', 'item2'] instanceof Array; //true

new Array('item1', 'item2') instanceof Array; //true

Math.max(); // -Infinity

Math.min(); // Infinity

typeof new Number(123); // "object"

typeof Number(123); // "number"

typeof 123; // "number"

2 + 2; // 4

'2' + '2'; // "22"

2 + 2 - 2; // 2

2 + 2 + '2'; // "42"

'2' + '2' - '2'; // 20
