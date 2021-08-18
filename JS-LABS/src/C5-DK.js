// Write a function to check a positive even number
// if yes return true , otherwise false

// flag
function isPositiveEvenNumber(n){
    let isValid;

    if(n > 0 && n % 2 === 0){
        isValid = true;
    }else{
        isValid = false;
    }

    return isValid;
}

// v2
function isPositiveEvenNumber(n){
    let isValid = false;

    if(n > 0 && n % 2 === 0){
        isValid = true;
    }

    return isValid;
}


// v3
function isPositiveEvenNumber(n){
    if(n > 0 && n % 2 === 0){
        return true;
    }
    return false;

}

console.log(isPositiveEvenNumber(0)); 

// v4
function isPositiveEvenNumber(n){
    return (n > 0 && n % 2 === 0);

}

// ----------------------------------------------------------------

// write a function to classify student
// Receive mark as a number ,output below:
// mark > 8 -> 'Excellence"
// 7 <= mark <= 8 -> "Good"
// 4 <= mark <= 6 -> "not Good"
// mark < 4 -> "Bad"

// v1
function isClassifyStudent(mark){
    let result;

    if(mark > 8) result = 'Excellence';
    else if( mark >= 7) result = 'Good';
    else if( mark >= 4) result = 'Not Good';
    else result = 'Bad';

    return result;
}
console.log(isClassifyStudent(11));

// v2
function isClassifyStudent(mark){
    let result = 'Bad';

    if(mark > 8) result = 'Excellence';
    else if( mark >= 7) result = 'Good';
    else if( mark >= 4) result = 'Not Good';
   

    return result;
}

// v3
function isClassifyStudent(mark){
    if(mark < 0 || mark > 10) return 'Invalid mark!'


    if(mark > 8) return 'Excellence';
    if( mark >= 7) return 'Good';
    if( mark >= 4) return 'Not Good';
   

    return 'Bad';
}

console.log(isClassifyStudent(9.5));

// ----------------------------------------------------------------

// write a function to classify student
// Receive mark as a number ,output below:
// mark > 8 -> 'Excellence"
// 7 <= mark <= 8 -> "Good"
// 4 <= mark <= 6 -> "not Good"
// mark < 4 -> "Bad"

// Using loop switch...case

function isClassifyStudent(mark){
    let result;
    switch(mark){
        case 1:
        case 2:
        case 3:
            result = 'Bad'
            break;
        case 4:
        case 5:
        case 6:
            result = 'Not Good'
            break;
        case 7:
        case 8:
            result = 'Good'
            break;
        case 9:
        case 10:
            result = 'Excellence'
            break;
        default:
            result = 'Invalid Mark!'
    }

    return result;
}

console.log(isClassifyStudent(11))
console.log(isClassifyStudent(9.5))
console.log(isClassifyStudent(7))
console.log(isClassifyStudent(5))
console.log(isClassifyStudent(2))

// --------------------------------
// Using loop switch...case

// A list error codes to server
// E01: Invalid username or password
// E02: Too many attempts
// E03: Missing data
// Other code: Something went wrong
// Write a function that take errorCode and 
// return the according message


function getErrorCode(errorCode) {
    let message = '';
    switch (errorCode) {
        case 'E01':
            message = 'Invalid username or password'
            break;
        case 'E02':
            message = 'Too many attempts'
            break;
        case 'E03':
            message = 'Missing data'
            break;

        default:
            message = 'Something went wrong'
    }
    return message;
}

console.log(getErrorCode('E03'));

// Way 2
function getErrorCode(errorCode) {
    const errorMap = {
        E01: 'Invalid username or password',
        E02: 'Too many attempts',
        E03: 'Missing data',
    };
    return errorMap[errorCode]||'Something went wrong'
    // errorMap[errorCode]? errorMap[errorCode] : 'Something went wrong'
}

console.log(getErrorCode('E04'));


function getTicketPrice(age) {
    
    if(age <= 0 || age > 125) return -1
    // your code here
    if(age < 6 || age >= 70) return 0;
    if(age <= 12) return 20000;
    if(age < 70) return 50000;
}

console.log(getTicketPrice(59))