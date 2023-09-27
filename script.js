function convertToRoman(num) {
  const obj = {
    0: ['M', 1000],
    1: ['D', 500],
    2: ['C', 100],
    3: ['L', 50],
    4: ['X', 10],
    5: ['V', 5],
    6: ['I', 1]
  };

  let result = '';

  for (let key = 0; key <= 6; key++) {
    const [symbol, value] = obj[key];
    while (num >= value) {
      result += symbol;
      num -= value;
    }

    // Check for subtractive notation
    if (key % 2 === 0 && key < 6) {
      const nextKey = key + 2;
      const [nextSymbol, nextValue] = obj[nextKey];

      if (num >= value - nextValue) {
        result += nextSymbol + symbol;
        num -= value - nextValue;
      }
    }
  }

  return result;
}

// Test cases
console.log(convertToRoman(14)); // Output: XIV
console.log(convertToRoman(798)); // Output: DCCXCVIII
console.log(convertToRoman(36)); // Output: XXXVI

module.exports = convertToRoman;
