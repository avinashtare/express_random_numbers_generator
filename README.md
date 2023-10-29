# Random Numbers Generator

Express Random Numbers Generator is a lightweight and easy-to-use npm package that allows you to generate random numbers, floats, and other random data within a specified range. It provides a simple and reliable solution for incorporating random number generation into your Node.js applications.

## Installation

You can install the Express Random Numbers Generator package using npm:

```console
npm install express_random_numbers_generator
```

## Usage
In your Node.js application, you can import and use the functions provided by the Express Random Numbers Generator package as follows:

**• getAnyNumber**
```js
const { getAnyNumber } = require('express_random_numbers_generator');

// get any random value
const anyNumber = getAnyNumber();
console.log(anyNumber);  // OUTPUT: 675332

```

**• getRandomNumber**
```js
const { getRandomNumber } = require('express_random_numbers_generator');

// Generate a random number between 0 and 100
const anyNumber = getRandomNumber(0,100);
console.log(anyNumber);   // OUTPUT: 54
```


**• getRandomBoolean**
```js
const { getRandomBoolean } = require('express_random_numbers_generator');

// Generate a random boolean value (true or false)
const randomBool = getRandomBoolean();
console.log(randomBool);  // OUTPUT: true
```


**• getRandomElementFromArray**
```js
const { getRandomElementFromArray } = require('express_random_numbers_generator');

// Generate a random element from an array
const fruits = ['apple', 'banana', 'orange', 'mango'];
const randomFruit = getRandomElementFromArray(fruits);
console.log(randomFruit);  // OUTPUT: orange
```


**• getRandomWord**
```js
const { getRandomWord } = require('express_random_numbers_generator');

// Generate a random alphanumeric string of a given length
const randomString = getRandomWord(40);
console.log(randomString); // OUTPUT: qKgR928lNwGlANHEKmZvLVVvGTiuuPbfOYhMJo2j

```

**• getRandomFloat**
```js
const { getRandomFloat } = require('express_random_numbers_generator');

// Generate a random float number between 0 and 50
const randomFloat = getRandomFloat(1,50);
console.log(randomFloat); // OUTPUT: 37.65583630394873

```

**• shuffleArray Randomly**

```
const { shuffleArray } = require('express_random_numbers_generator');

// Shuffle an array using the Fisher-Yates algorithm
const array = [1, 2, 3, 4, 5];
const shuffledArray = shuffleArray(array);
console.log(shuffledArray); // OUTPUT: [ 2, 4, 5, 1, 3 ]

```

## License


[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
This project is released under the [MIT License](LICENSE).  
**Free Package, Hell Yeah!**



## Contact

**[avinashtare.work@gmail.com](mailto:avinashtare.work@gmail.com)**

## Author
**卐🕉 Avinash Tare 🕉 卐**