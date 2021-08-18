//  1. Random a number in range of [0, n]
// n = 10
// 0, 1, 5, 10
// Math.random() --> [0, 1)

function randomNumber(n) {
    if( n <= 0) return -1;

    return Math.round(Math.random() * n);
}

console.log(randomNumber(10));
console.log(randomNumber(10));
console.log(randomNumber(10));
console.log(randomNumber(10));
console.log(randomNumber(10));
console.log(randomNumber(10));
console.log(randomNumber(10));
console.log(randomNumber(10));

// ------------------------------------------------
// Random a number in range of [a, b] với a < b 

function randomNumber(a, b){
    if(b <= a) return -1;

    return Math.round(Math.random() * (b - a)) + a;

}

console.log(randomNumber(1, 10)); 
console.log(randomNumber(1, 10)); 
console.log(randomNumber(1, 10)); 
console.log(randomNumber(1, 10)); 


// Write a function to check if a number is perfect square
function isPerfectSquare(n){
    if(n < 0) return false;

    const sqrtN = Math.sqrt(n)
    const sqrtNInt = Math.trunc(sqrtN)
    return sqrtNInt ** 2 == n;
}
console.log(isPerfectSquare(7));
console.log(isPerfectSquare(2));
console.log(isPerfectSquare(40));
console.log(isPerfectSquare(25));
console.log(isPerfectSquare(26));
console.log(isPerfectSquare(9));



// 1. Convert hours to seconds
function convertHours(hours){
    if( hours <= 0) return 0;

    const SECOND_PER_HOUR = 3600;

    return hours * SECOND_PER_HOUR;
}

console.log(convertHours(2));

// 2, Given 3 numbers, find max
function findMax(a, b, c){
    let max = a;

    if(max < b) max = b;
    if(max < c) max = c;

    return max;
}
console.log(findMax(4, 8, 9))

// 3, Given 3 numbers, find max even number

function findMax(a, b, c){
    let max = Number.NEGATIVE_INFINITY;

    if(a % 2 === 0 && a > max) max = a;
    if(b % 2 === 0 && b > max) max = b;
    if(c % 2 === 0 && c > max) max = c;

    return max;
}
console.log(findMax(5, 3, 9))


// ---------------------------------------------------------------------

// EX1: get the ones of a number having 3 digits

function extractTheOnesDigits(n){
    if(n.toString().length !== 3) return -1;

    // processing
    return n % 10;

}
console.log(extractTheOnesDigits(994));

// EX2: get the tens of a number having 3 digits

function extractTheTensDigits(n){
    if(n.toString().length !== 3) return -1;

    // processing
    let digitsTens = n % 100;
    return Math.trunc(digitsTens / 10);

}
console.log(extractTheTensDigits(908));

// EX3: get the hundreds of a number having 3 digits

function extractTheHundredsDigits(n){
    if(n.toString().length !== 3) return -1;

    // processing
    return Math.trunc(n / 100);

}
console.log(extractTheHundredsDigits(285));

// EX4: sum all digits of a number having 3 digits
function sumAllNumber(n){
    if(n.toString().length !== 3) return -1;

    // processing
    const numberA = n % 10;
    const numberB = Math.trunc(n % 100 / 10);
    const numberC = Math.trunc(n / 100);
    return  numberA + numberB + numberC;

}
console.log(sumAllNumber(453));

// ------------------------------------------
//  Taxi
// Khi number custom > 4 , ưu tiên dùng xe 7 chỗ
// Khi number custom <= 4 , ưu tiên dùng xe 4 chỗ
// return số duy nhất là tổng all 2 loại xe

function getTaxiCount(passengersCount) {
    if(passengersCount <= 0) return 0;

    let taxi4 = 0;
    let taxi7 = 0;
    if(passengersCount <= 4){
        taxi4 += 1
    }else if(passengersCount <= 7 && passengersCount > 4){
        taxi7 += 1
    }else{
        let a = passengersCount / 7;
        let b = passengersCount % 7;
        taxi7 += Math.floor(a)
        if(b <= 4 && b != 0){
            taxi4 += 1
        }else if(b > 4){
            taxi7 += 1
        }
    }
    return taxi7 + taxi4;

}

console.log(getTaxiCount(45));




function getTaxiCount(passengersCount){
    if(passengersCount <= 0) return 0;


    let x = passengersCount % 7;
    let y = Math.trunc(passengersCount / 7);

    if(x === 0) return y;
    return y + 1
}
console.log(getTaxiCount(45));

function getTaxiCount2(passengersCount){
    if(passengersCount <= 0) return 0;

    return Math.ceil(passengersCount / 7)
}
console.log(getTaxiCount2(45));



// Tìm ra số lớn nhất của một số nguyên dương
function getMaxDigit(n) {
    // your code here
    if(n < 0 || n >= 1000) return -1;

    let a = n % 10;
    let b = Math.trunc(n % 100 / 10 );
    let c = Math.trunc(n / 100)

    // let  max = a
    // if(max < b) max = b;
    // if(max < c) max = c;
    // return max;

    return Math.max(a, b, c)

    
}
console.log(getMaxDigit(629))


// Nhập vào 2 số nguyên bất kỳ 2
// 1 nếu a > b
// 0 nếu a bằng b
// -1 nếu a < b

function compareNumbers(a, b) {
    // your code here
    if(a < 0 || b < 0) return null;

    if(a > b) return 1;
    if(a == b) return 0;
    if(a < b) return -1;
  }

  console.log(compareNumbers(5, 9));
  console.log(compareNumbers(5, 5));
  console.log(compareNumbers(9, 5));
  console.log(compareNumbers(-2, 5));

// Nhận vào số dương có tối đa 3 chữ số
// số đối xứng: đọc từ trái sang phải giống đọc từ phải sang trái
  function isSymmetricNumber(n) {
    // your code here 

    if(n < 0 || n > 1000) return -1;

    let a = n % 10;
    let b = Math.trunc(n % 100 / 10);
    let c = Math.trunc(n / 100);

    let isCheck = false;
    if(n < 10) return true;
    if(n >= 10 && n < 100 && a == b) return true;
    if( n < 1000 && a == c) return true;
        
    return isCheck;
}
console.log(isSymmetricNumber(998));
