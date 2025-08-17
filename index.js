const formContainer = document.getElementById("app");

const form = document.createElement("form");
form.setAttribute("label", "bank-form");
form.appendChild(form);

formContainer.appendChild(form);

const bankLabel = document.createElement("label");
bankLabel.textContent = "Bank:";
form.appendChild(bankLabel);

const oddsLabel = document.createElement("label");
oddsLabel.textContent = "Odds:";
form.appendChild(oddsLabel);

renderformContainer(form);
