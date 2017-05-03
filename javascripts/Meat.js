// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var meatPrices = {'ham': 1.00, 'turkey': 1.25, 'roast-beef': 1.50};

  // Augment the original object with another method
  maker.addMeat = function(meat) {
  	var priceOfMeat = 0;
  	for (type in meatPrices) {
  		if (meat == type) {
  			priceOfMeat = meatPrices[type];
  		}
  	}
    return priceOfMeat;
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});