//   ...rest:   gom List --> arrsy
// ...spread:   1 array --> list

//  for...of(dùng khi chủ cần lấy element)
//  forEach(() => {}): duyệt mảng : ES5
//  for...i( duyệt khi loop số lần nhiều)
// (*) Lưu ý: Khi thêm đầu mảng phải dịch chuyển các vị trí r
// mới thêm hạn chế sử dụng với dữ liệu lớn
// Eg: [1, 2, 3] thêm đầu mảng 1 -> [1,2,3,empty] ->[1, 1, 2, 3]

// Minh họa hàm every()
function isAllEvent(arr) {
  if (!Array.isArray(arr)) return false;

  let isValid = true;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) return false;
  }
  return isValid;
}
console.log(isAllEvent([2, 6, 4]));

/*=================================================================*/
/*                        Demo hàm some()                          */
/*=================================================================*/
// Minh họa hàm some()
function isAllEvent(arr) {
  if (!Array.isArray(arr)) return false;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) return true;
  }
  return false;
}
console.log(isAllEvent([2, 3, 5]));

// Minh họa hàm IndexOf()
function isAllEvent(arr) {
  if (!Array.isArray(arr)) return false;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) return i;
  }
  return -1;
}
console.log(isAllEvent([3, 4, 6]));

// Minh họa hàm lastIndexOf()
function isAllEvent(arr) {
  if (!Array.isArray(arr)) return false;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      let number = i;
      if (number === arr[i]) return i;
    }
  }
  return -1;
}
console.log(isAllEvent([3, 4, 6]));

/*=================================================================*/
/*                        Demo hàm find()                          */
/*=================================================================*/
// Hàm find()
// v1
function findFirstEvent(arr) {
  if (!Array.isArray(arr)) return false;

  let isValid;
  for (let i = 0; i < arr.length; i++) {
    let number = arr[i];
    if (number % 2 === 0) {
      isValid = number;
      break;
    }
  }
  return isValid;
}

console.log(findFirstEvent([2, 4, 5]));

// v2
function findFirstEvent(arr) {
  if (!Array.isArray(arr)) return false;

  for (let i = 0; i < arr.length; i++) {
    let number = arr[i];
    if (number % 2 === 0) {
      return number;
    }
  }
  return undefined;
}

console.log(findFirstEvent([2, 4, 5]));

// v3
function findFirstEvent(arr, callbackFn) {
  if (!Array.isArray(arr)) return false;

  for (let i = 0; i < arr.length; i++) {
    let number = arr[i];
    if (callbackFn(number, i)) {
      return number;
    }
  }
  return undefined;
}

function isEven(number) {
  return number % 2 === 0;
}

console.log(findFirstEvent([2, 4, 5], isEven));

// inline function
console.log(
  findFirstEvent([2, 4, 5], function isEven(number) {
    return number % 2 === 0;
  })
);

// arrow function
console.log(
  findFirstEvent([2, 4, 5], (number) => {
    return number % 2 === 0;
  })
);

// arrow function shorthand
console.log(findFirstEvent([2, 4, 5], (number) => number % 2 === 0));

/*=================================================================*/
/*                     Demo hàm findIndex()                        */
/*=================================================================*/
// findIndex()
// v1
function findIndexEvent(arr) {
  if (!Array.isArray(arr)) return false;

  let isValid;
  for (let i = 0; i < arr.length; i++) {
    let number = arr[i];
    if (number % 2 === 0) {
      isValid = i;
      break;
    }
  }
  return isValid;
}

console.log(findIndexEvent([3, 4, 7]));

// v2
function findIndexEvent(arr) {
  if (!Array.isArray(arr)) return false;

  for (let i = 0; i < arr.length; i++) {
    let number = arr[i];
    if (number % 2 === 0) {
      return i;
    }
  }
  return undefined;
}

console.log(findIndexEvent([3, 5, 8]));

console.log([3, 5, 8].findIndex((x) => x % 2 === 0));

// v3
function findIndexEvent(arr, callbackFn) {
  if (!Array.isArray(arr)) return false;

  for (let i = 0; i < arr.length; i++) {
    let number = arr[i];
    if (callbackFn(number, i)) {
      return i;
    }
  }
  return undefined;
}

function isEven(number) {
  return number % 2 === 0;
}

console.log(findIndexEvent([3, 5, 8], isEven));
console.log(findIndexEvent([3, 5, 8], (x) => x % 2 === 0));

/*=================================================================*/
/*                         Demo hàm map()                          */
/*=================================================================*/
// Hàm map()
// map(mappingFn)
// map(transformFn)
// map(callbackFn)
function mapChange(arr, mappingFn) {
  if (!Array.isArray(arr)) return false;

  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    let number = arr[i];
    let newElement = mappingFn(number, i);
    newArray.push(newElement);
  }
  return newArray;
}
console.log(mapChange([1, 2, 3, 4], (x) => x + 1));
console.log(mapChange([1, 2, 3, 4], (x, index) => (index % 2 === 0 ? x + 1 : x * 2)));
console.log(mapChange(['easy', 'frontend'], (x) => x.length));

// even index:increment by 1
// odd index : multiply with 2

// hàm filter(arr, callbackFn)
// callbackFn return true/false

function filter(arr, callbackFn) {
  if (!Array.isArray(arr) || typeof callbackFn !== 'function') return undefined;

  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    let number = arr[i];
    if (callbackFn(number, i)) {
      newArray.push(number);
    }
  }
  return newArray;
}
console.log(filter([1, 2, 3, 4], (x) => x > 3));
console.log(filter([1, 2, 3, 4], (x, index) => x % 2 === 0 || index % 2 === 1));

// hàm reduce()
const result = [2, 3, 6].reduce((sum, number) => sum + number, 0);

console.log(result);

// viết lại hàm reduce( bằng for i )
// reduce(arr, callbackFn, initialValue)
// rules:
// if không phải arr || callbackFn !== 'function'
// arr.length = 0 and initialValue === undefined --> throw error
// arr.length = 0 and initialValue !== undefined --> initialValue
// if initialValue === '' throw new TypeError()

function reduce(arr, callbackFn, initialValue) {
  if (!Array.isArray(arr) || typeof callbackFn !== 'function') {
    throw new Error('Invalid parameters');
  }
  if (arr.length === 0) {
    if (initialValue === undefined) {
      throw new Error('Should have initialValue when arr is empty');
    }
    return initialValue;
  }

  const hasInitialValue = initialValue !== undefined;
  let accumulator = hasInitialValue ? initialValue : arr[0];
  let startIndex = hasInitialValue ? 0 : 1;

  for (let i = startIndex; i < arr.length; i++) {
    accumulator = callbackFn(accumulator, arr[i], i);
  }
  return accumulator;
}

function sumFn(prevSum, curSum) {
  return prevSum + curSum;
}

console.log(reduce([], sumFn, undefined));

// Example:
// print numbers: 1-> 10

function printNumbers() {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}

printNumbers();

// print even numbers [2,4,6,8,10]
// v1
function printEvent() {
  for (let i = 2; i <= 10; i += 2) {
    console.log(i);
  }
}
printEvent();

// v2
function printEvent() {
  for (let i = 2; i <= 10; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}
printEvent();

// print even numbers but less than n

function printEvenLess(n) {
  if (n < 0) return;
  for (let i = 0; i < n; i += 4) {
    console.log(i);
  }
}
printEvenLess(99);

// write function to find max
// for ... i
// forEach
// reduce()

// 1.for ... i
function findMax(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return undefined;

  let max = numberList[0];
  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] > max) {
      max = numberList[i];
    }
  }
  return max;
}
console.log(findMax([2, 7, 11, 5]));

// 2.forEach
function findMaxEach(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return undefined;

  let max = numberList[0];
  numberList.forEach((number) => {
    if (number > max) {
      max = number;
    }
  });

  return max;
}
console.log(findMaxEach([2, 7, 11, 5]));

// reduce()
function findMaxReduce(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return undefined;

  // v1
  // return numberList.reduce((max, number) => {
  //   if (number > max) {
  //     return number;
  //   }
  //   return max;
  // });

  // v2
  // return numberList.reduce((max, number) => {
  //   return (number > max) ? number : max
  // });

  // v3
  return numberList.reduce((max, number) => (number > max ? number : max));
}
console.log(findMaxReduce([2, 7, 11, 5]));

// write function to find the longest word
// for ... i
// forEach
// reduce()

// for ... i
function findWord(word) {
  if (!Array.isArray(word) || word.length === 0) return undefined;

  let max = word[0];
  for (let i = 0; i < word.length; i++) {
    if (word[i].length > max.length) max = word[i];
  }
  return max;
}

console.log(findWord(['es', 'easy', 'frontend', 'eaZy']));

// forEach
function findEachWord(wordList) {
  if (!Array.isArray(wordList) || wordList.length === 0) return undefined;

  let max = wordList[0];
  wordList.forEach((word) => {
    if (word.length > max.length) {
      max = word;
    }
  });
  return max;
}

console.log(findEachWord(['es', 'easy', 'frontend', 'eaZy']));

// reduce()
function findReduceWord(wordList) {
  if (!Array.isArray(wordList) || wordList.length === 0) return undefined;

  return wordList.reduce((wordLongest, currentWord) =>
    currentWord.length > wordLongest.length ? currentWord : wordLongest
  );
}

console.log(findReduceWord(['es', 'easy', 'frontend', 'eaZy', 'easy frontend']));

// ------------------------------------------------------------------------.

// write a function to create array trong khoảng [a,b]
// using for...i
function createArrayInRangeV1(a, b) {
  // your code here
  if (a < -100 || b > 100 || a > b) return -1;

  let newArray = [];
  for (let i = a; i <= b; i++) {
    newArray.push(i);
  }
  return newArray;
}
console.log(createArrayInRangeV1(-2, 1));

// using Array.from()
function createArrayInRangeV2(a, b) {
  // your code here
  if (a < -100 || b > 100 || a > b) return -1;

  return Array.from({ length: b - a + 1 }, (v, i) => i + a);
}
console.log(createArrayInRangeV2(1, 5));

console.log(Array.from([1, 2, 5, 6, 7], (i) => (i += 1)));

//------------------------------------------------------.
/*=================================================================*/
/*                                                                 */
/*         Kiểm tra có phải số nguyên tố? true:false            */
/*                                                                 */
/*=================================================================*/
// Kiểm tra số nguyên tố nhận vào số nguyên dương (0<= n < 1000)
// có phải số nguyên tố k? return true/false

// write use loop 2 to n-1
function isPrimeV1(n) {
  // your code here
  if (n < 0 || n >= 1000) return -1;
  if (n < 2) return false;

  for (let i = 2; i <= n - 1; i++) {
    if (n % i === 0) return false;
  }
  return true;
}
console.log(isPrimeV1(4));

// write use loop 2 to sqrt(n)
function isPrimeV2(n) {
  // your code here
  if (n < 0 || n >= 1000) return -1;
  if (n < 2) return false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}
console.log(isPrimeV2(3));

//---------------------------------------------.
// liệt kê ước số của số nguyên dương n return []

// using for ... i
function getDivisorListV1(n) {
  // your code here
  if (n < 1 || n > 1000) return -1;

  let newArray = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      newArray.push(i);
    }
  }
  return newArray;
}
console.log(getDivisorListV1(12));

// using Array.from() và filter() loop 1 --> n
function getDivisorListV2(n) {
  // your code here
  if (n < 1 || n > 1000) return -1;

  let newArray = [];
  let arrayStr = Array.from(Array(n + 1), (x, i) => i);
  // console.log(arrayStr);

  arrayStr.filter((value) => {
    if (n % value === 0) {
      newArray.push(value);
    }
  });
  return newArray;
}
console.log(getDivisorListV2(12));

// using Array.from() , forEach(), và sort() chỉ lặp đến sqrt(n)
// bé -> lớn hàm sort(a, b) => a - b > 0 => thứ tự b,a
function getDivisorListV3(n) {
  // your code here
  if (n < 1 || n > 1000) return -1;

  let newArray = [];
  let arrayStr = Array.from({ length: Math.trunc(Math.sqrt(n)) }, (x, i) => i + 1);
  // console.log(arrayStr);

  arrayStr.forEach((value) => {
    if (n % value === 0) {
      newArray.push(value);
      if (value * value != n) newArray.push(n / value);
    }
  });
  return newArray.sort((a, b) => a - b);
}
console.log(getDivisorListV3(12));
console.log(Math.trunc(Math.sqrt(12)));

/*=================================================================*/
/*                                                                 */
/*                     Kiểm tra số hoàn hảo                        */
/*                                                                 */
/*=================================================================*/
//  dk: 1 < n < 1000
function isPerfectNumber(n) {
  // your code here
  if (n <= 1 || n >= 1000) return false;

  let number = 0;
  for (let i = 1; i < n; i++) {
    if (n % i === 0) {
      number += i;
    }
  }
  if (number === n) return true;

  return false;
}
console.log(isPerfectNumber(28));

/*=================================================================*/
/*                                                                 */
/*                     Biến đổi mảng với f(i)                      */
/*                                                                 */
/*=================================================================*/

// using for...i
function transformNumbersV1(numberList) {
  if (!Array.isArray(numberList)) return -1;
  if (numberList.length === 0) return [];
  if (numberList.length < 2) return numberList;

  let newArray = [];

  for (let i = 0; i < numberList.length; i++) {
    if (i === 0) {
      newArray.push(numberList[i + 1]);
    }
    if (i > 0 && i < numberList.length - 1) {
      newArray.push(numberList[i - 1] + numberList[i + 1]);
    }
    if (i >= numberList.length - 1) {
      newArray.push(numberList[i - 1]);
    }
  }
  return newArray;
}

console.log(transformNumbersV1([2, 4, 6, 8]));
console.log(transformNumbersV1([5, 10]));
console.log(transformNumbersV1([2]));

/*=================================================================*/
/*                        using forEach()                          */
/*=================================================================*/

// V1
function transformNumbersV2(numberList) {
  if (!Array.isArray(numberList)) return -1;
  if (numberList.length === 0) return [];
  if (numberList.length < 2) return numberList;

  let newArray = [];
  numberList.forEach((x, index) => {
    if (index === 0) {
      newArray.push(numberList[index + 1]);
    }
    if (index > 0 && index < numberList.length - 1) {
      newArray.push(numberList[index - 1] + numberList[index + 1]);
    }
    if (index >= numberList.length - 1) {
      newArray.push(numberList[index - 1]);
    }
  });
  return newArray;
}
console.log(transformNumbersV2([2, 4, 6, 8]));
console.log(transformNumbersV2([8]));
// V2
function transformNumbersV2(numberList) {
  if (!Array.isArray(numberList)) return undefined;
  if (numberList.length <= 2) return [...numberList].reverse();

  let newArray = [];
  numberList.forEach((x, index) => {
    const leftNumber = numberList[index - 1] ? numberList[index - 1] : 0;
    const rightNumber = numberList[index + 1] ? numberList[index + 1] : 0;

    newArray.push(leftNumber + rightNumber);
  });
  return newArray;
}
console.log(transformNumbersV2([2, 4, 6, 8]));
console.log(transformNumbersV2([8]));

/*=================================================================*/
/*                           using map()                           */
/*=================================================================*/
// V1
function transformNumbersV3(numberList) {
  let newArray = [];
  numberList.map((element, index) => {
    if (index === 0) {
      newArray.push(numberList[index + 1]);
    }
    if (index > 0 && index < numberList.length - 1) {
      newArray.push(numberList[index - 1] + numberList[index + 1]);
    }
    if (index >= numberList.length - 1) {
      newArray.push(numberList[index - 1]);
    }
  });
  return newArray;
}
console.log(transformNumbersV3([2, 4, 6, 8]));

// V2
function transformNumbersV3(numberList) {
  if (!Array.isArray(numberList)) return undefined;
  if (numberList.length <= 2) return [...numberList].reverse();

  let newArray = [];
  numberList.map((x, index) => {
    const leftNumber = numberList[index - 1] ? numberList[index - 1] : 0;
    const rightNumber = numberList[index + 1] ? numberList[index + 1] : 0;

    newArray.push(leftNumber + rightNumber);
  });
  return newArray;
}

console.log(transformNumbersV3([2, 4, 6, 8]));

// V3
function transformNumbersV3(numberList) {
  if (!Array.isArray(numberList)) return undefined;
  if (numberList.length <= 2) return [...numberList].reverse();

  let newArray = [];
  numberList.map((x, index) => {
    const leftNumber = numberList[index - 1] || 0;
    const rightNumber = numberList[index + 1] || 0;

    newArray.push(leftNumber + rightNumber);
  });
  return newArray;
}

console.log(transformNumbersV3([2, 4, 6, 8]));

/*=================================================================*/
/*                                                                 */
/*         Kiểm tra [] có chứa số nguyên tố? true:false            */
/*                                                                 */
/*=================================================================*/

//  for...i
function isPrimeNumber(n) {
  // your code here
  if (n < 0 || n >= 1000) return -1;
  if (n < 2) return false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function hasPrimeV1(numberList) {
  // your code here
  if (!Array.isArray(numberList) || numberList.some((x) => x <= 0)) return false;

  let checkNumber = 0;
  for (let i = 0; i < numberList.length; i++) {
    isPrimeNumber(numberList[i]) ? checkNumber++ : checkNumber;
  }
  return checkNumber > 0 ? true : false;
}

console.log(hasPrimeV1([1, 1, 6]));

//
function hasPrimeV1(numberList) {
  // your code here
  if (!Array.isArray(numberList) || numberList.some((x) => x <= 0)) return undefined;

  let checkNumber = false;
  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] === 2 || numberList[i] === 3) return true;
    for (let j = 2; j <= Math.sqrt(numberList[i]); j++) {
      // console.log(numberList[i]);
      if (numberList[i] % j !== 0) return true;
    }
  }
  return checkNumber;
}
console.log(hasPrimeV1([1, 6, 5, 8]));
console.log(hasPrimeV1([4, 6, 4, 8]));

/*=================================================================*/
/*                        using forEach()                          */
/*=================================================================*/
//
function isPrimeNumber(n) {
  // your code here
  if (n < 0 || n >= 1000) return -1;
  if (n < 2) return false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function hasPrimeV2(numberList) {
  // your code here
  if (!Array.isArray(numberList) || numberList.some((x) => x <= 0)) return false;

  let primeNumberCount = 0;
  numberList.forEach((n) => {
    // console.log(n);
    return isPrimeNumber(n) ? primeNumberCount++ : primeNumberCount;
  });

  return primeNumberCount > 0;
}
console.log(hasPrimeV2([1, 4, 6]));
console.log(hasPrimeV2([2, 4, 6]));

/*=================================================================*/
/*                          using find()                           */
/*=================================================================*/

function isPrimeNumber(n) {
  // your code here
  if (n < 0 || n >= 1000) return -1;
  if (n < 2) return false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}
function hasPrimeV3(numberList) {
  // your code here
  if (!Array.isArray(numberList) || numberList.some((x) => x <= 0)) return false;

  let primeNumberCount = 0;
  numberList.find((n) => {
    console.log(n);
    return isPrimeNumber(n) ? primeNumberCount++ : primeNumberCount;
  });
  return primeNumberCount > 0;
}
console.log(hasPrimeV3([1, 4, 6]));
console.log(hasPrimeV3([2, 4, 6]));

/*=================================================================*/
/*                       using findIndex()                         */
/*=================================================================*/
//
function isPrimeNumber(n) {
  // your code here
  if (n < 0 || n >= 1000) return -1;
  if (n < 2) return false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function hasPrimeV4(numberList) {
  // your code here
  if (!Array.isArray(numberList) || numberList.some((x) => x <= 0)) return false;

  let primeNumberCount = 0;
  numberList.findIndex((n) => {
    console.log(n);
    return isPrimeNumber(n) ? primeNumberCount++ : primeNumberCount;
  });
  return primeNumberCount > 0;
}

console.log(hasPrimeV4([1, 4, 6]));
console.log(hasPrimeV4([2, 4, 3]));

/*=================================================================*/
/*                           using some()                          */
/*=================================================================*/

function isPrimeNumber(n) {
  // your code here
  if (n < 0 || n >= 1000) return -1;
  if (n < 2) return false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function hasPrimeV5(numberList) {
  // your code here
  if (!Array.isArray(numberList) || numberList.some((x) => x <= 0)) return false;

  let primeNumberCount = 0;
  numberList.some((n) => {
    console.log(n);
    return isPrimeNumber(n) ? primeNumberCount++ : primeNumberCount;
  });
  return primeNumberCount > 0;
}
console.log(hasPrimeV5([1, 4, 6]));
console.log(hasPrimeV5([5, 1, 3, 8, 9]));

/*=================================================================*/
/*                                                                 */
/*           Kiểm tra [] all là số hoàn hảo? true:false            */
/*                                                                 */
/*=================================================================*/

function isPerfectNumber(n) {
  // your code here
  if (n <= 1 || n >= 1000) return false;

  let number = 0;
  for (let i = 1; i < n; i++) {
    if (n % i === 0) {
      number += i;
    }
  }
  if (number === n) return true;

  return false;
}

// for...i: return false if found number is not perfect
function isAllPerfectNumbersV1(numberList) {
  // your code here
  if (!Array.isArray(numberList) || numberList.some((x) => x <= 0)) return undefined;
  if (numberList.length === 0) return false;

  let perfectNumber = 0;
  for (let i = 0; i < numberList.length; i++) {
    if (!isPerfectNumber(numberList[i])) {
      return false;
    }
    perfectNumber++;
  }
  return perfectNumber > 0;
}

console.log(isAllPerfectNumbersV1([1, 6]));
console.log(isAllPerfectNumbersV1([]));

/*=================================================================*/
/*                         using reduce()                          */
/*=================================================================*/
// reduce: check if the number of perfect numbers is equal to length
// optional: you can practice more to use forEach or filter :)
function isPerfectNumber(n) {
  // your code here
  if (n <= 1 || n >= 1000) return false;

  let number = 0;
  for (let i = 1; i < n; i++) {
    if (n % i === 0) {
      number += i;
    }
  }
  if (number === n) return true;

  return false;
}

// v1
function isAllPerfectNumbersV2(numberList) {
  // your code here
  if (!Array.isArray(numberList) || numberList.some((x) => x <= 0)) return false;
  if (numberList.length === 0) return false;

  let sumLengthPerfect = 0;
  numberList.reduce((x, y) => {
    // console.log(isPerfectNumber(x));
    // console.log(isPerfectNumber(y));
    // let numberOne = isPerfectNumber(x)? 1:0
    let numberTwo = isPerfectNumber(y) ? 1 : 0;
    sumLengthPerfect += numberTwo;
    // checkNumber += numberTwo;
  }, 0);
  return sumLengthPerfect === numberList.length ? true : false;
}
console.log(isAllPerfectNumbersV2([6, 28, 1]));
console.log(isAllPerfectNumbersV2([6, 2, 1]));
console.log(isAllPerfectNumbersV2([6, 28, 6]));

// v2
function isAllPerfectNumbersV2(numberList) {
  // your code here
  if (!Array.isArray(numberList) || numberList.some((x) => x <= 0)) return false;
  if (numberList.length === 0) return false;

  let checkNumber = true;
  numberList.forEach((number) => {
    if (!isPerfectNumber(number)) {
      checkNumber = false;
    }
  });
  return checkNumber;
}

console.log(isAllPerfectNumbersV2([6]));
console.log(isAllPerfectNumbersV2([28, 6]));
console.log(isAllPerfectNumbersV2([6, 28, 6]));
console.log(isAllPerfectNumbersV2([2, 6]));

/*=================================================================*/
/*                         using every()                           */
/*=================================================================*/
// every
function isPerfectNumber(n) {
  // your code here
  if (n <= 1 || n >= 1000) return false;

  let number = 0;
  for (let i = 1; i < n; i++) {
    if (n % i === 0) {
      number += i;
    }
  }
  if (number === n) return true;

  return false;
}

function isAllPerfectNumbersV3(numberList) {
  // your code here
  if (!Array.isArray(numberList) || numberList.some((x) => x <= 0)) return undefined;
  if (numberList.length === 0) return false;

  return numberList.every((number) => isPerfectNumber(number));
}
console.log(isAllPerfectNumbersV3([28, 6]));
console.log(isAllPerfectNumbersV3([2, 6]));
console.log(isAllPerfectNumbersV3([6]));
console.log(isAllPerfectNumbersV3([1, 2, 3]));

/*=================================================================*/
/*                                                                 */
/*             Tính trung bình cộng của các số chẵn []             */
/*                                                                 */
/*=================================================================*/

function calcAvgOfAllEvenNumbers(numberList) {
  // your code here
  if (!Array.isArray(numberList) || numberList.length <= 1) return 0;

  let AvgEvenNumber = 0;
  let countNumber = 0;
  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] % 2 === 0) {
      AvgEvenNumber += numberList[i];
      countNumber++;
    }
  }
  if (AvgEvenNumber === 0) return 0;
  return Math.round(AvgEvenNumber / countNumber);
}

console.log(calcAvgOfAllEvenNumbers([1, 3, 5]));
console.log(calcAvgOfAllEvenNumbers([1, 2, 4, 8]));
console.log(calcAvgOfAllEvenNumbers([]));
console.log(calcAvgOfAllEvenNumbers([1]));
