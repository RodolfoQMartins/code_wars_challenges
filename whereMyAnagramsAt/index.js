// What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

// 'abba' & 'baab' == true

// 'abba' & 'bbaa' == true

// 'abba' & 'abbba' == false

// 'abba' & 'abca' == false
// Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

function anagrams(word, words) {
    const sortedAnagram = word.split("").sort((a,b) => a.charCodeAt(0) - b.charCodeAt(0)).join("");
    return words.filter(testingWord => {
      const orderedTestingWord = testingWord.split("").sort((a,b) => a.charCodeAt(0) - b.charCodeAt(0)).join("")
      return orderedTestingWord === sortedAnagram
    }
)}