// String Methods

// 1. *String Manipulation*:
//    - Task: Convert the string "hello world" to uppercase.
//    - Expected Output: "HELLO WORLD"
//    - Method to use: upper()
const string = "hello world"
const uppercaseString = string.toUpperCase()
console.log(uppercaseString)
// 2. *Substring Extraction*:
//    - Task: Extract the substring "world" from the string "hello world".
//    - Expected Output: "world"
//    - Method to use: Slicing or substring()
const extractedString = string.slice(5, 11)
const subStringMethod = string.substring(5, 11)
console.log(subStringMethod)

// 3. *String Concatenation*:
//    - Task: Concatenate the strings "Hello" and "World" to form a single string.
//    - Expected Output: "HelloWorld"
//    - Method to use: + operator or join()
const string1 = "Hello"
const string2 = "World"
const concat = string1.concat(string2)
console.log(concat)

// 4. *String Splitting*:
//    - Task: Split the string "apple,banana,orange" into a list of substrings.
//    - Expected Output: ['apple', 'banana', 'orange']
//    - Method to use: split()
const fruits = "apple,banana,orange"
const splittedFruits = fruits.split(",")
console.log(splittedFruits)

// 5. *String Stripping*:
//    - Task: Remove the leading and trailing whitespace from the string "   hello   ".
//    - Expected Output: "hello"
//    - Method to use: trim()

const whiteSpaceString = "   hello   "
const noWhiteSpace = whiteSpaceString.trim()
console.log(whiteSpaceString)
// 6. *String Searching*:
//    - Task: Find the index of the first occurrence of "world" in the string "hello world".
//    - Expected Output: 6
//    - Method to use: find()

// 7. *String Replacement*:
//    - Task: Replace all occurrences of "apple" with "banana" in the string "I like apple, apple is my favorite fruit".
//    - Expected Output: "I like banana, banana is my favorite fruit"
//    - Method to use: replace()

// 8. *String Formatting*:
//    - Task: Format the string "My name is {} and I am {} years old" with your name and age.
//    - Expected Output: "My name is John and I am 25 years old" (for example)
//    - Method to use: format() or f-strings

// 9. *String Checking*:
//    - Task: Check if the string "hello world" starts with "hello".
//    - Expected Output: True
//    - Method to use: startswith()

// 10. *String Length*:
//     - Task: Find the length of the string "hello".
//     - Expected Output: 5
//     - Method to use: len()

// These examples should provide clear instructions for your students to practice various string methods effectively.