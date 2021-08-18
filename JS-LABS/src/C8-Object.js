// OBJECT

// For... in : duyệt từng phần tử trong object

const student = {
  name: 'Student',
  age: 18,
  marks: {
    path: 10,
    english: 7,
  },
};
const oops = {
  render: 'ối dồi ôi',
  isHero: false,
};
const name = student.name;
// const {name, age} = student;

// check 'name' in student ?
console.log('name' in student);

// Clone object
// v1
const clonedStudent = Object.assign({}, student, oops);

console.log(clonedStudent);

// v2
const clonedStudent2 = {
  ...student,
  ...oops,
};
console.log(clonedStudent2);

// Deep clone object
//
const clonedStudent3 = {
  ...student,
};

clonedStudent3.marks.path = 1;
console.log(student.marks.path); // 1

const clonedStudent4 = {
  ...student,
  marks: {
    ...student.marks,
  },
};

clonedStudent4.marks.path = 1;
console.log(student.marks.path); // 10

// -----------------------------------------------.

for (let key in student) {
  console.log('key:', key);
  console.log('value:', student[key]);
}

// Object exercises

// Ex1: Create an object student with name is Easy Frontend and age is 18

// v1
const student = {};
student.name = 'Easy Frontend';
student.age = 18;
console.log(student);

// v2
const student1 = {
  name: 'Easy Frontend',
  age: 22,
};
console.log(student1);

// Ex2: check if an object is empty (means have no keys)
// {} --> no keys --> length of key list is 0

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}
console.log(isEmpty({}));
console.log(isEmpty({ name: 'Student', age: 16 }));

// Ex3: Get average mark of an object
// calcAvgMark({ math: 10, english: 8 }) --> 9
// avg =  sum/length

const calcAvgMarkA = {
  math: 10,
  english: 5,
  history: 7,
};

function calcAvgMark(mark) {
  const Length = Object.keys(mark).length;
  let sum = 0;

  for (const key in mark) {
    const value = mark[key];
    sum += value;
  }

  return (sum / Length).toFixed(1);
}

console.log(calcAvgMark(calcAvgMarkA));
// ------------------------.
const objA = {
  name: 'Bob',
  math: 9,
};
let obj2 = {};
function cloneObject(obj) {
  // your code here

  let obj2 = Object.create(obj);
  for (const key in obj) {
    obj2[key] = obj[key];
    // console.log(obj2[key])
  }
  return obj2;
  // console.log(obj2.name);
}
console.log(cloneObject({ name: 'String', age: 18 }));

//--------------------------------------------------.

// v1 Create isEqual(obj1, obj2) nhận vào 2 objects và trả về:
// Eg: isEqual({},{}) --> true
//     isEqual({ name: 'Bob' }, { name: 'Bob' }) --> true
//     isEqual({ name: 'Bob',id: 1 }, { name: 'Bob' }) --> false
function isEqual(obj1, obj2) {
  const obj1Str = Object.keys(obj1);
  const obj2Str = Object.keys(obj2);
  let value1 = '';
  let value2 = '';
  if (obj1Str.length === 0 && obj2Str.length === 0) return true;
  if (obj1Str.length != obj2Str.length) return false;

  for (const key in obj1) {
    value1 += obj1[key];
  }
  for (const key in obj2) {
    value2 += obj2[key];
  }

  if (value1 === value2) return true;

  return false;
}
console.log(isEqual({ name: 'Bob' }, { name: 'Bob' }));

// v2
function isEqual(obj1, obj2) {
  const obj1Str = Object.keys(obj1);

  if (obj1Str.length != Object.keys(obj2).length) return false;

  for (let i = 0; i < obj1Str.length; i++) {
    const k = obj1Str[i];

    if (k in obj2 === false) return false;
    if (obj2[k] !== obj1[k]) return false;
  }
  return true;
}
console.log(isEqual({ name: 'Bob', id: 1 }, { name: 'Bob', id: 3 }));
console.log(isEqual({}, {}));
