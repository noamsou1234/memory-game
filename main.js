const cards = [
  { name: "A" },
  { name: "B" },
  { name: "C" },
  { name: "A" },
  { name: "B" },
  { name: "C" },
];

function randomRange(a, b) {
  return Math.floor(a + Math.random() * (b - a));
}

function random(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function shuffle(arr) {
  for (let i = 0; i < 100; i++) {
    let a1 = randomRange(0, arr.length);
    let a2 = randomRange(0, arr.length);
    if (a1 == a2) {
      i--;
      continue;
    }
    random(arr, a1, a2);
  }
}

function main() {
  console.log([...cards]);
  shuffle(cards);
  console.log(cards);
}

function match(i, j) {
  return i != j && arr[i].name == arr[j].name;
}

function deleteC(i, j) {
  if (match(i, j)) {
    cards.splice[i];
    cards.splice[j];
  }
}

main();

deleteC(0, 2);
