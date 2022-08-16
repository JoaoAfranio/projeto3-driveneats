let foodName;
let foodPrice;

let drinkName;
let drinkPrice;

let dessertName;
let dessertPrice;

let priceTotal;

function getSelectedItems() {
  const food = document.querySelector("input[name=food]:checked");
  const drink = document.querySelector("input[name=drink]:checked");
  const dessert = document.querySelector("input[name=dessert]:checked");

  const foodLabel = document.querySelector("label[for='" + food.id + "']");
  const drinkLabel = document.querySelector("label[for='" + drink.id + "']");
  const dessertLabel = document.querySelector(
    "label[for='" + dessert.id + "']"
  );

  foodName = foodLabel.getElementsByClassName("food-name")[0].textContent;
  foodPrice = foodLabel.getElementsByClassName("food-price")[0].textContent;

  drinkName = drinkLabel.getElementsByClassName("food-name")[0].textContent;
  drinkPrice = drinkLabel.getElementsByClassName("food-price")[0].textContent;

  dessertName = dessertLabel.getElementsByClassName("food-name")[0].textContent;
  dessertPrice =
    dessertLabel.getElementsByClassName("food-price")[0].textContent;
}

function sendRequest() {
  const namePerson = prompt("Digite seu nome: ");
  const adress = prompt("Digite seu endereco: ");

  sendMessage(namePerson, adress);
}

function fixPrice(price) {
  return parseFloat(price.split("$")[1].trim().replace(",", "."));
}

function sumPrice() {
  priceTotal = (
    fixPrice(foodPrice) +
    fixPrice(drinkPrice) +
    fixPrice(dessertPrice)
  ).toFixed(2);
}

function sendMessage(namePerson, adress) {
  const text =
    " Olá, gostaria de fazer o pedido: \n" +
    "- Prato: " +
    foodName +
    "\n" +
    "- Bebida: " +
    drinkName +
    "\n" +
    "- Sobremesa: " +
    dessertName +
    "\n" +
    "Total: " +
    priceTotal +
    "\n" +
    "Nome: " +
    namePerson +
    "\n" +
    "Endereco: " +
    adress +
    "\n";
  const encodeText = encodeURIComponent(text);

  location.href = "https://wa.me/5534996632502?text=" + encodeText;
}

function displayModaL() {
  document.getElementById("food-selected").innerHTML = foodName;
  document.getElementById("food-selected-price").innerHTML = foodPrice;

  document.getElementById("drink-selected").innerHTML = drinkName;
  document.getElementById("drink-selected-price").innerHTML = drinkPrice;

  document.getElementById("dessert-selected").innerHTML = dessertName;
  document.getElementById("dessert-selected-price").innerHTML = dessertPrice;

  document.getElementById("total-price").innerHTML = "R$ " + priceTotal;

  document.getElementsByClassName("modal")[0].style.display = "flex";
}

function hiddenModal() {
  document.getElementsByClassName("modal")[0].style.display = "none";
}

function verifySelectedItems() {
  getSelectedItems();
  if (
    foodName !== undefined &&
    drinkName !== undefined &&
    dessertName !== undefined
  ) {
    sumPrice();
    const button = document.getElementById("button-request");

    button.classList.add("active");
    button.innerHTML = "Fechar Pedido";
    button.disabled = false;
  }
}

const inputListener = document.querySelectorAll("input").forEach((item) => {
  item.addEventListener("click", () => {
    verifySelectedItems(item);
  });
});
