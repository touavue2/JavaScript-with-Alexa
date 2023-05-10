// Variables

let str1 = "Hello World!",
  int1 = 23,
  obj1 = {
    firstName: "Toua",
    lastName: "Vue",
    age: 22,
    job: "intern",
  };

(arr1 = [0, 1, 2, 3]), (bool1 = true);

console.log(int1);
console.log(obj1.lastName);

obj1.petName = "BonBon";

console.log(obj1);
console.log(obj1.petName);
arr1.push(4);

console.log(arr1);

// if the number is greater than or equal 7 and less than 19, say "hello world".
// Otherwise say, "Hoiyeah"

let int2 = 16;

str2 = "Hi World";
str3 = "hOiYEaH";
str4 = "How's it goin?";
bool2 = false;

if (int2 >= 7 && int2 < 19) {
  console.log(str2);
} else {
  console.log(str3);
}

// If the number is greater than 16 or the variable bool2 is False, say "Hello World".
//Else, if the number is less than
// 20 and the variable bool2 is TRUE, say "How's it goin?". Otherwise, say goodbye.
if (int2 > 16 || bool2 === true) {
  console.log(str2);
} else if (int2 < 20 && bool2 === true) {
  console.log(str3);
} else {
  console.log(str4);
}
