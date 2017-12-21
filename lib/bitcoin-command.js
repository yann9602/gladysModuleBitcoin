module.exports = function command(scope) {
	
	switch(scope.label) {
        case 'bitcoin':
			// Make an HTTP request to get Bitcoin price
            gladys.utils.request('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then((result) => {
                var currentPrice = Math.trunc(result.bpi.EUR.rate_float);
                gladys.modules.speak.say({language: 'fr', text: "Le cours du bitcoin est de" + currentPrice});
                var message = `BitCoin Current price is ${currentPrice} !`;
                console.log(message);
            });
        break;       
        default:
        break;
    }
};