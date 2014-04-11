(function() {
    test("Some Small Tests", function () {
        equal(printString('0.1'), "10/100 dollars.", "10/100 dollars.");
        equal(printString('1.25'), "One and 25/100 dollars.", "One and 25/100 dollars.");
        equal(printString('12.10'), "Twelve and 10/100 dollars.", "Twelve and 10/100 dollars.");
        equal(printString('01.54'), "One and 54/100 dollars.", "One and 54/100 dollars.");
    });
})();
(function() {
    test("Some Normal Tests", function () {
        equal(printString('12.35'), "Twelve and 35/100 dollars.", "Twelve and 35/100 dollars.");
        equal(printString('543632.2'), "Five hundred fourty-three thousand six hundred thirty-two and 20/100 dollars.", "Five hundred fourty-three thousand six hundred thirty-two and 20/100 dollars.");
        equal(printString('10430000.16'), "Ten million four hundred thirty thousand and 16/100 dollars.", "Ten million four hundred thirty thousand and 16/100 dollars.");
        equal(printString('328307.52'), "Three hundred twenty-eight thousand three hundred seven and 52/100 dollars.", "Three hundred twenty-eight thousand three hundred seven and 52/100 dollars.");
    });
})();
(function() {
    test("Some Biggers Tests", function () {
        equal(printString('100000000.54'), "One hundred million and 54/100 dollars.", "One hundred million and 54/100 dollars.");
        equal(printString('2300000000000000.76'), "Two quadrillion three hundred trillion and 76/100 dollars.", "Two quadrillion three hundred trillion and 76/100 dollars.");
        equal(printString('12943000000002100000.32'), "Twelve quintillion nine hundred fourty-three quadrillion two million one hundred thousand and 32/100 dollars.", "Twelve quintillion nine hundred fourty-three quadrillion two million one hundred thousand and 32/100 dollars.");
        equal(printString('948200008200000000000000.00'), "Nine hundred fourty-eight sextillion two hundred quintillion eight quadrillion two hundred trillion and 0/100 dollars.", "Nine hundred fourty-eight sextillion two hundred quintillion eight quadrillion two hundred trillion and 0/100 dollars.");
    });
})();
(function() {
    test("Approaching Googol", function () {
        equal(printString('463210874600210370897008920130530420040235.19'), "Four hundred sixty-three duodecillion two hundred ten undecillion eight hundred seventy-four decillion six hundred nonillion two hundred ten octillion three hundred seventy septillion eight hundred ninety-seven sextillion eight quintillion nine hundred twenty quadrillion one hundred thirty trillion five hundred thirty billion four hundred twenty million fourty thousand two hundred thirty-five and 19/100 dollars.",
            "Four hundred sixty-three duodecillion two hundred ten undecillion eight hundred seventy-four decillion six hundred nonillion two hundred ten octillion three hundred seventy septillion eight hundred ninety-seven sextillion eight quintillion nine hundred twenty quadrillion one hundred thirty trillion five hundred thirty billion four hundred twenty million fourty thousand two hundred thirty-five and 19/100 dollars.");
        equal(printString('932764034081649873000000014012367360041200436783.65'), "Nine hundred thirty-two quattuordecillion seven hundred sixty-four tredecillion thirty-four duodecillion eighty-one undecillion six hundred fourty-nine decillion eight hundred seventy-three nonillion fourteen sextillion twelve quintillion three hundred sixty-seven quadrillion three hundred sixty trillion fourty-one billion two hundred million four hundred thirty-six thousand seven hundred eighty-three and 65/100 dollars.",
            "Nine hundred thirty-two quattuordecillion seven hundred sixty-four tredecillion thirty-four duodecillion eighty-one undecillion six hundred fourty-nine decillion eight hundred seventy-three nonillion fourteen sextillion twelve quintillion three hundred sixty-seven quadrillion three hundred sixty trillion fourty-one billion two hundred million four hundred thirty-six thousand seven hundred eighty-three and 65/100 dollars.");
        equal(printString('100000000000000000000000000000000000000000000000000000.00'), "One hundred sexdecillion and 0/100 dollars.", "One hundred sexdecillion and 0/100 dollars.");
        equal(printString('1000000000000000000000000000000000000000000000000000000.00'), "One septendecillion and 0/100 dollars.", "One septendecillion and 0/100 dollars.");
    });
})();
(function() {
    test("Bad Data", function () {
        equal(printString('0056.20'), "Fifty-six and 20/100 dollars.", "printString('0056.20') - Fifty-six and 20/100 dollars.");
        equal(printString('12.432'), "Syntax Problem", "printString('12.432') - Syntax Problem");
        equal(printString('123..45'), "Syntax Problem", "printString('123..45') - Syntax Problem");
        equal(printString('2578.fd'), "Syntax Problem", "printString('2578.fd') - Syntax Problem");
    });
})();
