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

  // setInterval(() => printRotatedString(string), 2000);
  
  printRotatedString("abcd");
  console.log("");
  printRotatedString("w3Schools");
  
  // -end
  
  // const stringToRotate = "w3Schools";
  // const result = stringToRotate.split("");
  // console.log(result);
  
  // for (let i = 0; i < result.length; i++) {
    //   const temp = result.pop();
    //   result.unshift(temp);
    //   console.log(result.join(""));
    // }
*/ const init = function () {
  //7. Find Years When Jan 1 is Sunday (2014?2050)
  const options = {
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
  // console.log(typeof startDate, typeof endDate, typeof formattedDateRange);
  console.log("");

  const dateObject = new Date(Date.UTC(2014, 0, 1));
  console.log(dateObject, typeof dateObject);

  //-end
  // -END
};

init();
