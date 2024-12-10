![npm (scoped)](https://img.shields.io/npm/v/nearest-prime?label=NPM) ![NPM](https://img.shields.io/npm/l/nearest-prime?label=License) ![npm](https://img.shields.io/npm/dt/nearest-prime?label=Downloads) [![Sponsor](https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&color=red&logo=GitHub)](https://github.com/KieranMueller)

# Nearest Prime

## Overview

-   This package exports one function with the signature:

```ts
nearestPrime(input: number | string, allowInvalidInput: boolean = false): number | undefined
```

-   The function takes a number (including decimal numbers), and returns the nearest prime number, rounding up if necessary. (Ex. passing 6 will return 7, not 5)
-   The function takes an optional argument `allowInvalidInput` which defaults to false. When passed as true, numbers less than 1 will return `2` instead of `undefined`

## How to use

-   In your project, run

```shell
npm install nearest-prime
```

to install the latest version to your `node_modules` dependency folder

-   In the file you'd like to use the `nearestPrime` function, add

```js
import { nearestPrime } from 'nearest-prime'
```

to the top of the file

## In Action

![alt text](assets/nearest-prime-install.gif)

## Fixes & Improvements

Head over to the [GitHub Issues](https://github.com/KieranMueller/nearest-prime/issues) tab to report a bug or suggest an improvement. Feel free to contribute to the code or documentation by raising a pull request.
