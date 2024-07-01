// DATA TYPES
// STRINGS, NUMBERs, ARRAYS, OBJECTS, BOOLEAN, UNDEFINED

// STRING: is a data type rpresenting a sequence of characters that may consist of numbers, letters, symbols, words or sentences.

const stringOne = "123456";
const stringTwo = "qwerty";
const stringThree = "the hold fold";
const stringFour = "#$%^&*()@₦ë$→";
const stringFive = "My name is Muwaffaq Aliyu, I am a frontend developer";

// NUMBERS: data types that represent intergers

const numberOne = 1000;
const negativeNumbers = -20;
const decimalsn = 9.87;

//  Arrays: is a type of object that is used to store data, it is an ordered collection or list that contains different datatyps

const ArrayOne = [
  // 0
  {
    name: "Bala",
    age: "30",
  },
  // 1
  {
    name: "muwaffaq",
    age: "10",
  },
  // 2
  {
    name: "Bala",
    age: "30",
  },
];

// object: is a collection of properties that have a /name/key and a value
const object = {
  firstName: "Muwaffaq",
  lastName: "Aliyu",
  age: 10,
  occupation: "Software Engineer",
};

const arrayObject = {
  array1: ["string", "string2", "string3"],
  array2: [12, 13, 16, 80, 40],
};

// BOOLEAN: its value is either true or false

let isActive = true;

// undefined: the value is unknown or the system cannot tell what datatype it is
var taxId = undefined;

// null
const number = null;

// STRING METHOD
// String length - know the number of the characters in a string
// String slice() - is used to get a portion of the string by selecting the start and stop index
// String charAt() - is used to get the character at a particular index
// String charCodeAt()- is used to get the character at a particular index
// String at()- is used to get the character at a particular index
// String [ ] - is used to get the character at a particular index
// String substring() - similar to slice() but you would be passing the start index to cut from and the length you want to cut
// String toUpperCase() - to convert strings to capital letters
// String toLowerCase() - to convert strings to small letters
// String concat() - is used to join to strings or add new stings to an existing string
// String trim() - trim is used to remove extra or unwanted spaces at the start and end of a string
// String trimStart() - removes white spaces at the start
// String trimEnd() - removes white spaces at the end of a string
// String repeat() - repeats a string depending on the number of times you pass as an argument
// String replace()- it allows you to change a particular sting value with another string
// String replaceAll()- allows you change all the instances of a string with another in a string
// String split() - splits a string using a particular seperator in the string and then returns an array

const firstname = "MuwaffaqAliyu ";
const fullname = "Muwaffaq Aliyu";
const houseAddress = "NO 13 Aliyu, Dambazau Street, Aliyu, Gandu Layout, Aliyu";

const streetName = houseAddress.slice(6, 28);

const countries = "JAPAN RUSSIA ITALY";
const changedName = fullname.replace("Muwaffaq", "Bala");

const fruits = "Orange, Banana, Apple, Guava";
const splittedCountrie = countries.split(" ");

// NUMBER METHODS
// toString()	used to change a number to a string
// toFixed()	Returns a number  with a number of decimals
// parseInt()

const oddNumber = 5;
const string = oddNumber.toString();

const decimal = 35.657894;
const twodecimalPlaces = decimal.toFixed(3);

const numberString = "56";
const value = "1200";
const convertedNumber = parseInt(numberString);
const parsedValue = parseInt(value);

// console.log(string, "string")
// console.log(twodecimalPlaces, "decimals")
// console.log(convertedNumber, "-converted numbers")
// console.log(parseValue, "Converted value")

// ARRAY METHODS
const arrayOfStrings = [
  "oranges", //0
  "apples", //1
  "bananas", //2
  "coconut", //3
  "pineapples", //4
  "pear", //5
];
// Array length - check the length or number of items in an array
// arrayOfStrings.length
// console.log(arrayOfStrings.length)

// Array toString() - changes the array to a string
// const arrayConvertedToString = arrayOfStrings.toString()
// console.log(arrayConvertedToString, "- CONVERTED ARRAY TO STRING")

// at() or Array [] - tells the value of an index in an array
// const thirdValue = arrayOfStrings[4]
// console.log(arrayOfStrings)
// console.log(thirdValue)

// Array push() - method for addiing a new value to an exisiting array

// arrayOfStrings.push("kiwi", {name: "Aliyu", age: 30})
// console.log(arrayOfStrings)
// Array pop() - is used to remove the last value in an array
// arrayOfStrings.pop()
// console.log(arrayOfStrings, "POPPED ARRAY")

// Array shift() - removes the first value/element in an array and returns it seperately
// const shift = arrayOfStrings.shift()
// console.log(arrayOfStrings)

// Array unshift() - used to add a value to the
// const unshift = arrayOfStrings.unshift("kiwi")
// console.log(arrayOfStrings)

// function manipulateData (value) {
//  remove the first value in the array
//   arrayOfStrings.shift()
//  replace with the new value
//   arrayOfStrings.unshift(value)
//  add another value to the end of the array
//   arrayOfStrings.push("coconut", "strawberry")
// return arrayOfStrings
// }
// console.log(manipulateData("grapes"))

// Array indexOf() - check the index of a value in an array
// const indexOfBanana = arrayOfStrings.indexOf("pear");
// console.log(indexOfBanana)
// Array lastIndexOf() - check the index of the last occurence of a value
// const lastIndex = arrayOfStrings.lastIndexOf("apples")
// console.log(lastIndex)

// Array includes() - checks if an array contains a particular value then returns true of false
// const bool = arrayOfStrings.includes("grapes")
// console.log(bool)

// Array find() - find
// const findValue = arrayOfStrings.find((obj) => obj === "apples");
// console.log(findValue);

// Array.sort()-alphabetical order
// const animals = ["cat", "mouse", "horse", "lion", "zebra", "giraffe"];
// console.log(animals.sort())

// Array.reverse()
// const sortedArray = animals.sort()
// console.log(sortedArray.reverse())

// Array.forEach()

// animals.forEach(function (animal) {
//   console.log(`This is a ${animal}`);
// });

// Array.map()
// animals.map(function (item, index) {
//   return console.log(`${index + 1} this is a ${item}`);
// });
// Array.filter()
// const arrayOfObject = [
//   {
//     name: "Aliyu",
//     age: 20,
//     isYoung: false,
//   },
//   {
//     name: "Fatima",
//     age: 25,
//     isYoung: false,
//   },
//   {
//     name: "Habibah",
//     age: 10,
//     isYoung: true,
//   },
//   {
//     name: "Jamilu",
//     age: 9,
//     isYoung: true,
//   },
//   {
//     name: "Umar"
//     age: 24,
//     isYoung: true,
//   },
// ];
// const olderPersons = arrayOfObject.filter((obj) => {
//   if (obj.isYoung === false) {
//     obj;
//   }_
// });

// console.log(olderPersons);

// const youngerPersons = arrayOfObject.filter((item) =>
//   item.isYoung === true ? item : null
// );

// console.log(youngerPersons);

// [] = brackets - used for initiating arrays and setting indexes in arrays
// {} = curly brackets- used for mainly creating ojects, writing variables in react

// () = paranthesis - is used mainly in writing functions and also declaring functions e.g function myFunct () {}

// <> = angle brackets - used for opening and closing tags in HTML e.g <h1></h1>

// OBJECTS: a collection of properties which are associated with a name/key and a value
const studentOne = {
  studentId: "001",
  studentName: "Abdulrahman Isa",
  age: 22,
  email: "abdulisa@gmail.com",
  gender: "male",
  institution: "Bayero University Kano",
  level: 200,
  dept: "Computer Science",
  printInfo: function () {
    console.log(`I am Abdulrahman Isa from dept of computer science `);
  },
  hobbies: ["football", "reading", "video games"],
};
// const studentTwo = {
//   studentId: "002",
//   studentName: "Aisha Umar",
//   age: 22,
//   email: "aishUmar@gmail.com",
//   gender: "female",
//   institution: "Ahmadu Bello University Zaria",
//   level: 200,
//   dept: "Computer Engineering",
//   printInfo: function () {
//     console.log(`I am Aisha Umar from dept of computer Engineering `);
//   },
//   hobbies: ["volleyball", "reading", "shopping"]
// };

const students = [
  {
    studentId: "set014001",
    studentName: "Abdulrahman Isa",
    age: 22,
    email: "abdulisa@gmail.com",
    gender: "male",
    institution: "Bayero University Kano",
    level: 200,
    dept: "Computer Science",
    printInfo: function () {
      console.log(`I am Abdulrahman Isa from dept of computer science `);
    },
    hobbies: ["football", "reading", "video games"],
  },
  {
    studentId: "set014002",
    studentName: "Aisha Umar",
    age: 22,
    email: "aishUmar@gmail.com",
    gender: "female",
    institution: "Ahmadu Bello University Zaria",
    level: 200,
    dept: "Computer Engineering",
    printInfo: function () {
      console.log(`I am Aisha Umar from dept of computer Engineering `);
    },
    hobbies: ["volleyball", "reading", "shopping"],
  },
  {
    studentId: "set013002",
    studentName: "Mohammad Umar",
    age: 23,
    email: "MohUmar@gmail.com",
    gender: "male",
    institution: "Ahmadu Bello University Zaria",
    level: 300,
    dept: "Civil Engineering",
    printInfo: function () {
      console.log(`I am Moh Umar from dept of Civil Engineering `);
    },
    hobbies: ["basketball", "reading"],
  },
  {
    studentId: "set013002",
    studentName: "Mohammad Umar",
    age: 23,
    email: "MohUmar@gmail.com",
    gender: "male",
    institution: "Ahmadu Bello University Zaria",
    level: 300,
    dept: "Civil Engineering",
    printInfo: function () {
      console.log(`I am Moh Umar from dept of Civil Engineering `);
    },
    hobbies: ["basketball", "reading"],
  },
  {
    studentId: "set013002",
    studentName: "Mohammad Umar",
    age: 23,
    email: "MohUmar@gmail.com",
    gender: "male",
    institution: "Ahmadu Bello University Zaria",
    level: 300,
    dept: "Civil Engineering",
    printInfo: function () {
      console.log(`I am Moh Umar from dept of Civil Engineering `);
    },
    hobbies: ["basketball", "reading"],
  },
  {
    studentId: "set013002",
    studentName: "Mohammad Umar",
    age: 23,
    email: "MohUmar@gmail.com",
    gender: "male",
    institution: "Ahmadu Bello University Zaria",
    level: 300,
    dept: "Civil Engineering",
    printInfo: function() {
      console.log(`I am Moh Umar from dept of Civil Engineering `);
    },
    hobbies: ["basketball", "reading"],
  },
];

function renderStudent() {
  students.map((student, index) => {
    student.printInfo();
  });
}

renderStudent();
