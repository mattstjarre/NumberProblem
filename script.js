var ONES = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
var TEEN = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
var TENS = ["", "", "twenty", "thirty", "fourty", "fifty", "sixty", "seventy", "eighty", "ninety"];
var PLACE = ["hundred", "thousand", "million", "billion", "trillion", "quadrillion", "quintillion", "sextillion", "septillion",
    "octillion", "nonillion", "decillion", "undecillion", "duodecillion", "tredecillion", "quattuordecillion", "quindecillion",
    "sexdecillion", "septendecillion", "octodecillion", "novemdecillion", "viginitillion", "centillion"];

/**
 * Function for checking pattern of input. If the pattern does not follow
 * [0-9]*.[0-9][0-9]|[0-9] format, then return an error.
 *
 * @param   {String}    text is the number that will be tested for conversion
 * @return  {Boolean}   calls convert function if passed, otherwise, returns
 *                      error.
 */
function check(text) {
    if (text.match(/^([1-9][0-9]|[0-9]*)+(?:\.\d{1,2})$/)) {
        var data = text.replace(/^0+/, '').split('.');
        return convertToWords(data[0], data[1]);
    } else {
        return "Syntax Problem";
    }
}

/**
 * This will take in the two strings of dollars and cents to be converted to
 * the string representation.
 *
 * @param   {String}    dollars being converted to string representation
 * @param   {String}    cents being converted to string representation
 * @return  {String}    the final string representation of the numbers given
 *                      concatenated with appropriate labels.
 */
function convertToWords(dollars, cents) {
    var out = "", spc = " ", hyp = "-";
    var skip = false; // Needed for skipping an iteration on teens

    // Reverse the array for easier manipulation
    // Convert cents to float for proper formatting /100
    dollars = dollars.split('').reverse();
    cents = Number('.' + cents) * 100 + "/100";

    for (var i = dollars.length - 1; i >= 0; i--) {
        var curr = dollars[i];
        var next = dollars[i - 1];

        // Decide if you're at ones tens or hundreds place
        if (i % 3 == 0) {
            // Reset skip if prev was teen, or add in ones
            skip ? skip = false : curr != 0 && (out += ONES[curr] + spc);
            // Make sure you're not repeating empty places
            if (i / 3 != 0) {
                if (curr + dollars[i + 1] + dollars[i + 2] != 0) {
                    out += PLACE[i / 3] + spc;
                }
            }
        } else if (i % 3 == 1) {
            // If it's a teen, add it in and skip next
            if (curr == 1) {
                out += TEEN[next] + spc;
                skip = true;
                // Otherwise, business as usual with tens place
            } else if (curr != 0) {
                out += TENS[curr];
                // If next isn't 0, add hyphen
                out += next != 0 ? hyp : spc;
            }
        } else {
            curr != 0 && (out += ONES[curr] + spc + PLACE[0] + spc);
        }
    }

    if (out == "") {
        return cents + " dollars.";
    } else {
        return capFirst(out) + "and " + cents + " dollars.";
    }
}

/**
 * Helper function for capitalizing the first letter in every string.
 *
 * @param   {String}    text to be capitalized
 * @return  {String}    capitalized text
 */
function capFirst(text)
{
    return text.charAt(0).toUpperCase() + text.slice(1);
}