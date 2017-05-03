var SandwichMaker = (function(maker) {

  var breadPrices = {'white': 1.25, 'wheat': 1.75, 'italian': 1.50};

  maker.addBread = function(bread) {
  	var priceOfBread = 0;
  	for (type in breadPrices) {
  		if (bread == type) {
  			priceOfBread = breadPrices[type];
  		}
  	}

    return priceOfBread;

  };

  return maker;

})(SandwichMaker || {});