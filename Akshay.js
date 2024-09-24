// var x = 1;
// a();
// b();
// console.log(x);
// function a() {
//   var x = 10;
//   console.log(x);
// }
// function b() {
//   var x = 100;
//   console.log(x);
// }

// function a() {
//   var x = 10;
//   c();
//   function c(){
//     console.log(x)
//   }
// }
// a();
// console.log(x)

// 3. Write a JavaScript function to get the first element of an array. Passing the parameter 'n' will return the first 'n' elements of the array.
// Test Data :
// console.log(first([7, 9, 0, -2]));
// console.log(first([],3));
// console.log(first([7, 9, 0, -2],3));
// console.log(first([7, 9, 0, -2],6));
// console.log(first([7, 9, 0, -2],-3));
// Expected Output :
// 7
// []
// [7, 9, 0]
// [7, 9, 0, -2]
// []

const first = (arr, n) => {
  if (arr.length > 0 && (n > 0 || n === undefined)) {
    if (!n) {
      return arr[0];
    } else {
      return arr.slice(0, n);
    }
  } else {
    return [];
  }
};
console.log(first([7, 9, 0, -2]));
console.log(first([], 3));
console.log(first([7, 9, 0, -2], 3));
console.log(first([7, 9, 0, -2], 6));
console.log(first([7, 9, 0, -2], -3));

// 4. Write a JavaScript function to get the last element of an array. Passing the parameter 'n' will return the last 'n' elements of the array.
// Test Data :
// console.log(last([7, 9, 0, -2]));
// console.log(last([7, 9, 0, -2],3));
// console.log(last([7, 9, 0, -2],6));
// Expected Output :
// -2
// [9, 0, -2]
// [7, 9, 0, -2]

const last = (arr, n) => {
  if (!n) {
    return arr[arr.length - 1];
  } else {
    return arr.slice(Math.max(arr.length - n, 0));
  }
};
console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2], 3));
console.log(last([7, 9, 0, -2], 6));

// 6. Write a JavaScript program that accepts a number as input and inserts dashes (-) between
// each even number. For example if you accept 025468 the output should be 0-254-6-8.

const addDashes = (numb) => {
  const convertedStr = numb.toString();
  let result = [convertedStr[0]];
  let i = 1;
  while (i < convertedStr.length) {
    console.log("WHILE:::", i);
    if (convertedStr[i - 1] % 2 == 0 && convertedStr[i] % 2 == 0) {
      result.push("-", convertedStr[i]);
    } else {
      result.push(convertedStr[i]);
    }
    i++;
  }
  return result.join("");
};
console.log(addDashes("025468"));

// 8. Write a JavaScript program to find the most frequent item in an array.
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times )

const mostFreaquent = (stack) => {
  let obj = {};
  stack.forEach((item) => {
    if (Object.keys(obj).includes(item.toString())) {
      obj[item] += 1;
    } else {
      obj[item] = 1;
    }
  });
  let maxValue = 0;
  let maxKey = null;
  for (let [k, v] of Object.entries(obj)) {
    if (v > maxValue) {
      maxKey = k;
      maxValue = v;
    }
  }
  console.log("OBJ::::", maxKey, maxValue);
};
mostFreaquent([3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3]);

// 15. We have the following arrays :
// color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
// o = ["th","st","nd","rd"]
// Write a JavaScript program to display the colors in the following way :
// "1st choice is Blue ."
// "2nd choice is Green."
// "3rd choice is Red.
const color = [
  "Blue ",
  "Green",
  "Red",
  "Orange",
  "Violet",
  "Indigo",
  "Yellow ",
];
const o = ["th", "st", "nd", "rd"];
for (let i = 0; i < color.length; i++) {
  console.log(
    `${i + 1}${o[i + 1] == undefined ? o[0] : o[i + 1]} choice is ${color[i]}`
  );
}

// 10. Write a JavaScript program that prints the elements of the following array.
// Note : Use nested for loops.
// Sample array : var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
// Sample Output :
// "row 0"
// " 1"
// " 2"
// " 1"
// " 24"
// "row 1"
// ------
// ------
const showRows = () => {
  var a = [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27],
    [7, 4, 28, 14],
    [3, 10, 26, 7],
  ];
  for (let i = 0; i < a.length; i++) {
    console.log(`row ${i}`);
    for (let j = 0; j < a[i].length; j++) {
      console.log(`${a[i][j]}`);
    }
  }
};
showRows();

// 19. There are two arrays with individual values. Write a JavaScript program to
// compute the sum of each individual index value in the given array.
// Sample array :
// array1 = [1,0,2,3,4];
// array2 = [3,5,6,7,8,13];
// Expected Output :
// [4, 5, 8, 10, 12, 13]

const computeSum = (arr1, arr2) => {
  let firstArray = arr1.length > arr2.length ? arr1 : arr2;
  let secondArray = arr1.length < arr2.length ? arr1 : arr2;
  const sum = [];
  for (let i = 0; i < firstArray.length; i++) {
    const addition =
      (firstArray[i] == undefined ? 0 : firstArray[i]) +
      (secondArray[i] == undefined ? 0 : secondArray[i]);
    sum.push(addition);
  }
  console.log("SUM::", sum);
};
computeSum([1, 0, 2, 3, 4], [3, 5, 6, 7, 8, 13]);

// 24. Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.
// Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
// Expected result : [15, -22, 47]
const removeValues = (array) => {
  const truthyVals = [];
  for (let x of array) {
    if (Boolean(x)) {
      truthyVals.push(x);
    }
  }
  console.log("TRUTHY::::", truthyVals);
};
removeValues([NaN, 0, 15, false, -22, "", undefined, 47, null]);

// 26. Write a JavaScript program to find a pair of elements (indices of the two numbers) in a
// given array whose sum equals a specific target number.

// Input: numbers= [10,20,10,40,50,60,70], target=50
// Output: 2, 3

const getIndexes = (array, target) => {
  let firstIndex;
  let nextIndex;
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        firstIndex = i;
        nextIndex = j;
        break;
      }
    }
    if (firstIndex && nextIndex) {
      break;
    }
  }
  console.log("INDEXES::", firstIndex, nextIndex);
};
getIndexes([10, 20, 10, 40, 50, 60, 70,10], 50);
