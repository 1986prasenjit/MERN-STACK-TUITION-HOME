// Give me some Question in If and Else in JavaScript

//! Question 1: Write a JavaScript function that checks if a number is even or odd using if-else statement.

function isEvenOrOdd(num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

//! Question 2: Write a JavaScript function that takes a number as input and returns "Positive", "Negative", or "Zero" using if-else statements.
function checkNumber(num) {
  if (num > 0) {
    return "Positive";
  } else if (num < 0) {
    return "Negative";
  } else {
    return "Zero";
  }
}
//! Question 3: Write a JavaScript function that checks if a person is eligible to vote based on their age using if-else statement.
function isEligibleToVote(age) {
  if (age >= 18) {
    return "Eligible to vote";
  } else {
    return "Not eligible to vote";
  }
}

//! Question 4: Write a JavaScript function that takes a score as input and returns the corresponding grade using if-else statements.

function getGrade(score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

//! Question 5: Write a JavaScript function that checks if a year is a leap year using if-else statement.

function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return "Leap year";
  } else {
    return "Not a leap year";
  }
}

//! Question 6: Write a JavaScript function that takes a temperature in Celsius and returns whether it's "Hot", "Warm", or "Cold" using if-else statements.

function checkTemperature(celsius) {
  if (celsius >= 30) {
    return "Hot";
  } else if (celsius >= 15) {
    return "Warm";
  } else {
    return "Cold";
  }
}

//! Question 7: Write a JavaScript function that checks if a character is a vowel or consonant using if-else statement.

function isVowelOrConsonant(char) {
  if (
    char === "a" ||
    char === "e" ||
    char === "i" ||
    char === "o" ||
    char === "u" ||
    char === "A" ||
    char === "E" ||
    char === "I" ||
    char === "O" ||
    char === "U"
  ) {
    return "Vowel";
  } else {
    return "Consonant";
  }
}

//! Question 8: Write a JavaScript function that takes three numbers as input and returns the largest number using if-else statements.

function findLargestNumber(num1, num2, num3) {
  if (num1 >= num2 && num1 >= num3) {
    return num1;
  } else if (num2 >= num1 && num2 >= num3) {
    return num2;
  } else {
    return num3;
  }
}

//! Question 9: Write a JavaScript function that checks if a person is eligible for a senior citizen discount based on their age using if-else statement.

function isEligibleForSeniorDiscount(age, totalValue) {
  if (age >= 60) {
    return `Congrats you have got a discount of 10% and your total bill is ${
      totalValue * 0.9
    }`;
  } else {
    return "Not eligible for senior citizen discount";
  }
}

//console.log(isEligibleForSeniorDiscount(55, 1000));

//! Question 10: Write a JavaScript function that takes a day of the week as input and returns whether it's a "Weekend" or "Weekday" using if-else statements.

function checkDayType(day) {
  day = day.toUpperCase();
  if (day === "SATURDAY" || day === "SUNDAY") {
    return "Weekend";
  } else {
    return "Weekday";
  }
}
//console.log(checkDayType("MONDAY"));

//SWITCH case in JavaScript

//! Question 11: Write a JavaScript function that takes a month number (1-12) as input and returns the corresponding month name using switch-case statement.

function getMonthName(monthNumber) {
  let monthName;
  switch (monthNumber) {
    case 1:
      monthName = "January";
      break;
    case 2:
      monthName = "February";
      break;
    case 3:
      monthName = "March";
      break;
    case 4:
      monthName = "April";
      break;
    case 5:
      monthName = "May";
      break;
    case 6:
      monthName = "June";
      break;
    case 7:
      monthName = "July";
      break;
    case 8:
      monthName = "August";
      break;
    case 9:
      monthName = "September";
      break;
    case 10:
      monthName = "October";
      break;
    case 11:
      monthName = "November";
      break;
    case 12:
      monthName = "December";
      break;
    default:
      monthName = "Invalid month number";
  }
  return monthName;
}
//console.log(getMonthName(5));

//! what is the dfference between if else and switch case in javascript?
//* If-else statements are used for conditional branching based on boolean expressions, allowing for complex conditions and ranges. Switch-case statements are used for selecting one of many possible values based on a single variable, making them more readable for multiple discrete values.

//! Ternary Operator in JavaScript

let age = 20;
let eligibility = age >= 18 ? "Eligible to vote" : "Not eligible to vote";
console.log(eligibility); 
