// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

console.log('.................sort array based on in even odd..............');
// For even-even and odd-odd pairs, or if both are even or both are odd, maintain order
const numbersArray = [9, 4, 7, 2, 1, 8, 5, 6];

numbersArray.sort((a, b) => {
  // Compare even and odd numbers
  if (a % 2 === 0 && b % 2 !== 0) {
    return -1; // a comes before b
  } else if (a % 2 !== 0 && b % 2 === 0) {
    return 1; // b comes before a
  }
  return a - b;
});

console.log(numbersArray);

//Anagaram  2 string (after swiping char )
console.log('....anagram program .......');
function areAnagrams(str1, str2) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanStr1 = str1.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  const cleanStr2 = str2.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  // Check if the cleaned strings have the same characters
  if (cleanStr1.length !== cleanStr2.length) {
    return false;
  }

  const charCount = {};

  // Count characters in the first string
  for (let char of cleanStr1) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  console.log('char count ', charCount);
  // Subtract characters from the count for the second string
  for (let char of cleanStr2) {
    if (!charCount[char]) {
      return false; // Character not found in the first string
    }
    charCount[char]--;
  }

  // If all characters have been matched and subtracted to zero
  return true;
}

const word1 = 'liisten';
const word2 = 'siilent';

if (areAnagrams(word1, word2)) {
  console.log(`${word1} and ${word2} are anagrams.`);
} else {
  console.log(`${word1} and ${word2} are not anagrams.`);
}

// Anagram  number

function areAnagramNumbers(num1, num2) {
  const str1 = num1.toString();
  const str2 = num2.toString();

  if (str1.length !== str2.length) {
    return false;
  }

  const sortedStr1 = str1.split('').sort().join('');
  const sortedStr2 = str2.split('').sort().join('');

  return sortedStr1 === sortedStr2;
}

const number1 = 123;
const number2 = 321;

if (areAnagramNumbers(number1, number2)) {
  console.log(`${number1} and ${number2} are anagram numbers.`);
} else {
  console.log(`${number1} and ${number2} are not anagram numbers.`);
}

console.log('....count all character in a string ... ');
function countAllLetter(str) {
  const charCount = {};
  // Count characters in the  string
  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  console.log('char count ', charCount);
}
countAllLetter('rajan');

console.log('...sub string ....');
function findLongestCommonSubstring(strings) {
  if (strings.length === 0) {
    return '';
  }

  // Find the shortest string in the array
  let shortest = strings.reduce(
    (acc, curr) => (curr.length < acc.length ? curr : acc),
    strings[0]
  );
  console.log('shortest.....', shortest);
  function hasCommonSubstring(substring) {
    for (let i = 0; i < strings.length; i++) {
      if (strings[i].indexOf(substring) === -1) {
        return false;
      }
    }
    return true;
  }

  let longestCommonSubstring = '';

  // Iterate through the shortest string's substrings
  for (let i = 0; i < shortest.length; i++) {
    for (let j = i + 1; j <= shortest.length; j++) {
      const substring = shortest.substring(i, j);
      if (
        substring.length > longestCommonSubstring.length &&
        hasCommonSubstring(substring)
      ) {
        longestCommonSubstring = substring;
      }
    }
  }

  return longestCommonSubstring;
}

// Example usage:
const stringArray = ['appetizer', 'apple', 'apprentice', 'application'];
const longestCommon = findLongestCommonSubstring(stringArray);
console.log('Longest Common Substring:', longestCommon);

console.log('....spiral program .......');
function spiralMatrix(matrix) {
  const result = [];
  while (matrix.length) {
    // Traverse the top row
    result.push(...matrix.shift());
    // Traverse the right column
    for (let i = 0; i < matrix.length; i++) {
      if (matrix[i].length) {
        result.push(matrix[i].pop());
      }
    }

    // Traverse the bottom row in reverse
    if (matrix.length) {
      result.push(...matrix.pop().reverse());
    }
    console.log('result ...', result);
    // Traverse the left column in reverse
    for (let i = matrix.length - 1; i >= 0; i--) {
      if (matrix[i].length) {
        result.push(matrix[i].shift());
      }
    }
  }

  return result;
}

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const spiralOrder = spiralMatrix(matrix);
console.log(spiralOrder); // Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]

//Longest substring
console.log('...........longest substring in given array...........');

function longestSubString(strs) {
  if (strs?.length == 0) {
    return -1;
  }
  const shortesString = strs.reduce((short, current) => {
    return current.length > short.length ? short : current;
  });
  console.log('short ', shortesString);
  var subString = '';
  for (let i = 0; i < shortesString.length; i++) {
    for (let j = i + 1; j <= shortesString.length; j++) {
      const currentString = shortesString.substring(i, j);
      const isCommonString = strs.every((item) => item.includes(currentString));
      if (isCommonString && currentString.length > subString.length) {
        subString = currentString;
      }
    }
  }
  return subString;
}

const testString = ['abcmn', 'abdcabcdd', 'mnopabc'];
const longestSubStringop = longestSubString(testString);
console.log('longest substring ::', longestSubStringop);

console.log('....................bineay search.................');

function binearySearch(arr, target) {
  var left = 0;
  var right = arr.length - 1;
  while (left <= right) {
    var mid = Math.floor((left + right) / 2);
    if (arr[mid] == target) {
      return mid;
    }
    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

var arr = [2, 4, 6, 8, 9];
var targetValue = 6;

const result = binearySearch(arr, targetValue);

if (result !== -1) {
  console.log(`Found ${targetValue} at index ${result}`);
} else {
  console.log(`${targetValue} not found in the array`);
}

//Ques convert decimal to bieary
function decimalToBinary(decimalNumber) {
  if (
    isNaN(decimalNumber) ||
    decimalNumber < 0 ||
    !Number.isInteger(decimalNumber)
  ) {
    return 'Invalid input. Please provide a non-negative integer.';
  }
  return decimalNumber.toString(2);
}
const decimalNumber = 48;
const binaryRepresentation = decimalToBinary(decimalNumber);
console.log(
  `Decimal ${decimalNumber} is equivalent to binary ${binaryRepresentation}`
);

console.log('longest common prefix ....');
function longestCommonPrefix(arr) {
  if (arr.length === 0) {
    return '';
  }
  arr.sort();
  const firstStr = arr[0];
  const lastStr = arr[arr.length - 1];
  let prefix = '';

  for (let i = 0; i < firstStr.length; i++) {
    if (firstStr[i] === lastStr[i]) {
      prefix += firstStr[i];
    } else {
      break;
    }
  }

  return prefix;
}

const arr1 = ['flower', 'flour', 'flourish'];
const commonPrefix = longestCommonPrefix(arr1);
console.log('common prefix string ', commonPrefix); // Output: "flo"

console.log('......colors program ....');
function sortNumberwith012(nums) {
  let low = 0;
  let mid = 0;
  let high = nums.length - 1;
  while (mid <= high) {
    if (nums[mid] == 0) {
      [nums[low], nums[mid]] = [nums[mid], nums[low]];
      low++;
      mid++;
    } else if (nums[mid] == 1) {
      mid++;
    } else if (nums[mid] == 2) {
      [nums[mid], nums[high]] = [nums[high], nums[mid]];
      high--;
    }
    //return nums;
  }
  console.log('sorted ', nums);
  return -1;
}

const ar = [1, 2, 0, 2, 1];
sortNumberwith012(ar);
