var SandwichMaker = (function(maker) {

  var condimentPrices = {'ketchup': 0, 'mustard': 0, 'mayo': 0};

  maker.addCondiment = function(condiment) {
  	var priceOfCondiment = 0;
  	for (type in condimentPrices) {
  		if (condiment == type) {
  			priceOfCondiment = condimentPrices[type];
  		}
  	}

    return priceOfCondiment;

  };

  return maker;

})(SandwichMaker || {});