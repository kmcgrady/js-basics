// Define a function named sum that takes two arguments
// var a  = 1;
// var b  = 2;
// Return the sum of these two arguments
function sum(a, b) {
  return a + b;
}

// Define a function named product that takes two arguments
// var a  = 1;
// var b  = 2;
// Return the product of these two arguments
function product(a, b) {
  return a * b;
}

// Define a function named sumAndProduct that takes three arguments
// var x = 1;
// var y = 2;
// var z = 3;
// Return the sum of the first two arguments multiplied by the third argument.
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Grouping
function sumAndProduct(x, y, z) {
  return (x + y) * z;
}

// Define a function named roundUp that takes one argument
// var decimal  = 1.23456;
// Return the argument rounded up to the nearest integer
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil
function roundUp(decimal) {
  return Math.ceil(decimal);
}

// Define a function named toFahrenheit that takes one argument
// var celsius = 37;
// Return the argument converted to Fahrenheit rounded to the nearest integer.
function toFahrenheit(celcius) {
  return Math.ceil((celcius * 1.8) + 32);
}

// Define a function named areaOfCircle that takes one argument
// var radius = 12;
// Return the area of a circle using that argument. Use Google to find the
// formula.
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI
function areaOfCircle(radius) {
  return Math.PI * radius * radius;
}

// Define a function named areaOfRing that takes two arguments
// var outerRadius = 12;
// var innerRadius = 6;
//
// Return the area of a circular ring using these arguments. Use Google to find
// the formula.
function areaOfRing(outerRadius, innerRadius) {
  return (Math.PI * outerRadius * outerRadius) - (Math.PI * innerRadius * innerRadius)
}

// Define a function named greet that takes 2 arguments
// var firstName = 'Kailana';
// var lastName = 'Sommer';
// Return a string in the format 'Hello, Kelly Rippa!' using these arguments
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#Template_strings
function greet(firstName, lastName) {
    return (`Hello, ${firstName} ${lastName}!`);
  }


// Define a function named toSentence that takes four arguments
// var word1 = 'wax';
// var word2 = 'leg rope';
// var word3 = 'zinc';
// var oxfordComma = true;
//
// If oxfordComma is true,
//    Return a string in the format "word1, word2, and word3."
// If oxfordComma is false,
//    Return a string in the format "word1, word2 and word3."
function toSentence(word1, word2, word3, oxfordComma) {
  if (oxfordComma) {
    return word1 + ', ' + word2 + ',' + ' and ' + word3 + '.';
  } else {
    return word1 + ', ' + word2 + ' and ' + word3 + '.';
  }
}
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Addition
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#String_operators


// Define a function named toRoman that takes one argument
// var  arabic = 5
//
// If the argument is less than 1
//    Return null
// If the argument is greater than 10
//    Return null
// Otherwise
//    Return the argument converted to a roman numeral string
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#switch_statement

function toRoman(arabic) {
  switch(true) {
    case (arabic < 1):
      return null;
    case (arabic > 10):
      return null;
    case (arabic == 1): 
      return 'I';
    case (arabic == 2): 
      return 'II';
    case (arabic == 3): 
      return 'III';
    case (arabic == 4):
      return 'IV';
      case (arabic == 5): 
      return 'V';
    case (arabic == 6): 
      return 'VI';
    case (arabic == 7): 
      return 'VII';
    case (arabic == 8): 
      return 'VIII';
    case (arabic == 9): 
      return 'IX';
    case (arabic == 10): 
      return 'X';
    default: 'I';
      // code block
  }
}

// Define a function toDolla that takes one argument
//    amount (number)
//
// Return the argument converted to a dollar currency string. For example, given
// 10, then return '$10.00'.
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
function toDolla(amount) {
  return "$" + amount.toFixed(2);
}

// Define a function named percentage that takes two arguments
//    numerator (number)
//    denominator (number)
//
// Return the percentage of the first argument divided by the second. For
// example, given 1 and 4, then return '25.0%'.
function percentage(numerator, denominator) {
  return ((numerator/denominator)*100).toFixed(1) + "%";
}



// Define a function named isStrictlyEqual that takes two arguments
//    value1 (anything)
//    value2 (anything)
//
// If the two arguments are both equal and have the same type
//    Return true
// Otherwise
//    Return false
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#Strict_equality_using
//
// See https://dorey.github.io/JavaScript-Equality-Table/
function isStrictlyEqual(value1, value2) {
  if (value1 === value2) {
    return true;
  } else {
    return false;
  }
}


// Define a function named isLooselyEqual that takes two arguments
//    value1 (anything)
//    value2 (anything)
//
// If the two arguments are both equal regardless of type
//    Return true
// Otherwise
//    Return false
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#Loose_equality_using
function isLooselyEqual(value1, value2) {
  if (value1 == value2) {
    return true;
  } else {
    return false;
  }
}


// Define a function named remainder that takes two arguments
//    numerator (number)
//    denominator (number)
//
// Return the remainder of the first argument divided by the second. For
// example, given 4 and 3, then return 1.
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder_()
function remainder(numerator, denominator) {
  return numerator%denominator;
}


// Define a function named isEven that takes one argument
//    integer (number)
//
// If the number is even
//    Return true
// Otherwise
//    Return false
//
// Hint: What number will give you a remainder of 0 if the argument is even?
function isEven(integer) {
  if (integer % 2 == 0){
    return true;
  } else {
    return false;
  }
}


// Define a function named isOdd that takes one argument
//    integer (number)
//
// If the number is odd
//    Return true
// Otherwise
//    Return false
function isOdd(integer) {
  if (integer % 2 !== 0) {
    return true;
  } else {
    return false;
  }
}


// Define a function named isVowel that takes one argument
//    letter (string)
//
// If the letter is a vowel
//    Return true
// Otherwise
//    Return false
//
// Treat 'y' as a consonant.
function isVowel(string) {
  if (string === 'a' || string === 'e' || string === 'i' || string === 'o' || string === 'u') {
    return true;
  }
  else {
    return false;
  }
}

// Define a function named largestOfThree which takes three arguments
//    value1 (number)
//    value2 (number)
//    value3 (number)
//
// Return the largest argument by value
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
function largestOfThree(value1, value2, value3) {
  return Math.max(value1, value2, value3);
}

// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
// Define a function named longestOfThree which takes three arguments
//    value1 (string)
//    value2 (string)
//    value3 (string)
//
// Return the longest argument by length
//
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length
//
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
function longestOfThree(value1, value2, value3) {
  const longest = Math.max(value1.length, value2.length, value3.length);
  if (longest == value1.length) {
    return value1;
  } else if (longest == value2.length) {
    return value2;
  } else {
    return value3;
  }
}


// Define a function named iceCreamPosition that takes two arguments
//    pieTemperature (string)
//    iceCreamFlavor (string)
//
// If iceCreamFlavor is 'cardamom'
//    Return 'not at all' immediately
// Otherwise
//    If pieTemperature is 'cold'
//      Return 'on top'
//    If pieTemperature is 'warm'
//      Return 'on the side'
// Otherwise
//    Return 'up to you'
function iceCreamPosition(pieTemperature, iceCreamFlavor) {
    if (iceCreamFlavor == 'cardamom' || iceCreamFlavor == 'cardamom') {
      return 'not at all';
    } 
    if (pieTemperature == 'cold') {
      return "on top";
    }
    if (pieTemperature == 'warm') {
      return 'on the side';
    } else {
      return 'up to you';
    }

}


// Define a function named isLeapYear that takes one argument
//    year (number)
//
// If the argument is a leap year
//    Return true
// Otherwise
//    Return false
//
// See: https://en.wikipedia.org/wiki/Leap_year#Algorithm
function isLeapYear(year) {
  if (year % 400 === 0){
    return true;
  }
  if (year % 100 === 0) {
    return false;
  }
  return year % 4 === 0;
}




// Define a function named shout that takes one argument
//    message (string)
//
// Return the same argument but all in uppercase letters. For example, given
// 'Shut the front door', then return 'SHUT THE FRONT DOOR'
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
function shout(message) {
  return message.toUpperCase();
}


// Define a function named whisper that takes one argument
//    message (string)
//
// Return the same argument but all in lowercase letters and prefixed by
// 'shhh... '. For exaple, given 'GOLF TIME', then return "shhh... golf time"
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
function whisper(message) {
  return 'shhh... ' + message.toLowerCase();
}


// Define a function named stopAt that takes two arguments
//   source (string)
//   stop (string)
//
// Return the source all the way up to the position where stop begins. For
// example, given 'how now brown cow' and 'brown', then return 'how now'.
//
// Hint: This will require a combination of 3 different steps
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
function stopAt(source, stop) {
  // console.log(source.indexOf(stop));
  let stopIndex = source.indexOf(stop);
  // console.log(stopIndex);
  let sourceToStop = source.substring(0,stopIndex);
  // console.log(sourceToStop);
  return sourceToStop.trim();
}


// Define a function named capitalize that takes one argument
//    message (string)
//
// Return the argument with the first letter capitalized. For example, given
// 'oh, you', then return 'Oh, you'.
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring
function capitalize(message) {
  return message.charAt(0).toUpperCase() + message.slice(1);
  // get a character at index 0 and capitalise, then final the rest of the strong and concat minus the first letter
}


// Define a function named leftPad5 that takes one argument
//    word (string)
//
// If the argument's length is less than 5
//    Return the argument but prefixed with spaces until it's 5 characters long
// If the argument's length is 5 or more characters
//    Return the argument
function leftPad5(word) {
  // let shorterThanFive = (word.padStart(4, ' ')).substring(0,5);
  // let shorterThanFive = (word.padStart(4)).substring(0,5);
    console.log(word.toString().padStart(5, ' '));
  if (word.length <= 5) {
    return (word.toString().padStart(5, ' '));
  } else if (word.length >= 5) {
    return word
  }
}

// This ^^ console logs correct - I'm a bit confused.


// Define a function named superPicky that takes one argument
//    value (anything)
//
// If the argument is a string,
//    Return 'Thanks! Got it.'
// Otherwise
//    Return 'I wanted a string, but all I got was a stinking TYPE'
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
function superPicky(value) {
  let type = typeof value;
  console.log(value)
  if (typeof value === 'string') {
    return 'Thanks! Got it.';
  } else {
    return `I wanted a string, but all I got was a stinking ${type}`;
  }
}
// if (typeof value === 1 || typeof value === {} || typeof value === true || typeof value === 'function')

// Define a function named calculateTaxRate that takes two arguments
//    salary (number from 1 to 74,900)
//    status (string that's either 'single' or 'joint')
//
// If the status is anything other than 'single' or 'joint'
//    Return a string that says 'Better call an accountant'
// If the salary is greater than 74,900
//    Return a string that says 'Better call an accountant'
// Otherwise
//    Return a string for the tax percentage they are in:
//       * single up to (and including) $9,225 => '10%'
//       * single above $9,225 => '15%'
//       * joint up to (and including) $18,450 => '10%'
//       * joint above $18,450 => '15%'
function calculateTaxRate(salary, status) {
  if (status !== 'single' || status !== 'joint') {
    return 'Better call an accountant';
  } if (salary > 74900) {
    return 'Better call an accountant';
  } else if (status === 'single' && salary <= 9225) {
    return '10%';
  } else if (status === 'single' && salary >= 9225) {
    return '15%';
  }
}
