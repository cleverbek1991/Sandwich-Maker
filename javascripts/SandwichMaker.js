var SandwichMaker = (function(makeIt) {

  // Private variable to store the price
  var totalPrice = 0;
  var toppings = [];

  // Return the public interface that other code can interact with

    makeIt.addTopping = function(toppingPrice, topping) {
      totalPrice += toppingPrice;
      toppings.push(topping);
      return toppings;
    };

    makeIt.getSandwich = function() {
    	return toppings.reduce(function(a, b) {
    		return a + ', ' + b;
    	});
    };

    makeIt.getPrice = function() {
    	return totalPrice;
    };
    return makeIt;
})(SandwichMaker || {});