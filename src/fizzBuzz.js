var FizzBuzz = function(){};

FizzBuzz.prototype.isDividableBy = function(number, divider){
	if(number % divider === 0){
		return true;
	} else {
		return false;
	};
};

FizzBuzz.prototype.print = function(number){
	if (this.isDividableBy(number, 15)) {
		return 'fizzbuzz'
	} else if (this.isDividableBy(number, 3)){
		return 'fizz'
	} else if (this.isDividableBy(number, 5)) {
		return 'buzz'
	}	else {
		return number;
	};
};
