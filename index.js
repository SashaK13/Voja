
// Napisati funkciju koja vraca jednu random boju iz niza
const colors = ['red','green','blue','violet','yellow'];

function getRandomColor() {
  let randomColor = Math.floor(Math.random() * colors.length);
  console.log('Random color from array is: ' + colors[randomColor]);
  return randomColor;
};

getRandomColor();

// Nasla sam resenje ali svakako razumem zasto je tako napisano.
//Spaja random brojeve da bi predstavio jednu od boja.
const hex = Math.floor(Math.random()*16777215).toString(16);

function getRandomHex() {
  console.log(hex);
  return hex;
};

getRandomHex();
