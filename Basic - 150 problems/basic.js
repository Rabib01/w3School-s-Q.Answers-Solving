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
  
  */ const init = function () {
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
  console.log(``);
  console.log("");

  //30. Remove 'Script' from String at 5th Position
  const scriptRemover = function (string) {
    // console.log(`${string}`);
    const scriptChecker = string.toLowerCase().slice(4, 10).includes("script");
    // console.log(scriptChecker);

    if (scriptChecker) {
      console.log(string.split("").splice(4, 6).toString());
    }

    // else {
    //   console.log(`no`);
    // }
  };
  scriptRemover("The Scriptquick brown fox jumps over the lazy dog");
  console.log("");
  // scriptRemover("The Scrquick brown fox jumps over the lazy dog");
  // scriptRemover("The quicSaSk brown fox jumps over the lazy dog");
  scriptRemover("JavaScript");
  console.log("");
  console.log("");
  const months = ["Jan", "March", "April", "June"];
  months.splice(0, 1);
  console.log(months.toString());
  console.log("");
  console.log("");

  // Personal Problems
  // Taking multiple inputs and turning htem into strings
  let numbers = parseInt(prompt("Please enter the numbers"));
  console.log(numbers);

  let data = [];
  console.log(data);

  while (numbers > 0) {
    data.push(Number(prompt("Array elements please")));
    numbers -= 1;
  }

  console.log(data);

  const data2 = [1111, 1234, 1235];

  // -END
};

init();
