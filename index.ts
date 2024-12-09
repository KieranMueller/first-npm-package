// function that takes a number and returns the closest prime number to it (rounding down if necessary)

// primes = 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31...
// edge cases = negative numbers, 0, 1, 2, 2.4, 2.6, 5.9, 6.1
// get the lower and higher prime nums from num, then see which is closest and return, if tied, return smaller num
export const nearestPrime = (number: number | string): number | undefined => {
    if (isNaN(Number(number))) return undefined
    const number1 = Math.round(Number(number))
    if (number1 <= 2) return 2
    if (number1 === 3) return 3

    let smallerPrime = 0
    let largerPrime = 0

    // find smaller prime
    for (let i = number1; i >= 3; i--) {
        for (let j = 2; j <= number1 / 2; j++) {
            if (i % j === 0) {
                console.log('Not Prime: j: ', j, ' - i: ', i)
                break
            }
            if (j + 1 > number1 / 2) {
                console.log('last loop, found no dividend: j=', j, '- i=', i)
                smallerPrime = i
            }
        }
        if (smallerPrime) break
    }

    // find larger prime
    //TODO Remember to change 300 to integer max or something
    for (let i = number1; i < 300; i++) {
        for (let j = 2; j <= number1 / 2; j++) {
            if (i % j === 0) {
                console.log('Not Prime: j: ', j, ' - i: ', i)
                break
            }
            if (j + 1 > number1 / 2) {
                console.log('last loop, found no dividend: j=', j, '- i=', i)
                largerPrime = i
            }
        }
        if (largerPrime) break
    }

    console.log('Smaller Prime: ', smallerPrime, '- Larger Prime: ', largerPrime, '\n')

    // if diff between input number and nearest smaller prime num is smaller than diff to larger prime num
    // return smaller prime num, else return larger prime num
    return (Number(number) - smallerPrime <= largerPrime - Number(number)) ? smallerPrime : largerPrime
}

const isPrime = (number: number): boolean => {
    if (number <= 1) return false
    if (number === 2) return true

    for (let j = 2; j <= number / 2; j++) {
        if (number % j === 0) {
            console.log('Not Prime: j: ', j)
            return false
        }
    }
    console.log('Num is prime: ', number)
    return true
}

console.log(nearestPrime(3))


