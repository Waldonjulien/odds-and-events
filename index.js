const bank = [];
const odds = [];
const evens = [];

const form = document.createElement("form");
form.innerHTML = `Add a number to the bank: <input type="number" id="numberInput" required>
<button type="submit">Add</button>
<button type="submit">Sort1</button>
<button type="submit">SortAll</button>
`;
form.addEventListener("submit", (event) => {
  event.preventDefualt();
});

function addToBank(number) {
  bank.push(number);
  render();
}

function sort1(number) {
  if (number % 2 === 0) {
    evens.push(number);
  } else if (number % 2 !== 0) {
    odds.push(number);
  }

  render();
}

function sortAll() {
  bank.forEach((number) => {
    if (number % 2 === 0) {
      evens.push(number);
    } else {
      odds.push(number);
    }
    render();
  });
}
