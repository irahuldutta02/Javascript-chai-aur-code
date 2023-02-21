let score = "33";
let score1 = "33aa";
let score2 = null;
let score3 = undefined;
let score4 = true;

console.log("Typr of score : " + typeof score);
console.log("Type of score1 : " + typeof score1);
console.log("Type of score2 : " + typeof score2);
console.log("Type of score3 : " + typeof score3);
console.log("Type of score4 : " + typeof score4);

console.log(); // ! for new line

let valueInNumber = Number(score); // ! converting score to number
let valueInNumber1 = Number(score1); // ! converting score1 to number
let valueInNumber2 = Number(score2); // ! converting score2 to number
let valueInNumber3 = Number(score3); // ! converting score3 to number
let valueInNumber4 = Number(score4); // ! converting score4 to number

console.log(
  "Type of score after converting to number : " + typeof valueInNumber
);
console.log("Value of score after converting to number : " + valueInNumber); // ! after converting a number string to number is returns number

console.log(); // for new line

console.log(
  "Type of score1 after converting to number : " + typeof valueInNumber1
);
console.log("Value of score1 after converting to number : " + valueInNumber1); // ! after converting a non number string to number it returns NaN (not a number)

console.log(); // for new line

console.log(
  "Type of score2 after converting to number : " + typeof valueInNumber2
);
console.log("Value of score2 after converting to number : " + valueInNumber2); // ! after converting null object to number it returns 0

console.log(); // for new line

console.log(
  "Type of score3 after converting to number : " + typeof valueInNumber3
);
console.log("Value of score3 after converting to number : " + valueInNumber3); // ! after converting undefined to number it returns NaN

console.log(); // for new line

console.log(
  "Type of score4 after converting to number : " + typeof valueInNumber4
);
console.log("Value of score4 after converting to number : " + valueInNumber4); // ! after converting boolean to number it returns its own value like 1 for true and 0 for false
