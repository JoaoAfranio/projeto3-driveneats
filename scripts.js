function getSelectedItems() {
  let food = document.querySelector("input[name=food]:checked");
  let drink = document.querySelector("input[name=drink]:checked");
  let dessert = document.querySelector("input[name=dessert]:checked");

  let foodLabel = document.querySelector("label[for='" + food.id + "']");
  let drinkLabel = document.querySelector("label[for='" + drink.id + "']");
  let dessertLabel = document.querySelector("label[for='" + dessert.id + "']");

  let foodName = foodLabel.getElementsByClassName("food-name")[0].textContent;
  let foodPrice = foodLabel.getElementsByClassName("food-price")[0].textContent;

  let drinkName = drinkLabel.getElementsByClassName("food-name")[0].textContent;
  let drinkPrice =
    drinkLabel.getElementsByClassName("food-price")[0].textContent;

  let dessertName =
    dessertLabel.getElementsByClassName("food-name")[0].textContent;
  let dessertPrice =
    dessertLabel.getElementsByClassName("food-price")[0].textContent;

  return [
    [foodName, foodPrice],
    [drinkName, drinkPrice],
    [dessertName, dessertPrice],
  ];
}

function sendRequest() {
  food = getSelectedItems();

  foodName = food[0][0];
  foodPrice = food[0][1];

  drinkName = food[1][0];
  drinkPrice = food[1][1];

  dessertName = food[2][0];
  dessertPrice = food[2][1];

  priceTotal = sumPrice(foodPrice, drinkPrice, dessertPrice);

  let namePerson = prompt("Digite seu nome: ");
  let adress = prompt("Digite seu endereco: ");

  sendMessage(foodName, drinkName, dessertName, priceTotal, namePerson, adress);
}

function fixPrice(price) {
  return parseFloat(price.split("$")[1].trim().replace(",", "."));
}

function sumPrice(foodPrice, drinkPrice, dessertPrice) {
  return (
    fixPrice(foodPrice) +
    fixPrice(drinkPrice) +
    fixPrice(dessertPrice)
  ).toFixed(2);
}

function sendMessage(
  foodName,
  drinkName,
  dessertName,
  price,
  namePerson,
  adress
) {
  let text =
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
    price +
    "\n" +
    "Nome: " +
    namePerson +
    "\n" +
    "Endereco: " +
    adress +
    "\n";
  let encodeText = encodeURIComponent(text);

  location.href = "https://wa.me/5534996632502?text=" + encodeText;
}

function displayModaL() {
  food = getSelectedItems();

  foodName = food[0][0];
  foodPrice = food[0][1];

  drinkName = food[1][0];
  drinkPrice = food[1][1];

  dessertName = food[2][0];
  dessertPrice = food[2][1];

  totalPrice = sumPrice(foodPrice, drinkPrice, dessertPrice);

  document.getElementById("food-selected").innerHTML = foodName;
  document.getElementById("food-selected-price").innerHTML = foodPrice;

  document.getElementById("drink-selected").innerHTML = drinkName;
  document.getElementById("drink-selected-price").innerHTML = drinkPrice;

  document.getElementById("dessert-selected").innerHTML = dessertName;
  document.getElementById("dessert-selected-price").innerHTML = dessertPrice;

  document.getElementById("total-price").innerHTML = "R$ " + totalPrice;

  document.getElementsByClassName("modal")[0].style.display = "flex";
}

function hiddenModal() {
  document.getElementsByClassName("modal")[0].style.display = "none";
}

var food = 0;
var drink = 0;
var dessert = 0;

function verifySelectedItems(item) {
  console.log(food);
  console.log(item.name);
  window[item.name] = 1;

  console.log(food);

  if (food == 1 && drink == 1 && dessert == 1) {
    document.getElementById("button-request").style.background = "#32B72F";
    document.getElementById("button-request").style.fontWeight = "700";
    document.getElementById("button-request").innerHTML = "Fechar Pedido";

    document.getElementById("button-request").disabled = false;
  }
}

let inputListener = document.querySelectorAll("input").forEach((item) => {
  item.addEventListener("click", (event) => {
    verifySelectedItems(item);
  });
});
