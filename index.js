"use strict";
// function that takes a number and returns the closest prime number to it (rounding down if necessary)
Object.defineProperty(exports, "__esModule", { value: true });
exports.nearestPrime = void 0;
// primes = 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31...
// edge cases = negative numbers, 0, 1, 2, 2.4, 2.6, 5.9, 6.1
// get the lower and higher prime nums from num, then see which is closest and return, if tied, return smaller num
var nearestPrime = function (number) {
    if (isNaN(Number(number)))
        return undefined;
    var number1 = Math.round(Number(number));
    if (number1 <= 2)
        return 2;
    if (number1 === 3)
        return 3;
    var smallerPrime = 0;
    var largerPrime = 0;
    // find smaller prime
    for (var i = number1; i >= 3; i--) {
        for (var j = 2; j <= number1 / 2; j++) {
            if (i % j === 0) {
                console.log('Not Prime: j: ', j, ' - i: ', i);
                break;
            }
            if (j + 1 > number1 / 2) {
                console.log('last loop, found no dividend: j=', j, '- i=', i);
                smallerPrime = i;
            }
        }
        if (smallerPrime)
            break;
    }
    // find larger prime
    //TODO Remember to change 300 to integer max or something
    for (var i = number1; i < 300; i++) {
        for (var j = 2; j <= number1 / 2; j++) {
            if (i % j === 0) {
                console.log('Not Prime: j: ', j, ' - i: ', i);
                break;
            }
            if (j + 1 > number1 / 2) {
                console.log('last loop, found no dividend: j=', j, '- i=', i);
                largerPrime = i;
            }
        }
        if (largerPrime)
            break;
    }
    console.log('Smaller Prime: ', smallerPrime, '- Larger Prime: ', largerPrime, '\n');
    return -1;
};
exports.nearestPrime = nearestPrime;
console.log((0, exports.nearestPrime)(3));
