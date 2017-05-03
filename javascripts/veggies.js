var SandwichMaker = (function(maker) {

  var veggiePrices = {'tomato': 0, 'lettuce': 0, 'onion': 0};

  maker.addVeggie = function(veggie) {
  	var priceOfVeggie = 0;
  	for (type in veggiePrices) {
  		if (veggie == type) {
  			priceOfVeggie = veggiePrices[type];
  		}
  	}

    return priceOfVeggie;

  };

  return maker;

})(SandwichMaker || {});