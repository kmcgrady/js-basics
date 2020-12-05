/*
The purpose of this challenge is to be able to encode and decode a string using the Caesar cipher.

https://en.wikipedia.org/wiki/Caesar_cipher

Each string character has a numeric representation called an ASCII code. For example, the character "a" has an ASCII code of 97 and the character "b" has an ASCII code of 98.

https://en.wikipedia.org/wiki/ASCII#ASCII_printable_code_chart

JavaScript has a pair of methods to convert characters to and from ASCII codes.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt

"\n".charCodeAt(0);


https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode

String.fromCharCode(10)


The Caesar cipher works like this.

- Convert the character "a" to the ASCII code 97.
- Add 13 to that integer, resulting in 110.
- Convert the new ASCII code to a character, resulting in "n".

If by adding 13 to an ASCII code results in a number greater than 122 (i.e. "z"), wrap back around to the start of the alphabet.

It'll take a few steps to solve this cipher. Have fun!
*/

// Define a function named caesarShiftInt that takes one argument
//    integer (number)
//
// If the integer is less than 97
//    Throw an error with the message 'Error: integer too low'
// If the integer is greater than 122
//    Throw an error with the message 'Error: integer too low'
// If the integer + 13 would be greater than 122, the ASCII code for 'z'
//    Return an integer that is "wrapped" around
// Otherwise
//    Return the integer plus 13
//
// For example, given 97, then return 110. And given 110, then return 97.
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw

// this returns the string associated with the char code.  Example : 110 is the char code for the letter 'n'
console.log("FROM CHAR CODE: ",String.fromCharCode(110))

// charCodeAt finds the ascii code of a letter in a string, the reverse of String.fromCharCode()
// or if it's a single character, like 'a'.charCodeAt() , you do not have to pass the index of the string
// if I pass 'abc'.charCodeAt(1), it will return the char code for 'b'
console.log("CHAR CODE AT: ", "abcdefghijklmnopqrstuvwxyz".charCodeAt(13))

function caesarShiftInt(integer) {
  if (integer < 97) {
    throw 'Error: integer too low';
  } else if (integer > 122) {
    throw 'Error: integer too high';
  } else if ((integer + 13) > 122) {
      // taking the difference from 123, to determine how much to add to 97 to "wrap around"
      const diff = integer + 13 - 123
      const value = diff + 97
      // returns the string from that char code
    return String.fromCharCode(value)
  } else {
    return String.fromCharCode(integer + 13);
  }
}


// Define a function named caesarShiftChar that takes a one argument
//    char (string of one character)
//
// If the string is not a lowercase letter
//    Return the string as is
// Otherwise
//    Return the char shifted using the caesarShiftInt() function
//
// For example, given '!', then return '!'. But given 'a' or 'A', return 'n'.
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode
function caesarShiftChar(char){
  //   compare if the char.toUpperCase == itself
  if (char.toUpperCase() == char && char.toLowerCase() !== char) {
    // symbols will be unchanged, but letters will become lower case
    const lowerCase = char.toLowerCase()
    const charCode = lowerCase.charCodeAt()
    return caesarShiftInt(charCode);
  }
  if(char.toUpperCase() != char && char.toLowerCase() == char){
    const charCode = char.charCodeAt()
    return caesarShiftInt(charCode)
  }
  return char
}


// Define a function named encodeMessage that takes a one argument
//    message (string)
//
// Return the encoded version of the message. For example, given
// 'Hello, there!', then return 'uryyb, gurer!'.
//
// HINT: You'll need a loop for this.
function encodeMessage(message) {
  //   split the string into an array of all of it's characters
  // Example: 'hey'.split('') = ['h', 'e', 'y']
  const messageArray = message.split('')
  const encodedMessageArray = messageArray.map((letter) => {
    const encodedLetter = caesarShiftChar(letter)
    return encodedLetter
  })
  // joins the array of letters back into a string
  const encodedMessage = encodedMessageArray.join('')
  return encodedMessage
}


// Define a function named decodeMessage that takes a one argument
//    message (string)
//
// Return the decoded version of the message. For example, given
// 'uryyb, gurer!', then return 'Hello, there!'.
//
// HINT: Is there a way to use the encodeMessage() function?

function decodeMessage(message) {
  return encodeMessage(message)
}