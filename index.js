"use strict";
// function that takes a number and returns the closest prime number to it
Object.defineProperty(exports, "__esModule", { value: true });
exports.nearestPrime = void 0;
var MAX_SAFE_INTEGER = 9007199254740991;
var nearestPrime = function (input, allowInvalidInput) {
    if (allowInvalidInput === void 0) { allowInvalidInput = false; }
    if (isNaN(Number(input)))
        return undefined;
    if (!allowInvalidInput)
        if (Number(input) < 1)
            return undefined;
    var num = Math.round(Number(input));
    if (num <= 2)
        return 2;
    if (num === 3)
        return 3;
    var smallerPrime = 0;
    var largerPrime = 0;
    for (var i = num; i >= 3; i--) {
        if (isPrime(i)) {
            smallerPrime = i;
            break;
        }
    }
    for (var i = num; i < MAX_SAFE_INTEGER; i++) {
        if (isPrime(i)) {
            largerPrime = i;
            break;
        }
    }
    // if diff between input number and nearest smaller prime num is smaller than diff to larger prime num
    // return smaller prime num, else return larger prime num
    return (Number(input) - smallerPrime < largerPrime - Number(input)) ? smallerPrime : largerPrime;
};
exports.nearestPrime = nearestPrime;
var isPrime = function (num) {
    if (num <= 1)
        return false;
    if (num <= 3)
        return true;
    if (num % 2 === 0 || num % 3 === 0)
        return false;
    for (var i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0)
            return false;
    }
    return true;
};
console.log('Expected --> Actual');
console.log(2 === (0, exports.nearestPrime)(-3));
console.log(2 === (0, exports.nearestPrime)(0));
console.log(2 === (0, exports.nearestPrime)(0.2));
console.log(2 === (0, exports.nearestPrime)(1));
console.log(2 === (0, exports.nearestPrime)(1.8));
console.log(2 === (0, exports.nearestPrime)(2));
console.log(2 === (0, exports.nearestPrime)(2.4));
console.log(3 === (0, exports.nearestPrime)(2.5));
console.log(3 === (0, exports.nearestPrime)(3));
console.log(3 === (0, exports.nearestPrime)(3.8));
console.log(5 === (0, exports.nearestPrime)(4));
console.log(17 === (0, exports.nearestPrime)(17.9));
console.log(19 === (0, exports.nearestPrime)(18));
console.log(19 === (0, exports.nearestPrime)(18.1));
console.log(909331 === (0, exports.nearestPrime)(909332));
console.log(undefined === (0, exports.nearestPrime)(-20));
console.log(undefined === (0, exports.nearestPrime)(0));
console.log(undefined === (0, exports.nearestPrime)(0.2));
console.log(undefined === (0, exports.nearestPrime)(0.9));
console.log(2 === (0, exports.nearestPrime)(1));
console.log(2 === (0, exports.nearestPrime)(1.1));
console.log(2 === (0, exports.nearestPrime)(1.6));
console.log(2 === (0, exports.nearestPrime)(2));
console.log(2 === (0, exports.nearestPrime)(-20, true));
console.log(2 === (0, exports.nearestPrime)(0, true));
console.log(2 === (0, exports.nearestPrime)(0.2, true));
console.log(2 === (0, exports.nearestPrime)(0.9, true));
console.log(2 === (0, exports.nearestPrime)(1, true));
console.log(2 === (0, exports.nearestPrime)(1.5, true));
