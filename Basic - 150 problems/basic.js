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
*/ const init = function () {
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

  // -END
};

init();
