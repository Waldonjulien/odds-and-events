const bank = [];
const odds = [];
const evens = [];

const form = document.createElement("form");
form.id = "numberForm";

form.innerHTML = `Add a number to the bank: <input type="number" id="numberInput" required>
<button type="submit">Add</button>
<button type="submit">Sort1</button>
<button type="submit">SortAll</button>
`;
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const action = event.submitter.textContent;
  const input = form.querySelector("#numberInput");
  const value = Number(input.value);
  if (action === "Add" && input.value) {
    addToBank(value);
    input.value = "";
  } else if (action === "Sort1" && input.value) {
    sort1(value);
    input.value = "";
  } else if (action === "SortAll") {
    sortAll();
  }
  return [];
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
  });
  render();
}

function sortList() {
  const bankList = document.createElement("div");
  bankList.innerHTML = `<h2>Bank</h2>;`;
  bankList.bankList.classList.add("bank-list");
  bankList.innerHTML = `<h2>Bank</h2><p>${bank.join(", ")}</p>`;

  const evensList = document.createElement("div");
  evensList.innerHTML = `<h2>Evens</h2><p>${evens.join(", ")}</p>`;

  const oddsList = document.createElement("div");
  oddsList.innerHTML = `<h2>Odds</h2><p>${odds.join(", ")}</p>`;
}
render();

function render() {
  const app = document.querySelector("#app");

  app.innerHTML = "";
  const heading = document.createElement("h1");
  heading.textContent = "Odds and Evens";
  app.appendChild(heading);
  app.appendChild(form);

  const bankDiv = document.createElement("div");
  bankDiv.className = "bank-list";
  bankDiv.innerHTML = `<h2>Bank</h2>
    <input type="text" placeholder="Bank input" />
    <p>${bank.join(", ")}</p>`;
  app.appendChild(bankDiv);

  const evensDiv = document.createElement("div");
  evensDiv.className = "evens-list";
  evensDiv.innerHTML = `<h2>Evens</h2>
    <input type=[] input" />
    <p>${evens.join(", ")}</p>`;
  app.appendChild(evensDiv);

  const oddsDiv = document.createElement("div");
  oddsDiv.className = "odds-list";
  oddsDiv.innerHTML = `<h2>Odds</h2>
    <input type="text" placeholder="Odds input" />
    <p>${odds.join(", ")}</p>`;
  app.appendChild(oddsDiv);
}

render();
