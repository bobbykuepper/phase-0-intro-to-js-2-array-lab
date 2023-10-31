// index.js

const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(Ralph) {
  cats.push(Ralph);
}

function destructivelyPrependCat(Bob) {
  cats.unshift(Bob);
}

function destructivelyRemoveLastCat() {
  cats.pop();
}

function destructivelyRemoveFirstCat() {
  cats.shift();
}

function appendCat(Broom) {
  const newCats = [...cats, Broom];
  return newCats;
}

function prependCat(Arnold) {
  const newCats = [Arnold, ...cats];
  return newCats;
}

function removeLastCat() {
  const newCats = cats.slice(0, -1);
  return newCats;
}

function removeFirstCat() {
  const newCats = cats.slice(1);
  return newCats;
}
