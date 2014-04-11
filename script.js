var formatString = function(money) {
	var string = "";

	for (i in money.dollarStrArray) {
		string += money.dollarStrArray[i] + " ";
	}

	if (money.dollarIntArray.length === 0) {
		return money.centsString + " dollars.";
	} else {
		string += "and " + money.centsString + " dollars.";
		return string.capFirst();
	}
};

var printString = function(text) {
	if (text.match(/^([1-9][0-9]|[0-9]*)+(?:\.\d{1,2})$/)) {
		var money = new Money(text);
		return formatString(money.convert());
	} else {
		return "Syntax Problem";
	}
};

String.prototype.capFirst = function() {
	return this.charAt(0).toUpperCase() + this.slice(1);
};
