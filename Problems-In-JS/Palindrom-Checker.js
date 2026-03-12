//! Write a function that checks whether a string is a palindrome. (Medium)

function checkPalirdrom(str) {
  let strCopy = str.slice("");

  for (let i = 0; i < str.length; i++) {
    if (str[i] === strCopy[strCopy.length - i - 1]) {
      return true;
    } else {
      return false;
    }
  }
}

console.log(checkPalirdrom("moon"));
