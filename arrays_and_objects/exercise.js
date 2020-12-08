// Define a function named sum that takes in one argument.
//    arr (array of numbers)
//
// Return the sum of all of the numbers in the array. For example, given
// [1, 2, 3, 4], then return 10. If the array is empty, return 0.
function sum(arr) {
  let sumTotal = 0;
    for (i = 0; i < arr.length; ++i) {
      sumTotal += arr[i]; 
    }
    return sumTotal;
}


// Define a function named product that takes in one argument.
//    arr (array of numbers)
//
// Return the product of all of the numbers in the array. For example, given
// [1, 2, 3, 4], then return 24. If the array is empty, return 1.
function product(arr) {
  let sumTotal = 1;
    for (i = 0; i < arr.length; ++i) {
      sumTotal *= arr[i]; 
    }
    return sumTotal;
}

// Define a function named concatenate that takes in one argument.
//    arr (array of strings)
//
// Return the concatenation of all the strings in the array. For example, given
// ['hello', 'my', 'name', 'is', 'ken'], then return 'hellomynameisken'. 
// If the array is empty, return ''.
function concatenate(arr) {
  if (arr.length > 0) {
    return arr.join('');
  }  else {
    return '';
  }
}

// Define a function named repeat that takes in two arguments.
//     str (string)
//     times (number)
//
// Return a new string containing times copies of the input str. For example,
// given 'hi' and 4, then return 'hihihihi'.
function repeat(str, times) {
  if (times > 0)
    return str.repeat(times);
  else {
    return repeat;
  }
}


// Define a function named filterPassingGrades that takes in one argument.
//     grades (array of numbers)
//
// Return a new array with any grade less than 70 filtered out. For example,
// given [88, 67, 70, 92, 53], then return [88, 70, 92].
function filterPassingGrades(grades) {
  let newArr = [];
  for (var i = 0; i < grades.length; i++) {
    newArr = grades.filter(grade => grade >= 70);
    // console.log(newArr);
  }
  // console.log(newArr);
  return newArr;
}

// Define a function named replace that takes in three arguments.
//    arr (array of numbers)
//    from (number)
//    to (number)
//
// Return a new array of numbers where all from elements are replaced with to.
// For example, given [1, 3, 2, 1, 3], 1, and 4, then return [4, 3, 2, 4, 3].
function replace(arr, from, to) {
  for (var i = 0; i < arr.length; i++) {
    // use the for loop to itereate over each value
    if (arr[i] === from) {
      // find the indices of i which is  equal to 'from'
      arr[i] = to;
      //change the indices of i whihc is equal to from and change it to 'to'
    }
  }
  return arr;
}


// Define a function named flatten that takes in one argument.
//     arr (array of arrays)
//
// Return a new array that combines all of elements of each inner array. For
// example, given [[1], [2, 3], [4]], then return [1, 2, 3, 4].
//
// Tip: You only need to flatten one level deep.
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
function flatten(arr) {
  let newArr = [];
    for (var i = 0; i < arr.length; i++) {
      newArr = newArr.concat(arr[i]);
      // console.log(newArr);
    }
  // console.log(newArr);
  // this with log as many time as the looop has to run to validate the function
  return newArr;
}


// Define a function named max that takes in one argument.
//    arr (array of numbers)
//
// Return the maximum number in the array. For example, given [1, 2, -3, 4],
// then return 4. If the array is empty, return -Infinity.
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
function max(arr) {
  return Math.max(...arr);
}


// Define a function named min that takes in one argument.
//    arr (array of numbers)
//
// Return the minimum number in the array. For example, given [1, 2, -3, 4],
// then return -3. If the array is empty, return Infinity.
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min
function min(arr) {
  return Math.min(...arr)
}


// Define a function named mean that takes in one argument.
//    arr (array of numbers)
//
// Return the mean (i.e. average) of all of the numbers in the array. For
// example, given [1, 2, 6], then return 3. If the array is empty, return null.
function mean(arr) {
  let average;
  // declare the variable globally so that qwe can use them locally
  if (arr.length == 0) {
    average = null;
    // here the variable is being used locally and being passed info
  } else {
      let length = arr.length;
      let total = arr.reduce((sum, val) => (sum += val));
      average = total/length;
      // here the variable is being used locally and being passed info
  }
  return average;
}
// Define a function named median that takes in one argument.
//    arr (array of numbers)
//
// Return the median of all of the numbers. For example, given [1, 2, 6], then
// return 2. Also, if given [1, 2, 6, 8], return 4. If the array is empty,
// return null.
//
// Tip: Use Google to learn more about calculating the median.
// Tip: The given array may not be sorted.
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
function median (arr) {
  let sortedArr = arr.sort();
    // console.log(sortedArr);
  let middle = Math.ceil(arr.length / 2);
    // console.log(middle);
  
  let medianArr; 

  if (arr.length == 0){
    medianArr = null;
  } else if (arr.length % 2 == 0) {
    // if the modus has no remainer. ie. is EVEN
    medianArr = (sortedArr[middle] + sortedArr[middle - 1]) / 2;
    // console.log(medianArr);
  } else {
    medianArr = sortedArr[middle - 1];
    // console.log(medianArr);
  }
  return medianArr;
}


// Define a function named contains that takes in two arguments.
//     arr (array of strings)
//     str (string)
//
// Return true if that string exists in the array, otherwise false.
function contains(arr, str) {
  // console.log(str);
    if (arr.includes(str)) {
      return true;
    } else {
      return false;
    }
}


// Define a function named distance that takes in two arguments.
//    point1 (object)
//    point2 (object)
//
// Assume each point argument has the following format.
//    { x: NUMBER, y: NUMBER }
//
// Return the distance between the two points on a Cartesian coordinate system.
// For example, given { x: 3, y: 2 } and { x: 9, y: 7 }, then return
// approximately 7.810249675906654.
//
// Tip: Use Google to learn more about calculating the distance.
function distance(point1, point2) {
    // console.log(point1);
    // console.log(point1.x);
    // console.log(point1.y);
    // console.log(point2);
    // console.log(point2.x);
    // console.log(point2.y);
  let diffX = Math.abs(point1.x - point2.x);
  let diffY = Math.abs(point1.y - point2.y);
    // console.log(diffX);
    // console.log(diffY);
    // console.log(Math.pow(diffX, 2));
    // console.log(Math.pow(diffY, 2));
  let catDistance = Math.pow(diffX, 2) + Math.pow(diffY, 2);
    // console.log(Math.sqrt(catDistance));
  return Math.sqrt(catDistance);
}


// Define a function named combine that takes in two arguments.
//    obj1 (object)
//    obj2 (object)
//
// Return a new object that has the key-value pairs of both objects. For
// example, given { a: 1 } and { b: 2 }, then return { a: 1, b: 2 }.
// If there's a key in more than one object,
// the latest object to have the key will determine the value. For example,
// given {c: 3} and {c: 4}, then return {c: 4}.
function combine(obj1, obj2) {
 let newObj = {
   ...obj1,
   ...obj2
 };
//  console.log(newObj)
 return newObj;
}

// Define a function called invert that takes in one argument.
//    obj (object)
//
// Return a new object where the keys and values of the argument are inverted.
// For example, given { a: 1, b: 2 }, then return { '1': 'a', '2': 'b' }.
function invert(obj) {
  const newObj = {};
  Object.keys(obj).forEach((a => { newObj[obj[a]] = a }));
  console.log(newObj)
  return newObj;}


// Define a function named values that takes in one argument.
//    obj (object)
//
// Return an array of the values of the object. For example, given
// { a: 1, b: 2, c: 3 }, then return [1, 2, 3].
function values(obj) {
  // YOUR CODE HERE
}


// Define a function called toPairs that takes in one argument.
//    obj (object)
//
// Return a new array where each element is key-value pair array of the
// argument. For example, given { a: 1, b: 2 }, then return
// [['a', 1], ['b', 2]].
function toPairs(obj) {
  // YOUR CODE HERE
}


// Define a function called fromPairs that takes in one argument.
//    arr (array)
//
// Return a new object where each key-value pair is from an element in the
// argument. For example, given [['a', 1], ['b', 2]], then return
// { a: 1, b: 2 }.
function fromPairs(arr) {
  // YOUR CODE HERE
}
