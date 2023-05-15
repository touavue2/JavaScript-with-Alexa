for (let i = 0; i < 11; i++) {
  console.log(i);
}
//
//Loops that you can use with strings and arrays.
// Doesnt Not work with objects.
let str1 = "Hello World"; // initializor

// for (let char of str1) {
//   //condition and iteration
//   //code
// }

let str2 = ":) What is this?";

for (let letter of str2) {
  console.log(letter);
}

// Example: Prinnt out evvery element within an array
let arr1 = [
  "Dog",
  "Cat",
  "Crab",
  "Turtle",
  "Koala",
  "Sloth",
  "Whale",
  "Spider",
  "Snake",
  "Fish",
];

for (let yeet of arr1) {
  console.log(yeet);
  for (let power of yeet) {
    console.log(power);
  }
}

/**
 * For.. In Loops
 * Used for objects
 * If the indexing is important! It ignores
 * index specific order
 */

let object = {
  firstName: "Toua",
  lastName: "Vue",
}; //initializer
for (let prop in object) {
  //code
}

//Example: Print out every property within an object

let obj2 = {
  petName: "Yuri",
  species: "Crusty White Dog",
  age: 17,
};

// for (let prop in obj2){
//     console.log(prop)
// }

for (let yes in obj2) {
  console.log(obj2[yes]);
}
