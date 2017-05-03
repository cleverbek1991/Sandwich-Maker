var SandwichMaker = (function(maker) {

  var cheesePrices = {'swiss': 2.00, 'cheddar': 1.25, 'american': 1.75};

  maker.addCheese = function(cheese) {
  	var priceOfCheese = 0;
  	for (type in cheesePrices) {
  		if (cheese == type) {
  			priceOfCheese = cheesePrices[type];
  		}
  	}

    return priceOfCheese;

  };

  return maker;

})(SandwichMaker || {});