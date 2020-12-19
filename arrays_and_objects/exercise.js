// Define a function named sum that takes in one argument.
//    arr (array of numbers)
//
// Return the sum of all of the numbers in the array. For example, given
// [1, 2, 3, 4], then return 10. If the array is empty, return 0.
function sum(arr) {
  var len = arr.length;
  var sum =0;
  for (var i=0; i<len; i++){
    sum =sum+arr[i];
  }
return sum;
}


// Define a function named product that takes in one argument.
//    arr (array of numbers)
//
// Return the product of all of the numbers in the array. For example, given
// [1, 2, 3, 4], then return 24. If the array is empty, return 1.
function product(arr) {
  var len = arr.length;
  var prod = 1;
  if (len>0){
    for (var i=0; i<len ; i++){
      prod =prod*arr[i];
    }
    }
    return prod ;
}

// Define a function named concatenate that takes in one argument.
//    arr (array of strings)
//
// Return the concatenation of all the strings in the array. For example, given
// ['hello', 'my', 'name', 'is', 'ken'], then return 'hellomynameisken'. If the
// array is empty, return ''.
function concatenate(arr) {
 var len = arr.length;
 var str ='';
if (len >0){
 for (var i=0; i<len ; i++){
   str= str.concat(arr[i]);
 }
}
 return str;
}

// Define a function named repeat that takes in two arguments.
//     str (string)
//     times (number)
//
// Return a new string containing times copies of the input str. For example,
// given 'hi' and 4, then return 'hihihihi'.
function repeat(str, times) {
  var out='';
  for(var i=0; i<times; i++){
     out=out.concat(str);
  }
  return out;
}


// Define a function named filterPassingGrades that takes in one argument.
//     grades (array of numbers)
//
// Return a new array with any grade less than 70 filtered out. For example,
// given [88, 67, 70, 92, 53], then return [88, 70, 92].
function filterPassingGrades(grades) {
  var len=grades.length;
  var out=[];
  for(var i=0; i<len; i++) {
    if(grades[i]<70){
    }
    else{
      out.push(grades[i]);
    }
  }
  return out;
}


// Define a function named replace that takes in three arguments.
//    arr (array of numbers)
//    from (number)
//    to (number)
//
// Return a new array of numbers where all from elements are replaced with to.
// For example, given [1, 3, 2, 1, 3], 1, and 4, then return [4, 3, 2, 4, 3].
function replace(arr, from, to) {
  var len=arr.length;
  for(var i=0; i<len; i++){
    if(arr[i]==from){
      arr[i]=to;
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
  out=[];
  var len=arr.length;
  for(var i=0; i<len; i++){
    var len1=arr[i].length;
    for(var j=0; j<len1; j++){
      out.push(arr[i][j]);
    }
  }
  return out;
}


// Define a function named max that takes in one argument.
//    arr (array of numbers)
//
// Return the maximum number in the array. For example, given [1, 2, -3, 4],
// then return 4. If the array is empty, return -Infinity.
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
function max(arr) {
 //var len = arr.length;
  //var max1=arr[0];
  //for(var i=0; i<len; i++){
    //if(max1<arr[i]){
      //max1=arr[i];

    //}
  //}
  var max1 = Math.max(...arr)
  return max1;
}


// Define a function named min that takes in one argument.
//    arr (array of numbers)
//
// Return the minimum number in the array. For example, given [1, 2, -3, 4],
// then return -3. If the array is empty, return Infinity.
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min
function min(arr) {
  var len = arr.length;
  var min1=arr[0];
  if(len == 0 ) {
    return  Infinity;
  } else {
    for(var i=0; i<len; i++){
      if(min1>arr[i]){
        min1=arr[i];
      }
    }
    return min1; 
  }
  
}


// Define a function named mean that takes in one argument.
//    arr (array of numbers)
//
// Return the mean (i.e. average) of all of the numbers in the array. For
// example, given [1, 2, 6], then return 3. If the array is empty, return null.
function mean(arr) {
  var len=arr.length;
  var mean1=null;
  var sum=0;
  if(len>0){
    for(var i=0; i<len; i++){
      sum=sum+arr[i];
    }
    mean1=sum/len;
  }
  return mean1;
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
  var med1=null;
  len = arr.length;
  if(len>0){
    arr.sort((a, b) => a - b);
    if(len%2 == 1){
      j=len/2;
      med1 = arr[j];
    }
    else{
      j=len/2;
      med1=(arr[j-1]+arr[j])*0.5;
    }
  }
return med1;
}


// Define a function named contains that takes in two arguments.
//     arr (array of strings)
//     str (string)
//
// Return true if that string exists in the array, otherwise false.
function contains(arr, str) {
  var match=0;
  var len = arr.length;
  for(var i=0; i<len; i++){
    if(arr[i]==str){
      match=1;
    }
  }
  if(match>0){
    return true;
  }
  else{
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
  var x1 = abs(point1[0]-point2[0]);
  var y1 = abs(point1[1]-point2[1]);
  var out = sqrt((x1**2)+(y1**2));
  return out;
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
var newobj={}
newobj.push({Object.keys(obj1) : Object.value(obj1)});
newobj.push({Object.keys(obj2) : Object.values(obj2)});
return newobj;
}


// Define a function called invert that takes in one argument.
//    obj (object)
//
// Return a new object where the keys and values of the argument are inverted.
// For example, given { a: 1, b: 2 }, then return { '1': 'a', '2': 'b' }.
function invert(obj) {
  var arr_key = Object.keys(obj);
  var arr_val = Object.values(obj);
  var len1=arr_key.length;
  var newobj={};
  for (var i=0; i<len1; i++){
    newobj.push({arr_val[i] : arr_kay[i]});
  }
return newobj;
}


// Define a function named values that takes in one argument.
//    obj (object)
//
// Return an array of the values of the object. For example, given
// { a: 1, b: 2, c: 3 }, then return [1, 2, 3].
function values(obj) {
  var arr_val = Object.values(obj);
  return arr_val;
}


// Define a function called toPairs that takes in one argument.
//    obj (object)
//
// Return a new array where each element is key-value pair array of the
// argument. For example, given { a: 1, b: 2 }, then return
// [['a', 1], ['b', 2]].
function toPairs(obj) {
  var arr_keys = Object.keys(obj);
  var arr_vals = Object.values(obj);
  var len = arr_keys.length;
  var out=[]; out1=[];
  for (var i=0; i<len; i++){
    out1.push(arr_keys[i]);
    out1.push(arr_vals[i]);
    out.push(out1);
    out1=[];
  }
  return out
}


// Define a function called fromPairs that takes in one argument.
//    arr (array)
//
// Return a new object where each key-value pair is from an element in the
// argument. For example, given [['a', 1], ['b', 2]], then return
// { a: 1, b: 2 }.
function fromPairs(arr) {
  var len = arr.length;
  var obj1={};
  for(var i=0; i<len; i++){
    obj1.push({arr[i][0] : arr[i][1]});
  }
  return obj1;
}
