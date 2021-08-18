// - Nối chuỗi
// a + b
// a.concat(' ',b) -> "a b"
// `${a}${b}` recommend
// - viết hoa
// toLowerCase()
// toUpperCase()
// - tách chuỗi :
// substring(indexStart,indexEnd): âm -> 0
// slice(start,end):
// + không viết ngược được
// + không bao gồm position end
// replace(searchFor,replaceWith)
// replaceAll(searchFor,replaceWith)
// Split('') tách chuỗi
// Join('-') nối chuỗi
// trim() bỏ cách 2 đầu
// includes(searchString,position)
// indexOf(): position first = -1 không tìm thấy, lastIndexOf
// filter(): lọc phần tử
// arguments các đối số truyền vào hàm

// write a function to transform a string:
// -The first letter in UpperCase
// -The rest in lowerCase

function capitalize(str) {
  if (str === '') return '';
  const first = str[0].toUpperCase();
  const rest = str.slice(1).toLowerCase();

  return `${first}${rest}`;
}

console.log(capitalize('thế DƯƠNG'));
console.log(capitalize('ABC'));

// ------------------------------------------

// String exercise
// Check if a string contains an email address
// with `@gmail.com` or not

function hasEmail(str) {
  //    return str.includes('@gmail.com');
  //    return str.indexOf('@gmail.com') >= 0
  return str.lastIndexOf('@gmail.com') >= 0;
}
console.log(hasEmail('theduong@gmail.com DUONG@gmail.com'));

// ---------------------------------------------

// Write a JavaScript function to parameterize a string.
// Eg: parameterize('Code JS Is Fun') --> 'code-js-is-fun'
// hỗ trợ chạy từ version 15 node
function parameterize(str) {
  const result = str.toLowerCase();

  return result.replaceAll(' ', '-');
}

console.log(parameterize('Code JS Is Fun'));

// v2
function parameterize(str) {
  const result = str.toLowerCase().split(' ');
  return result.join('-');
}
console.log(parameterize('Code JS Is Fun'));

// -------------------------------------------

// Create a function truncate(text, maxLength) that checks
//  the string the length of the text and if it exceeds
// maxLength - replaces the end of str with the ellipsis character
// `"..."`,to make its length equal to maxLength.

// Eg: Easy --> truncate('Easy Fronted', 4) --> 'Eas...'
// ... Horizontal ellipsis code is 8230.
// string.fromCodePoint(8230)
// UTF6 '\u2026'

function truncate(text, maxLength) {
  if (text.length <= maxLength) return text;

  const shortStr = text.slice(0, maxLength - 1);
  return `${shortStr}\u2026`;
}
console.log(truncate('Easy Frontend', 4));
console.log(truncate('Easy', 4));

function removeVowel(str) {
  // your code here
  if (str === '') return '';

  const aStr = str
    .replace('a', '')
    .replace('o', '')
    .replace('i', '')
    .replace('u', '')
    .replace('e', '');

  return aStr.trim();
}
console.log(removeVowel('say hello'));

// v2
function removeVowel(str) {
  if (str === '') return '0';

  const aStr = str.split('');
  const intStr = 'ueoai';

  for (let i = 0; i < aStr.length; i++) {
    if (intStr.includes(aStr[i])) str = str.replace(aStr[i], '');
  }

  return str.trim();
}
console.log(removeVowel('say hello'));

// ------------------------------------------

// write functions take seconds (0 <= seconds < 60) return 2 numbers
// Eg: formatSeconds(0) --> '00'
// formatSeconds(9) --> '09'
// formatSeconds(21) --> '21'

// using if...else
function formatSecondsV1(seconds) {
  // your code here
  if (seconds < 0 || seconds >= 60) return -1;

  if (seconds >= 0 && seconds < 10) return `0${seconds}`;

  if (seconds >= 10 && seconds < 60) return `${seconds}`;
}

console.log(formatSecondsV1(1));

// using slice()
function formatSecondsV2(seconds) {
  if (seconds < 0 || seconds >= 60) return -1;

  let seconds1 = `0${seconds}`;
  return seconds1.slice(-2);
}
console.log(formatSecondsV2('60'));

//   -------------------------------------------

// please try to use these constants in your code
const SECONDS_PER_HOUR = 3600;
const SECONDS_PER_MIN = 60;

function formatTime(seconds) {
  if (seconds < 0 || seconds > 86400) return -1;
  // your code here
  let hh = `00`;
  let mm = `00`;
  let ss = `00`;

  if (seconds >= 0 && seconds <= 59) {
    ss = `0${seconds}`.slice(-2);

    return `${hh}:${mm}:${ss}`;
  }

  if (seconds < SECONDS_PER_HOUR) {
    let mmStrInt = Math.floor(seconds / SECONDS_PER_MIN);
    let ssStrFloat = seconds % SECONDS_PER_MIN;

    mm = `0${mmStrInt}`.slice(-2);
    ss = `0${ssStrFloat}`.slice(-2);

    return `${hh}:${mm}:${ss}`;
  }

  if (seconds <= 86400) {
    let hhStrInt = Math.floor(seconds / SECONDS_PER_HOUR);
    let mmStrFloat = Math.floor((seconds % SECONDS_PER_HOUR) / SECONDS_PER_MIN);
    let ssStrFloat = Math.floor((seconds % SECONDS_PER_HOUR) % SECONDS_PER_MIN);

    hh = `0${hhStrInt}`.slice(-2);
    mm = `0${mmStrFloat}`.slice(-2);
    ss = `0${ssStrFloat}`.slice(-2);

    return `${hh}:${mm}:${ss}`;
  }
}
console.log(formatTime(0));
console.log(formatTime(9));
console.log(formatTime(4356));

// ------------------------------------------
//

// Kiểm tra url có hoàn chỉnh hay không qua phương thức bảo mật
// Eg: 'https://abc.com' --> true
//     'http://abc.com' --> false

// using indexOf()
function isSecureUrlV1(url) {
  // your code here
  if (url === '') return '';
  let result = false;

  if (!url.indexOf('wss:')) {
    return true;
  }
  if (!url.indexOf('https:')) return true;

  return result;
}
console.log(isSecureUrlV1('http://localhost'));
console.log(isSecureUrlV1('https://localhost'));
console.log(isSecureUrlV1('wss://localhost'));
console.log(isSecureUrlV1('ws://localhost'));

let test = 'wss://localhost';
console.log(test.indexOf('ws:'));

// using startsWith()
function isSecureUrlV2(url) {
  // your code here
  if (url === '') return '';
  let result = false;

  if (url.startsWith('https')) return true;
  if (url.startsWith('wss')) return true;

  return result;
}
console.log(isSecureUrlV2('https://localhost'));
console.log(isSecureUrlV2('wss://localhost'));
console.log(isSecureUrlV2('http://localhost'));
console.log(isSecureUrlV2('ws://chat.abc.com'));

//   -------------------------------------------.

// Nhận vào địa chỉ email, trả về domain sau kí tự @
// Eg: extractDomain('theduong@gmail.com') --> 'gmail.com'

function extractDomainV1(email) {
  // your code here
  if (email === '') return '';

  return email.split('@')[1];
}
console.log(extractDomainV1('theduong@gmail.com'));

// using indexOf() and slice()
function extractDomainV2(email) {
  // your code here
  if (email === '') return '';

  let checkStr = email.indexOf('@');

  return email.slice(checkStr + 1);
}
console.log(extractDomainV2('theduong@gmail.com'));

//   -------------------------------------------------------.
// Tìm mật mã trong chuỗi của
// Eg: findSecret('SUPEhelloRCODE') --> hello
function findSecret(code) {
  // your code here
  if (code == code.toUpperCase()) return '';

  return code
    .split('')
    .filter((item) => item != item.toUpperCase())
    .join('');

  //  codeStr = code.split('')
  //  console.log(codeStr.length)
  // for(let i = 0; i < codeStr.length; i++) {
  //   const key = codeStr[i];

  //     if(key != code.toUpperCase().split('')){
  //         return key;
  //     }

  // }
}

console.log(findSecret('SUPERCODE'));
console.log(findSecret('SUPERhelloCODE'));

// --------------------------------------------.
//  nhận vào firstName và lastName và trả về chuỗi
function getFullName(firstName, lastName) {
  // your code here
  // check đối số truyền vào trả về fullname
  // Eg: getFullName('John') --> 'John'
  //     getFullName('John','') --> 'John'
  //     getFullName('John','nGuyen') --> 'John Nguyen'
  if (arguments.length === 1) return arguments[0];
  if (firstName === '') return lastName;
  if (lastName === '') return firstName;

  const lastNameStr = lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();
  const firstNameStr = firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();
  let fullName = `${firstNameStr} ${lastNameStr}`;

  return fullName.trim();
}

console.log(getFullName('an'));
