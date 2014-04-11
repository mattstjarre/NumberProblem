var ONES = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
var TEEN = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
var TENS = ["", "", "twenty", "thirty", "fourty", "fifty", "sixty", "seventy", "eighty", "ninety"];
var PLACE = ["hundred", "thousand", "million", "billion", "trillion", "quadrillion", "quintillion", "sextillion", "septillion", "octillion", "nonillion", "decillion", "undecillion", "duodecillion", "tredecillion", "quattuordecillion", "quindecillion", "sexdecillion", "septendecillion", "octodecillion", "novemdecillion", "viginitillion", "centillion"];

var Money = function(money) {
	var temp = money.replace(/^0+/, '').split('.');
	this.dollarIntArray = temp[0].split('').reverse();
	this.dollarStrArray = [];
	this.centsString = parseFloat('.' + temp[1]) * 100 + "/100";
	this.skip = false;
	return this;
};

Money.prototype.convert = function() {
	var prevv, prev, curr, next;

	for (var i = this.dollarIntArray.length - 1; i >= 0; i--) {
		prevv = this.dollarIntArray[i + 2];
		prev = this.dollarIntArray[i + 1];
		curr = this.dollarIntArray[i];
		next = this.dollarIntArray[i - 1];

		// Decide if you're at ones tens or hundreds place
		if (i % 3 == 0) {
			this.evalulateOnes(i, curr, prev, prevv);
		} else if (i % 3 == 1) {
			this.evaluateTens(next, curr);
		} else {
			this.evaluateHundreds(curr);
		}
	}

	return this;
};

Money.prototype.addToString = function(text) {
	if (text !== null || text !== '') {
		this.dollarStrArray.push(text);
	}
};

Money.prototype.evalulateOnes = function(place, curr, prev, prevv) {
	// Reset skip if prev was teen, or add in ones
	this.skip ? this.skip = false : curr != 0 && (this.addToString(ONES[curr]));
	// Make sure you're not repeating empty places
	if (place / 3 != 0) {
		if (curr + prev + prevv != 0) {
			this.addToString(PLACE[place / 3]);
		}
	}
};

Money.prototype.evaluateTens = function(next, curr, skip) {
	// If it's a teen, add it in and skip next
	if (curr == 1) {
		this.addToString(TEEN[next]);
		this.skip = true;
		// Otherwise, business as usual with tens place
	} else if (curr != 0) {
		// If next isn't 0, add hyphen
		if (next != 0){
			this.addToString(TENS[curr] + "-" + ONES[next]);
			this.skip = true;
		} else {
			this.addToString(TENS[curr]);
		}
	}
};

Money.prototype.evaluateHundreds = function(curr) {
	if (curr != 0) {
		this.addToString(ONES[curr]);
		this.addToString(PLACE[0]);
	}
};
