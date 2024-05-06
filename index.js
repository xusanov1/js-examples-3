"use strict";

// 1-misol

// function spelling(word) {
//     let result = [];
//     let letters = word.split("");

//     for (var i = 0; i < letters.length; i++) {
//       var newWord = letters.slice(0, i + 1).join("");
//       result.push(newWord);
//     }

//     return result;
//   }

//   console.log(spelling("happy")); 



// 2-misol

// function charIndex(word, character) {
//     let firstIndex = word.indexOf(character);
//     let lastIndex = word.lastIndexOf(character);

//     return [firstIndex, lastIndex];
//   }

//   console.log(charIndex("hello", "l"));

// 3-misol

// function removeDups(items) {
//     let array = [];

//     for (var i = 0; i < items.length; i++) {
//       if (array.indexOf(items[i]) === -1) {
//         array.push(items[i]);
//       }
//     }

//     return array;
//   }

//   console.log(removeDups([1, 0, 1, 0])); 
//   console.log(removeDups([ "big", "cat", "cat"])); 


// 4-misol

// function mirror(arr) {
//     return arr.concat(arr.slice(0, arr.length - 1).reverse());
//   }

//   console.log(mirror([0, 2, 4, 6])); 
//   console.log(mirror([1, 2, 3, 4, 5])); 

// 5 - misol

// function reverseArr(number) {
//     const digits = String(number).split('').map(Number);
//     return digits.reverse();
//   }

//   console.log(reverseArr(1485979)); 

// 6-misol

// function capMe(nomlar) {
//     return nomlar.map(function(nom) {
//       return nom.charAt(0).toUpperCase() + nom.slice(1);
//     });
//   }

//   var nomlar = ["mavis", "senaida", "letty"];
//   var natija = capMe(nomlar);
//   console.log(natija);


// 7-msiol

// function transformUpvotes(str) {
//     let counts = str.split(" ");
//     let transformedCounts = [];

//     for (let i = 0; i < counts.length; i++) {
//       let count = counts[i];
//       if (count.includes("k")) {
//         count = parseFloat(count) * 1000;
//       } else {
//         count = parseInt(count);
//       }
//       transformedCounts.push(count);
//     }

//     return transformedCounts;
//   }

//   let str1 = "6.8k 13.5k";
//   let str2 = "5.5k 8.9k 32";


//   console.log(transformUpvotes(str1));
//   console.log(transformUpvotes(str2)); 

// 8-misol

function reverseImage(image) {
    image.forEach(row => {
      row.forEach((pixel, index) => {
        image[row][index] = pixel === 0 ? 1 : 0;
      });
    });

    return image;
  }

  console.log(reverseImage([
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1]
  ]));

// 9-msiol

// function sumArray(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//       sum += arr[i];
//     }
//     return sum;
//   }

//   console.log(sumArray([1, 2, 3]));

// 10-misol

// function filterUnique(lst) {
//     let result = [];
//     for (let i = 0; i < lst.length; i++) {
//       let string = lst[i];
//       if (new Set(string).size === string.length) {
//         result.push(string);
//       }
//     }
//     return result;
//   }

//   console.log(filterUnique(["abb", "abc", "abcdb", "aea", "bbb"]));

// 11-misol

// function sumOddAndEven(arr) {
//     var evenSum = 0;
//     var oddSum = 0;

//     for (var i = 0; i < arr.length; i++) {
//       if (arr[i] % 2 === 0) {
//         evenSum += arr[i];
//       } else {
//         oddSum += arr[i];
//       }
//     }

//     return [evenSum, oddSum];
//   }

//   console.log(sumOddAndEven([1, 2, 3, 4, 5, 6]));

// 12-misol

// 12-msiol

// function findIndex(arr, str) {
//     return arr.indexOf(str);
//   }

//   console.log(findIndex(["hi", "edabit", "fgh", "abc"], "fgh"));

// 13-misol

// function word(str) {
//     var numberMap = {
//       "one": 1,
//       "two": 2,
//       "three": 3,
//       "four": 4,
//       "five": 5,
//       "six": 6,
//       "seven": 7,
//       "eight": 8,
//       "nine": 9,
//       "zero": 0
//     };

//     return numberMap[str];
//   }

//   console.log(word("zero"));

// 14-misol

// function toNumberArray(arr) {
//     return arr.map(Number);
// }
// console.log(toNumberArray(["9.4", "4.2"]));


