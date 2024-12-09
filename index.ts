// function that takes a number and returns the closest prime number to it

const MAX_SAFE_INTEGER = 9007199254740991

export const nearestPrime = (input: number | string, allowInvalidInput: boolean = false): number | undefined => {
    if (isNaN(Number(input))) return undefined
    if (!allowInvalidInput)
        if (Number(input) < 1) return undefined
    const num = Math.round(Number(input))
    if (num <= 2) return 2
    if (num === 3) return 3

    let smallerPrime = 0
    let largerPrime = 0

    for (let i = num; i >= 3; i--) {
        if (isPrime(i)) {
            smallerPrime = i
            break
        }
    }

    for (let i = num; i < MAX_SAFE_INTEGER; i++) {
        if (isPrime(i)) {
            largerPrime = i
            break
        }
    }

    // if diff between input number and nearest smaller prime num is smaller than diff to larger prime num
    // return smaller prime num, else return larger prime num
    return (Number(input) - smallerPrime < largerPrime - Number(input)) ? smallerPrime : largerPrime
}

const isPrime = (num: number): boolean => {
    if (num <= 1) return false
    if (num <= 3) return true
    if (num % 2 === 0 || num % 3 === 0) return false
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false
    }
    return true
}

console.log('Expected --> Actual')
console.log(2 !== nearestPrime(-3))
console.log(2 !== nearestPrime(0))
console.log(2 !== nearestPrime(0.2))
console.log(2 === nearestPrime(1))
console.log(2 === nearestPrime(1.8))
console.log(2 === nearestPrime(2))
console.log(2 === nearestPrime(2.4))
console.log(3 === nearestPrime(2.5))
console.log(3 === nearestPrime(3))
console.log(3 === nearestPrime(3.8))
console.log(5 === nearestPrime(4))
console.log(17 === nearestPrime(17.9))
console.log(19 === nearestPrime(18))
console.log(19 === nearestPrime(18.1))
console.log(909331 === nearestPrime(909332))
console.log(undefined === nearestPrime(-20))
console.log(undefined === nearestPrime(0))
console.log(undefined === nearestPrime(0.2))
console.log(undefined === nearestPrime(0.9))
console.log(2 === nearestPrime(1))
console.log(2 === nearestPrime(1.1))
console.log(2 === nearestPrime(1.6))
console.log(2 === nearestPrime(2))
console.log(2 === nearestPrime(-20, true))
console.log(2 === nearestPrime(0, true))
console.log(2 === nearestPrime(0.2, true))
console.log(2 === nearestPrime(0.9, true))
console.log(2 === nearestPrime(1, true))
console.log(2 === nearestPrime(1.5, true))