var finalSandwichPrice = 0;

// Variable to hold topping that the user selects
var selectedTopping;
var price = 0;

// Get a reference to the <select> element that has all the meat options
var meat = document.getElementById("meat");
var bread = document.getElementById("bread");
var cheese = document.getElementById("cheese");
var veggies = document.getElementById("veggie");
var condiments = document.getElementById("condiment");
var submit = document.getElementById("submit");
var display = document.getElementById("display");

/*
  A <select> element broadcasts a change event, so you listen for it
  and get the value of the topping from your augmented IIFE
*/

submit.addEventListener("click", (event) => {
  var priceOfSandwich = SandwichMaker.getSandwich();
  display.innerHTML = priceOfSandwich + "<br>$" + finalSandwichPrice;
});

meat.addEventListener('change', (event) => {
  // Get the value chosen from the DOM
  selectedTopping = event.target.value;
  priceOfMeat = SandwichMaker.addMeat(selectedTopping);
  finalSandwichPrice += priceOfMeat;
  SandwichMaker.addTopping(price, selectedTopping);
});

bread.addEventListener('change', (event) => {
  selectedTopping = event.target.value;
  priceOfBread = SandwichMaker.addBread(selectedTopping);
  finalSandwichPrice += priceOfBread;
  SandwichMaker.addTopping(price, selectedTopping);
});

cheese.addEventListener('change', (event) => {
  selectedTopping = event.target.value;
  priceOfCheese = SandwichMaker.addCheese(selectedTopping);
  finalSandwichPrice += priceOfCheese;
  SandwichMaker.addTopping(price, selectedTopping);
});

veggies.addEventListener('change', (event) => {
  selectedTopping = event.target.value;
  priceOfVeggies = SandwichMaker.addVeggie(selectedTopping);
  finalSandwichPrice += priceOfVeggies;
  SandwichMaker.addTopping(price, selectedTopping);
});

condiments.addEventListener('change', (event) => {
  selectedTopping = event.target.value;
	priceOfCondiments = SandwichMaker.addCondiment(selectedTopping);
  finalSandwichPrice += priceOfCondiments;
  SandwichMaker.addTopping(price, selectedTopping);
});