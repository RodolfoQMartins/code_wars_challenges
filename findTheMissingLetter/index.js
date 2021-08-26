// #Find the missing letter

// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'

function findMissingLetter(array)
{
  let result = ""
  for(i = 0; i < array.length; i++) {
      const actualCharCode = array[i].charCodeAt(0)
      const nextCharCode = array[i + 1] && array[i + 1].charCodeAt(0);
      if(nextCharCode && (actualCharCode !== nextCharCode - 1)) {
          result = actualCharCode 
      }
  }
  
  return String.fromCharCode(result + 1);
}

// ["a","b","c","d","f"] -> "e"
// ["O","Q","R","S"] -> "P"