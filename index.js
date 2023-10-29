// Generate a random number between min and max (inclusive)
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generate a random float number between min and max (inclusive)
function getRandomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

// get any number
function getAnyNumber() {
  return Math.floor((Math.random() * Math.random()) + new Date().getMilliseconds() * new Date().getFullYear());
}


// Generate a random boolean value (true or false)
function getRandomBoolean() {
  return Math.random() < 0.5;
}

// Generate a random alphanumeric string of a given length
function getRandomWord(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

// Shuffle an array using the Fisher-Yates algorithm
function shuffleArray(array) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}
function getRandomElementFromArray(arr) {
  if (arr.length === 0) {
    return null; // Return null for an empty array
  }

  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// Export all the random number functions
module.exports = {
  getRandomNumber,
  getAnyNumber,
  getRandomFloat,
  getRandomBoolean,
  getRandomWord,
  shuffleArray,
  getRandomElementFromArray
};
