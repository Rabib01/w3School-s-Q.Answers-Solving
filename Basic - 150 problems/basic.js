/*console.log("Hello world");
console.log("hi");

/**
 * Write a JavaScript program to display the current day and time in the following format.  
  Sample Output : Today is : Tuesday.

  const currentDate = new Date();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDay();
  const year = currentDate.getFullYear();
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();
  console.log(currentDate);
  console.log("");
  console.log(hours);
  
  const amPm = hours > 12 ? `${Math.abs(12 - hours)}PM` : `${hours} AM`;
  
  console.log(`${day}-${month}-${year}`);
  console.log(`Time is ${amPm}: ${minutes} : ${seconds}`);
  // Q-2 : Print the current viewPort
  //
  const print = document.querySelector(".to-print");

  print.addEventListener("click", function () {
    window.print();
    });
  // Q-3: Calculate the Area of a triangle :
  // Area is caluclated sing Heron's formula to get the semi-perimeter and then the area
  
  const triangeAreaCalculatorfunction = function (a, b, c) {
    let area = 0;
    console.log(a, b, c);
    
    // Applying Heron's formula
    const semiPerimeter = (a + b + c) / 2;
    console.log(`${semiPerimeter}`);

    const s = semiPerimeter; // because wrting semi-perimeter inside the formula is going to take a long timne
    area = Math.sqrt(s * ((s - a) * (s - b) * (s - c)));
    return area;
  };

  console.log(
    `The area is : ${triangeAreaCalculatorfunction(5, 6, 7).toFixed(2)} unit squared`,
  );
  
  //5. Rotate String 'w3resource' Periodically
  
  // Write a JavaScript program to rotate the string 'w3resource' in the right direction. This is done by periodically removing one letter from the string end and attaching it to the fronthe
  
  const printRotatedString = function (string) {
    //
    const result = string.split("");

    for (let i = 0; i < result.length; i++) {
      const temp = result.pop();
      result.unshift(temp);
      console.log(result.join(""));
    }
  };

  // const rotateStringLogic = function (string) {
  //   // const result = string.split("").join(""); // cannot pop when turned to a single string.

  //   // const result = string.split("");
  //   // console.log(result);
  //   // const lastLetter = result.pop();
  //   // console.log(result);
  //   // result.unshift(lastLetter);
  //   // console.log(result);

  //   const result = string.split("");
  //   const lastLetter = result.pop();
  //   result.unshift(lastLetter);
  // };

  let string = "w3schools";

  const rotateStringLogic = function (string) {
    const result = string.split("");
    const lastLetter = result.pop();
    result.unshift(lastLetter);

    return result.join("");
  };

  setInterval(() => {
    string = rotateStringLogic(string);
    console.clear();
    console.log(string);
  }, 1000);

  // printRotatedString("abcd");
  // console.log("");
  // printRotatedString("w3Schools");

  // const stringToRotate = "w3Schools";
  // const result = stringToRotate.split("");
  // console.log(result);
  
  // for (let i = 0; i < result.length; i++) {
    //   const temp = result.pop();
    //   result.unshift(temp);
    //   console.log(result.join(""));
    // }
    // Hi 

    //7. Find Years When Jan 1 is Sunday (2014?2050)
    const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  const options2 = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  
  const date = Date.now();
  // console.log(Date.now());
  const dateFormat = new Intl.DateTimeFormat("en-GB", options).format(date);
  console.log(dateFormat);
  console.log("");
  // console.log(new Date(2007, 0, 10, 10, 0, 0));
  // console.log(Date.UTC(2007, 0, 10, 10, 0, 0));
  // console.log("");
  // console.log(typeof new Date(2007, 0, 10, 10, 0, 0));
  // console.log(typeof Date.UTC(2007, 0, 10, 10, 0, 0));
  
  const startDate = new Date(Date.UTC(2014, 0, 1));
  const endDate = new Date(Date.UTC(2050, 0, 1));
  const formattedDateRange = new Intl.DateTimeFormat(
    "en-GB",
    options,
  ).formatRange(startDate, endDate);
  console.log(formattedDateRange);
  
  console.log("");
  console.log("");
  
  const dateObject = new Date(Date.UTC(2014, 0, 1));
  console.log(dateObject, typeof dateObject);
  console.log("");
  console.log("");
  
  console.log(`The following years have a Sunday on 1 January:`);
  const yearsBetween = 2050 - 2014;

  for (let i = 0; i < yearsBetween + 1; i++) {
    const date = new Date(Date.UTC(2014 + i, 0, 1));
    const dateFormat = new Intl.DateTimeFormat("en-GB", options2).format(date);
    // console.log(dateFormat);
    if (dateFormat.includes(`Sunday, 1 January`)) {
      console.log(dateFormat);
    }
  }
  // 7 ends here
  
  // 8. Random Integer Guess Game
  // Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched".
  // const min = 1;
  // const max = 10;
  // console.log(typeof userNumber);
  
  const randNumberBetween = function (min, max) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
  };

  //check ifthe number generated is between 1-10?
  const numberChecker = function () {
    const userNumber = +prompt("please enter a number between 1-10");
    const number = randNumberBetween(0, 10);
    if (userNumber === number) {
      console.log(`Good Job, The number matched`);
    } else {
      console.log(
    `Not matched : User's number was : ${userNumber} and random Number generated was ${number}`,
  );
}
};

// for (let o = 0; o < 100; o++) {
  //   randNumberBetween(0, 100);
  // }
  
  // console.log(randNumberBetween(0, 100));
  // Number 8 ends here
  
  //function call for the game
  // numberChecker();
  /** Question 10 starts here 
  /** Multiplication and division : User unput 
  const multiply = document.querySelector(".multiply");
  const divide = document.querySelector(".divide");
  const showingResult = document.querySelector(".hidden");
  const result = document.querySelector(".result");

  const firstNumber = document.querySelector("#first-number");
  const secondNumber = document.querySelector("#second-number");
  
  multiply.addEventListener("click", function () {
    showingResult.classList.remove("hidden");
    const num1 = +firstNumber.value;
    const num2 = +secondNumber.value;
    const solution = num1 * num2;
    result.textContent = solution;
  });

  divide.addEventListener("click", function () {
    showingResult.classList.remove("hidden");
    const num1 = +firstNumber.value;
    const num2 = +secondNumber.value;
    const solution = (num1 / num2).toFixed(3);
    result.textContent = solution;
  });
  /** Question 10 ends here 

  /** Question 11 starts here 
  /** To and from C to Farenheit 
  const celciusToFarenheit = function (celcius) {
    const farenheit = (celcius * (9 / 5) + 32).toFixed(3);
    console.log(`${farenheit} °Farenheit`);
  };

  const farenheitToCelcius = function (farenheit) {
    const celcius = ((5 / 9) * (farenheit - 32)).toFixed(3);
    console.log(`${celcius} °Celcius`);
  };
  
  celciusToFarenheit(100);
  farenheitToCelcius(100);
  /** Question 11 ends here */

/** Question number 12 starts here: Current website url 
  console.log(window.location.href);
  /** Question number 12 Ends Here: Current website url 

  // 19. Check if the integer is within 20 of 100 or 400
  const differenceBetween20OR400Checker = function (number) {
    //Applying DRT principle

    const variable1 = 100;
    const variable2 = 400;
    if (Math.abs(variable1 - number) < 20) {
      return `Yes, it is : ${variable1 - number} closer to ${variable1}`;
    }
    if (Math.abs(variable2 - number) < 20) {
      return `Yes, it is : ${variable2 - number} closer to ${variable2}`;
    } else {
      return `No, it is not within that range`;
    }
  };
  
  console.log(differenceBetween20OR400Checker(79)); // 21
  console.log(differenceBetween20OR400Checker(81)); // 19
  console.log(differenceBetween20OR400Checker(102)); // 02
  console.log(differenceBetween20OR400Checker(122)); // 22

  console.log("");
  console.log("");
  console.log(differenceBetween20OR400Checker(402)); // -2
  console.log(differenceBetween20OR400Checker(422)); // 22
  console.log(differenceBetween20OR400Checker(418)); // -18
  console.log(differenceBetween20OR400Checker(435)); // 22

  console.log("");
  console.log("");

  //20 - Check if One Integer is Positive and One is Negative
  //  const signCheckerFunction = function (number) {};. This is a stupid question, not going to do it

  //21 - Add 'Py' to Start of String if Not Present
  const pyAdderFunction = function (string) {
    const stringToBeConcatenated = "py";
    // console.log(string);
    // console.log(string.toLowerCase().includes("py"));
    
    if (!string.toLowerCase().includes("py")) {
      return `The string needed a "py" to be added ${stringToBeConcatenated.concat("", string)}`;
    } else {
      return `The string had a "py" as it was ${string}`;
    }
  };
  console.log(pyAdderFunction("python"));
  console.log(pyAdderFunction("thon"));
  console.log(pyAdderFunction("thpython"));
  
  console.log("");
  console.log("");
  
  //22. Remove Character at Specified Position in String
  const characterRemoverFunction = function (
    string,
    characterRemoverIndexStart,
    characterRemoverIndexEnd,
  ) {
    console.log(string, characterRemoverIndexStart, characterRemoverIndexEnd);
    // const splittedString = string.split("");
    // console.log(splittedString);
    
    // const splicedString = string.split("").splice(0, 2);
    // console.log(splicedString);
    // console.log(string);
    // console.log("");
    // it becomes a bit leangthy if you try to do with .split and .splice. let me try to do this anyway because it sounds like fun

    // Solution using .split() and .splice() -> basically the array that was newly created will be mutated, the rest would remain the same
    const arr = string.split("");
    const removed = arr.splice(0, 2);
    const remainder = arr.join("");
    console.log(arr);
    console.log(removed);
    console.log(string);
    console.log(remainder);

    // normal solution
    //   const slicedString = string.slice(
      //     characterRemoverIndexStart,
      //     characterRemoverIndexEnd,
    //   );
    //   console.log(slicedString);
  };
  //-end
  characterRemoverFunction(
    "The quick brown fox jumped over the lazy dog",
    31,
    35,
  );
  console.log("");
  console.log("");
  
  //23. Swap first and last character of a string.
  const swapperFirstAndLastCharacter = function (string) {
    // console.log(string);
    const splittedString = string.split("");
    // console.log(splittedString);
    const lastChar = splittedString.pop();
    const firstChar = splittedString.shift();
    
    splittedString.unshift(lastChar);
    splittedString.push(firstChar);
    // console.log(splittedString);
    
    const newString = splittedString.join("");
    console.log(newString);
  };

  swapperFirstAndLastCharacter("The quick brown fox jumped over the lazy dog");
  console.log("");
  console.log("");
  
  // console.log("");
  // console.log(``);
  
  // const arr = [2, 3];
  
  // const result1 = arr.unshift(1);
  
  // console.log(result1);
  // console.log(arr);
  
  //24. Add first character to the front and back of the string :
  const characterAdderToFrontAndBack = function (string) {
    console.log(string);
    
    const splitted = string.split("");

    const firstCharExtract = string.slice(0, 1);

    // it did mot woerk with shift() as it mutated the array and doung unshift Gave the quick instead of TThe quick. so I used string.slice() instead
    
    splitted.unshift(firstCharExtract);
    console.log(splitted);
    
    splitted.push(firstCharExtract);
    console.log(splitted, firstCharExtract);
    console.log("");

    const newString = splitted.join("");
    console.log(newString);
  };

  characterAdderToFrontAndBack("The quick brown fox jumped over the lazy dog");
  
  //Q;21 - Needs to be done again
  const pyAdderFunction = function (string) {
    const stringToBeConcatenated = "py";
    // console.log(string);
    // console.log(string.toLowerCase().includes("py"));
    // console.log(string.toLowerCase().slice(0, 2).includes("py"));

    if (!string.toLowerCase().slice(0, 2).includes("py")) {
      return `The string needed a "py" to be added ${stringToBeConcatenated.concat("", string)}`;
    } else {
      return `The string had a "py" as it was ${string}`;
    }
  };
  console.log(pyAdderFunction("python"));
  console.log(pyAdderFunction("thon"));
  console.log(pyAdderFunction("thpython"));
  console.log("");
  console.log("");

  //25. Stupud question - not going to be doing this

  //26. Add Last 3 Characters to Front and Back of String
  const threeCharacterAdderFunction = function (string) {
    console.log(string);
    const lastThreeChars = string.slice(-3);
    console.log(lastThreeChars.concat(string) + lastThreeChars);
  };
  threeCharacterAdderFunction("The quick brown fox jumps over the lazy dog");
  console.log("");
  console.log("");

  //27. Check if String Starts with 'Java'
  const javaStarterChecketFunction = function (string) {
    // console.log(string);
    const javaCheckerBool = string.toLowerCase().slice(0, 4).includes("java");
    // console.log(javaCheckerBool);
    if (javaCheckerBool) {
      console.log(`the string has java at the beginning`);
    } else {
      console.log(`the string does not have java in the beginning`);
    }
  };
  javaStarterChecketFunction("JavaThe quick brown fox jumps over the lazy dog");
  javaStarterChecketFunction("The quick brown fox jumps over the lazy dog");
  console.log("");
  console.log("");
  
  //28. Check if Two Integers are in Range 50?99
  const rangeFinder = function (num1, num2) {
    console.log(num1, num2);

    if (num1 >= 50 && num1 <= 99) {
      console.log(`${num1} is within range`);
    }

    if (num2 >= 50 && num2 <= 99) {
      console.log(`${num2} is within range`);
    } else {
      console.log("none are in range");
    }
  };
  rangeFinder(21, 51);
  rangeFinder(50, 51);
  rangeFinder(21, 11);
  console.log("");
  console.log("");

  //30. Remove 'Script' from String at 5th Position
  const scriptRemover = function (string) {
    // console.log(`${string}`);
    // console.log(string.split("").splice(4, 6).join("").toLowerCase());

    const scriptChecker = string
      .split("")
      .splice(4, 6)
      .join("")
      .toLowerCase()
      .includes("script");

      // const temp = string.toLowerCase().split("");
    // const arr = temp.splice(4, 6);
    // console.log(temp, arr);
    
    // .splice(4, 6, "script") is removving s c r i p t and replacing s with script
    // .splice(4, 6) is removing it altogether

    if (scriptChecker) {
      const temp = string.split("");
      const arr = temp.splice(4, 6);
      const newString = temp.join("");
      console.log(newString);
    } else {
      console.log(string);
    }

    // else {
      //   console.log(`no`);
      // }
    };
  scriptRemover("The Scriptquick brown fox jumps over the lazy dog");
  scriptRemover("The Scrquick brown fox jumps over the lazy dog");
  scriptRemover("The quicSaSk brown fox jumps over the lazy dog");
  scriptRemover("JavaScript");

  // console.log("");
  // console.log("");
  // const months = ["Jan", "March", "April", "June"];
  // months.splice(0, 1);
  // console.log(months.toString());
  
  // Personal Problems
  // Taking multiple inputs and turning htem into strings
  // let numbers = parseInt(prompt("Please enter the numbers"));
  // console.log(numbers);
  
  // let data = [];
  // console.log(data);

  // while (numbers > 0) {
  //   data.push(Number(prompt("Array elements please")));
  //   numbers -= 1;
  // }

  // console.log(data);

  // const data2 = [1111, 1234, 1235];
  
  */ const init = function () {
  // Modify String Based on Length (First 3 Lowercase/Uppercase)
  const stringModifierBasedOnLength = function (string) {
    const split = string.split("");
    // console.log(split.length);
    // console.log(split);
    if (split.length >= 3) {
      const remainingPart = split.splice(3, split.length);
      return split.join("").toLowerCase().concat(remainingPart.join(""));
    } else {
      return string.toUpperCase();
    }

    // could have also be done with slice. Generally more recommended to use to not modify the origina array
    // const firstThree = split.slice(0, 3);
    // const remainingPart = split.slice(3);
    // could have also use slice on the sring itself instead of turning it into an array and then break it down
  };

  const string1 = "Hi";
  const string2 = "HELLo";
  const string3 = "Python";
  const string4 = "Cat";

  console.log(stringModifierBasedOnLength(string2));
  console.log(stringModifierBasedOnLength(string1));
  console.log(stringModifierBasedOnLength(string3));
  console.log(stringModifierBasedOnLength(string4));

  console.log("");
  console.log("");

  //43. Check Rightmost Digits of Three Numbers
  const number1 = 22;
  const number2 = 33;
  const number3 = 44;

  const number4 = 22;
  const number5 = 32;
  const number6 = 42;

  let brokenarra = [];
  // let brokenarra2 = [];
  // const arra1 = [22, 23];
  // const arra2 = [24, 25];
  // const comby = [...arra1, ...arra2];
  // // console.log(comby);

  const rightMostDigitChecker = function (num1, num2, num3) {
    // console.log(num1, num2, num3);
    const arr = [num1, num2, num3];
    // console.log(arr);
    let combined = [];
    // console.log(combined);

    arr.forEach((ele) => {
      const singleDigit = [Number(`${ele}`.split("").pop())].pop();
      combined.push(singleDigit);
    });
    // console.log(combined);
  };

  const rightMostDigitChecker2 = function (...numbers) {
    numbers.forEach((element) => {
      const lastDigit = element.toString().split("").map(Number).pop();
      brokenarra.push(lastDigit);
    });
    return brokenarra;

    // // can't fucking do this because push returns the leanght of the array
    // numbers.forEach((element) => {
    //   console.log(
    //     brokenarra.push(element.toString().split("").map(Number).pop()),
    //   );
    // });
    // // note end
  };

  const whatToDoForSameLastDigit = function (lastDigitArray) {
    const allEqual = new Set(brokenarra).size === 1;
    if (!allEqual) {
      console.log(false);
    } else {
      console.log(true);
    }
  };
  rightMostDigitChecker(number1, number2, number3);
  // rightMostDigitChecker2(number1, number2, number3);
  rightMostDigitChecker2(number4, number5, number6);
  whatToDoForSameLastDigit(brokenarra);
  // to convert an

  //const arr = [5, 5, 5];
  // const allEqual = arr.every(val => val === arr[0]); // true
  // const arr = [5, 5, 5];
  // const allEqual = new Set(arr).size === 1; // true

  // Array.from(String(numb1), Number); can use this to turn a number into an array of indivudual elements
  // console.log(numb1.toString().split("").map(Number)) ; -> Can also use this to turn an array into a number

  // const numb1 = 25;

  // const arra1 = Array.from(String(numb1), Number);
  // console.log(numb1.toString().split("").map(Number));

  // console.log(arra1);

  // 45 Check if Integer is 15, or Sum/Difference is 15
  console.log("");
  console.log("");
  const interChecker = function (...numbers) {
    // console.log(numbers);

    // condition 1 : check if either number = 15
    const either15 = numbers.some((value) => value === 15);
    // console.log(either15);

    //condition 2 : check if their sum is 15
    const sumResult = numbers.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);
    // console.log(sumResult);

    //condition 3 : if difference between two numbers is 15
    const diffResult = numbers
      .sort((a, b) => b - a)
      .reduce((acc, currVal) => {
        return acc - currVal;
      });
    // console.log(diffResult);

    // if (either15 || sumResult || diffResult) not working because false || true || true falsy values and truthy values sumResult and diffResult are both truthy

    if (either15 || sumResult === 15 || diffResult === 15) {
      console.log(true);
    } else {
      console.log(false);
    }
  };

  interChecker(5, 18);
  interChecker(15, 18);
  interChecker(10, 5);
  interChecker(25, 10);

  console.log("");
  console.log("");

  //47. Check if Only One Integer is Multiple of 7 or 11
  const multipleChecker = function (...numbers) {
    // console.log(numbers);
    const multiples = numbers.filter((num) => num % 7 === 0 || num % 11 === 0);
    console.log(multiples);
    multiples.forEach((ele) =>
      console.log(
        `The numbers that are a multiple of either 7 or 11 are : `,
        ele,
      ),
    );
    console.log("");
    console.log("");
  };

  multipleChecker(21, 55);
  multipleChecker(21, 55, 33, 99, 21, 56, 84, 13, 25, 60);
  console.log("");
  console.log("");

  const sentence = "The quick brown fox jumps over the lazy dog";

  // 48 Reverse a Given String

  const reverseString = function (string) {
    console.log(string);
    const reversed = string.split("").toReversed().join("");
    console.log(string, "+", reversed);
    console.log("");
    console.log("");
  };

  reverseString(sentence);
  //!!  //
  // const letter = "A";
  // console.log(letter.codePointAt(0)); // 65
  // console.log(letter.codePointAt(0).toString(16)); // "41" (hexadecimal)

  // const letter = "A";
  // const unicode = "U+" + letter.codePointAt(0).toString(16).toUpperCase().padStart(4, "0");
  // console.log(unicode); // U+0041

  // 49. Replace each string with thenext alphabet letter

  const nextCharacterStringModifier = function (string) {
    const splittedString = string.split("");
    // console.log(splittedString);

    //.toString(16).toUpperCase().padStart(4, "0"),
    // "U+"
    //.codePointAt(idx)

    // To convert to unicode

    // splittedString.forEach((element) => {
    //   console.log(
    //     "U+" +
    //       element.codePointAt(0).toString(16).toUpperCase().padStart(4, "0"),
    //   );
    // });

    // one more letter
    const newSentenceArra = [];
    splittedString.forEach((el) => {
      const newEle = (el.codePointAt(0) + 1).toString();
      newSentenceArra.push(String.fromCodePoint(newEle).split(""));
    });

    const newSentence = newSentenceArra.flat().join("").replaceAll("!", " ");

    // console.log("");
    // console.log("");

    console.log(newSentence);
    console.log("");
    console.log("");
  };

  nextCharacterStringModifier(sentence);

  // 50 upwards : Captialize the first letters of each word in a string:
  const firstLetterCapitalizer = function (string) {
    const splittedString = string.split("");
    let letterAfterSpaceCharsArray = [];
    console.log(splittedString);
    splittedString.filter((element, idx) => {
      if (element == " ") {
        console.log("Found You");
        letterAfterSpaceCharsArray.push(idx + 1);
      }
    });
    console.log(letterAfterSpaceCharsArray);
    console.log(splittedString.at(4).toUpperCase());
    // console.log(splittedString.toUpperCaser()); Wont work

    console.log("");
    console.log("");
    console.log("");

    // splittedString.forEach((element, idx, arr) => {
    // console.log(element.toUpperCase());
    // const indexToBeCapitalized = letterAfterSpaceCharsArray.shift();
    // console.log(indexToBeCapitalized);
    // console.log(arr[indexToBeCapitalized].toUpperCase());
    // });

    const deepClone = structuredClone(splittedString);
    deepClone.splice(4, 1, "Q");
    console.log(deepClone);

    for (let i = 0; i < letterAfterSpaceCharsArray.length; i++) {
      // const upperCased = splittedString
      //   .at(letterAfterSpaceCharsArray[i])
      //   .split("");

      const upperCased = splittedString.splice(
        letterAfterSpaceCharsArray[i],
        1,
        splittedString.at(letterAfterSpaceCharsArray[i]).toUpperCase(),
      );
      console.log(upperCased);
    }
    console.log(splittedString);
  };

  firstLetterCapitalizer(sentence);
  console.log("");
  console.log("");
  console.log("");
  console.log("");
  console.log("");
  console.log("");
  // console.log(sentence);

  //50 but done cleanly

  const sentence2 = "the quick brown fox jumps over the lazy dog";
  const dumbWayToCapitalizeTheFirstCharacterOfAString = function (string) {
    const splittedString = string.split("");
    let letterAfterSpaceCharsArray = [];
    console.log(splittedString);

    splittedString.forEach((ele, idx) => {
      if (ele === " ") {
        letterAfterSpaceCharsArray.push(idx + 1);
      }
    });
    // accounting if the first letter is small
    letterAfterSpaceCharsArray.unshift(0);
    console.log(letterAfterSpaceCharsArray);

    for (let i = 0; i < letterAfterSpaceCharsArray.length; i++) {
      splittedString.splice(
        letterAfterSpaceCharsArray[i],
        1,
        splittedString.at(letterAfterSpaceCharsArray[i]).toUpperCase(),
      );
    }
    const newSentence = splittedString.join("");
    console.log(newSentence);
  };

  dumbWayToCapitalizeTheFirstCharacterOfAString(sentence2);

  const lessDumberWayToCapitalizeFirstCharacterOfAString = function (string) {
    const splittedString = string.split("");
    let letterAfterSpaceCharsArray = [];
    console.log(splittedString);

    splittedString.forEach((ele, idx) => {
      if (ele === " ") {
        splittedString[idx + 1] = splittedString[idx + 1].toUpperCase();
      }
    });
    splittedString.splice(0, 1, splittedString[0].toUpperCase());
    console.log("");
    console.log("");
    console.log(splittedString);
  };

  lessDumberWayToCapitalizeFirstCharacterOfAString(sentence2);

  const evenLessDumberWayToCapitalizeFirstCharacterOfAString = function (
    string,
  ) {
    const splittedString = string.split("");
    if (splittedString.length > 0) {
      splittedString.forEach((ele, idx) => {
        // accounting for last index; when array reaches the last element, idx + 1 becomes undefined and so undeined.toUpperCase() should throw an error.
        if (ele === " " && idx + 1 < splittedString.length) {
          splittedString[idx + 1] = splittedString[idx + 1].toUpperCase();
        }
      });

      // Dont need splice to make the first character into capitalized
      // could've instead done ::
      // splittedString[0] = splittedString[0].upperCase();
      // but will keepthis because this is what i came up with

      splittedString.splice(0, 1, splittedString[0].toUpperCase());
      // could have also used replace, anyhow

      console.log("");
      console.log("");
      console.log(splittedString.join(""));
    } else {
      console.log("What the fuck am I supposed to capitalize.");
      console.log("There is nothing there");
    }
  };

  evenLessDumberWayToCapitalizeFirstCharacterOfAString(sentence2);
  console.log("");
  console.log("");
  evenLessDumberWayToCapitalizeFirstCharacterOfAString("");
  console.log("");
  console.log("");

  const properWayToCapitalize = function (str) {
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  console.log(
    properWayToCapitalize("the quick brown fox jumps over the lazy dog"),
  );
  // The Quick Brown Fox Jumps Over The Lazy Dog

  console.log("");
  console.log("");

  // ("javascript");
  // J a v a s c r i p t
  // 0 1 2 3 4 5 6 7 8 9
  // ("avascript") is returned by slice

  //51 Converting a number into hours and minutes

  const promptForTheNumberFunction = function () {
    return prompt(
      "Will the bumber be in munites or seconds ? \n Enter 1 for seconds \n Enter 2 for minutes ",
    );
  };

  const convertingNumbersIntoHoursAndMinutes = function (seconds) {
    // const option = +promptForTheNumberFunction();
    const option = 1;

    if (option === 1) {
      const actualHours = seconds / 3600;
      const hoursRounded = Math.floor(seconds / 3600);
      const remainingHours = actualHours - hoursRounded;
      const actualMinutes = remainingHours * 60;
      const minutesRounded = Math.floor(actualMinutes);
      const remainingMinutes = actualMinutes - minutesRounded;
      const secondsRounded = +(remainingMinutes * 60).toFixed(0);
      // 1 Hours : 23 minutes : 20 : seconds

      return `${hoursRounded} Hours : ${minutesRounded} minutes : ${secondsRounded} seconds`;
    }

    if (option === 2) {
      const actualMinutes = seconds / 60;
      const minutesRounded = Math.floor(actualMinutes);
      const remainingMinutes = actualMinutes - minutesRounded;
      const secondsRounded = +(remainingMinutes * 60).toFixed(0);
      return `${minutesRounded} minutes : ${secondsRounded} seconds`;
    } else {
      // console.log("I see we are not interested in any time conversions today");
    }
  };

  console.log(convertingNumbersIntoHoursAndMinutes(5000));
  console.log(convertingNumbersIntoHoursAndMinutes(3000));
  console.log(convertingNumbersIntoHoursAndMinutes(10000));
  console.log("");
  console.log("");

  const lessDumbVersionForHoursAndMinutes = function (minutes) {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    return `${hours} hour(s) ${remainingMinutes} minute(s)`;
  };

  const sameShitButForSeconds = function (seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);

    return `${hours} hour(s) ${minutes} minute(s)`;
  };

  //52. Sort letters alphabetically in a string :
  const whatADumbFuckingQuestion = function (string) {
    // everything does not have to be so damn complicated
    return string.toLowerCase().split("").sort().join("").trim();
  };
  console.log(whatADumbFuckingQuestion(sentence));
  //.sort() does not exist on String.prototype()

  console.log("");
  console.log("");

  //53. Check 'a' and 'b' Separated by exactly 3
  // substracting by each element does not work becuase what if the first match is for b at first indexs and a at second index
  const sentence3 = "The auick aownb fox jumps over the lazy bog";
  const sentence4 = "The quick aownb fox jumps over the lazy dog";
  const aAndBChecker = function (string) {
    let arrayOfAs = [];
    let arrayOfBs = [];

    const splittedString = string.split("");

    splittedString.forEach((ele, idx) => {
      if (ele === "a") {
        arrayOfAs.push(idx);
      }
      if (ele === "b") {
        arrayOfBs.push(idx);
      }
    });

    let result = [];

    // I need 2 for loops
    // This creates a timecomplexity of O(n^2) and so for 1000s of a's and 1000s of b's this version would be very slow

    for (let i = 0; i < arrayOfBs.length; i++) {
      for (let ii = 0; ii < arrayOfAs.length; ii++) {
        result.push(Math.abs(arrayOfBs[i] - arrayOfAs[ii]));
      }
    }

    // let present = true; don't need this fucker
    if (result.includes(4)) {
      return true;
    } else {
      return false;
    }

    // return present; -> Unreachable code block
  };

  const aAndBCheckerV2 = function (string) {
    let arrayOfAs = [];
    let arrayOfBs = [];

    const splittedString = string.split("");

    splittedString.forEach((ele, idx) => {
      if (ele === "a") {
        arrayOfAs.push(idx);
      }
      if (ele === "b") {
        arrayOfBs.push(idx);
      }
    });

    // let result = []; // Also do not need this !! Could have directly checked inside the 2 for loops

    // I need 2 for loops
    // This creates a timecomplexity of O(n^2) and so for 1000s of a's and 1000s of b's this version would be very slow

    for (let i = 0; i < arrayOfBs.length; i++) {
      for (let ii = 0; ii < arrayOfAs.length; ii++) {
        if (Math.abs(arrayOfBs[i] - arrayOfAs[ii]) === 4) {
          return true;
        } else {
        }
      }
    }
    return false;
  };
  const aAndBCheckerV3 = function (string) {
    // Least stupid version ::

    const aAndBChecker = function (string) {
      for (let i = 0; i < string.length; i++) {
        if (
          (string[i] === "a" && string[i + 4] === "b") ||
          (string[i] === "b" && string[i + 4] === "a")
        ) {
          return true;
        }
      }

      return false;
    };
  };

  console.log(aAndBChecker(sentence3));
  console.log(aAndBCheckerV2(sentence3));
  console.log("");
  console.log("");

  const vowelChecker = function (string) {
    console.log(string);
    const splittedString = string.split("");
    let vowelCounter = 0;
    splittedString.forEach((ele) => {
      if (
        ele === "a" ||
        ele === "e" ||
        ele === "i" ||
        ele === "o" ||
        ele === "u"
      ) {
        vowelCounter++;
      }
    });
    return vowelCounter;
  };
  console.log(vowelChecker(sentence));

  const vowelCheckerV2 = function (string) {
    // Same time complexity as before O(n)
    // Space complexity reduced to o(1) as i do not need to created splittedString
    let vowelCounter = 0;

    for (let i = 0; i < string.length; i++) {
      if (
        string[i] === "a" ||
        string[i] === "e" ||
        string[i] === "i" ||
        string[i] === "o" ||
        string[i] === "u"
      ) {
        vowelCounter++;
      }
    }

    return vowelCounter;
  };
  console.log(vowelCheckerV2(sentence));
  console.log("");
  console.log("");

  const sentence5 = "Peter put the pizza on the plate";

  // new Challenge = [3, 4, 5, NaN, NaN] remove the NaNs from the string -> similar to findIndex() and splice()
  // tbc : Start from your own function and capitalize the first words of each string !!
  // -END
};

init();
