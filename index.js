function isPalindrome(word) {
  // Write your algorithm here
  function isPalindrome(word) {
    // reverse the input string
    const reversedWord = word.split("").reverse().join("");
    // if the reversed string is the same as the input return true, else false

    if (word === reversedWord) {
      return true;
    } else {
      return false;
    }
  }
  isPalindrome("madam");
}

/*
  The function isPalindrome takes a string as an argument.
  THe word is split into its constituent characters
  The characters are then reversed in order
  The reversed characters are then joined into one word
  The new word is saved in a varaible, reversedWord
  Revesed word is then compared against the original word
  If they are the similar, the function returns true, else false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
