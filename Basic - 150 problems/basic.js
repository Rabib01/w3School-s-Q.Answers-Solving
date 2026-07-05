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
  */ const init = function () {
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

  //-end
  // -END
};

init();
