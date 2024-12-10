# Nearest Prime

## Overview
- This package exports one function with the signature: ```nearestPrime(input: number | string, allowInvalidInput: boolean = false): number | undefined```
- The function takes a number (including decimal numbers), and returns the nearest prime number, rounding up if necessary. (Ex. passing 6 will return 7, not 5)
- The function takes an optional argument ```allowInvalidInput``` which defaults to false. When passed as true, numbers less than 1 will return ```2``` instead of ```undefined```

## How to use
- In your project, run ```npm install nearest-prime``` to install the latest version to your ```node_modules``` dependency folder
- In the file you'd like to use the ```nearestPrime``` function, add ```import { nearestPrime } from 'nearest-prime'``` to the top of the file

