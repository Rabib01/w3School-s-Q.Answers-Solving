/**

// Practising this 
// console.log(`Hello Idiot!`);
console.log(`To find the largest element in an array`);
const arr = [21, 23, 4, 51, 12, 63, 21, 22, 32, 12, 32, 55];
const largestElementFinder = function (array) {
  //   console.log(array);
  let largestElement = arr[0];
  array.forEach((ele, i, arr) => {
    if (arr[i] > largestElement) {
      largestElement = arr[i];
    }
  });
  console.log(`The largest element in this array is : ${largestElement}`);
};

largestElementFinder(arr);

console.log("");
console.log("");

// this property using implicit binding.

// Koto number line e kon jaigai function ta call hoise
// left e dot notation thakle oitar left e jeita ase oita hocche this
const sakib = {
  name: "sakib",
  age: "35",
  printPlayerName: function (name) {
    console.log(this.name);
  },
};

sakib.printPlayerName();
console.log("");
console.log("");

// implicit binding second method
const rabib = {
  name: "Rabib",
  age: "35",
};

const rayen = {
  name: "Rayen",
  age: "35",
};

const printPlayerNameFunction = function (object) {
  object.printPlayerName = function () {
    console.log(this.name);
  };
};

printPlayerNameFunction(rabib);
printPlayerNameFunction(rayen);

rabib.printPlayerName();
rayen.printPlayerName();
console.log("");
console.log("");

console.log(rabib, rayen);1

*/ const init = function () {
  // practising question answers with findIndex()

  // easy Use findIndex() to find the index of "Orange".
  const fruits = ["Apple", "Banana", "Orange", "Mango"];
  const fruits2 = ["Apple", "Banana", "Mango"];

  // const fruitFinderIndex = function (array) {
  //   return array.findIndex((element) => {
  //     return element === "Orange";
  //   });
  // };
  const fruitFinderIndex = function (array) {
    return array.findIndex((element) => element === "Orange");
  };

  console.log(fruitFinderIndex(fruits));
  console.log(fruitFinderIndex(fruits2));

  // mediutm - find the index of the element whose items name is bread

  const groceryItems = [
    { name: "Eggs", quantity: 4, completedStatus: false },
    { name: "Bread", quantity: 2, completedStatus: true },
    { name: "Butter", quantity: 1, completedStatus: false },
    { name: "Milk", quantity: 1, completedStatus: false },
  ];

  // console.log(groceryItems[0].name);
  // console.log(groceryItems[1].name);

  // console.log(groceryItems.forEach((e, i, a) => console.log(a[i])));

  console.log(
    groceryItems.findIndex((element, idx, arr) => element.name === "Bread"),
  );

  // hard
  // if butter exists set the completedStatus from false to true
  console.log("");
  console.log("");

  groceryItems.findIndex((element) => {
    if (element.name === "Butter") {
      return (element.completedStatus = true);
    }
  });

  console.log(groceryItems);
  console.log("");
  console.log("");

  const groceryItems22 = [
    { name: "Eggs", quantity: 4, completedStatus: false },
    { name: "Bread", quantity: 2, completedStatus: true },
    { name: "Banana", quantity: 2, completedStatus: true },
    { name: "Butter", quantity: 1, completedStatus: false },
    { name: "Milk", quantity: 1, completedStatus: false },
  ];

  const removeItem = function (array, itemToBeRemoved) {
    console.log(array, itemToBeRemoved);

    const indexToBeRemoved = array.findIndex((element) => {
      return element.name === itemToBeRemoved;
    });
    console.log("");
    console.log(indexToBeRemoved);

    const removeElement = array.splice(indexToBeRemoved, 1);

    console.log(array);
  };

  removeItem(groceryItems22, "Butter");

  // ends here
};

init();
