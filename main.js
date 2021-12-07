const cards = [
  { name: "A" },
  { name: "B" },
  { name: "C" },
  { name: "D" },
  { name: "E" },
  { name: "F" },
  { name: "G" },
  { name: "H" },
  { name: "I" },
  { name: "J" },
  { name: "K" },
  { name: "L" },
  { name: "A" },
  { name: "B" },
  { name: "C" },
  { name: "D" },
  { name: "E" },
  { name: "F" },
  { name: "G" },
  { name: "H" },
  { name: "I" },
  { name: "J" },
  { name: "K" },
  { name: "L" },
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

let arrCards = [];

const cardClicked = (evn) => {
  // console.log(evn.target.innerHTML);
  const cardE1 = evn.target;
  const idx = cardE1.id;
  cardE1.innerHTML = cards[idx].name;
  arrCards.push(cards[idx]);
  console.log(arrCards);
  if (arrCards === 2) {
  }
};

function createCardElement(idx) {
  const board = document.getElementById("board");
  const cardE1 = document.createElement("div");
  //<div></div>
  // cardE1.innerHTML = card.name;
  cardE1.id = idx;
  //<div></div>
  cardE1.className = "card";
  //div class = 'card'
  // cardE1.addEventListener("click", f);
  cardE1.onclick = cardClicked;

  board.appendChild(cardE1);
  //<div id = board>
  //<div class = 'card' >C></div>
  // </div>
}

function main() {
  // console.log([...cards]);
  shuffle(cards);
  for (let idx in cards) {
    createCardElement(idx);
  }
  // console.log(cards);
}

main();

function match(i, j) {
  return i != j && arr[i].name == arr[j].name;
}

function deleteC(i, j) {
  if (match(i, j)) {
    cards.splice[i];
    cards.splice[j];
  }
}

deleteC(0, 2);

window.onload = () => {
  // main();
};
