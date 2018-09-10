var bool = true;
var name = 'Erica';
var num = 2;
// ! = BANG = Flips your true to false vice versa
// If Statement
// Multilinestatement
// if (!num){
//   // do something
//   console.log("the condition is true")
// };

// Single line Statement
// if (!num) console.log("the condition is true");

// If / Else statement

// if (bool){
//   console.log('condition is true');
// } else {
//   console.log('condition is false');
// };

// if (!bool){
//   console.log('condition is true');
// } else {
//   console.log('condition is false');
// };

// If/ Else If statement

// if (num === '1'){
//   // Do something if first condition is true
//   console.log('truthy');
// } else if (num === 2) {
//   // do something if the condition is a different value
//   console.log('num === 1');
// } else {
//   // do something if no condition is met
//   console.log('num is not equal to any of the conditons');
// }

// Logical operators
// ||(OR) only one statement needs to be true for the code black to run
// && (AND) both statements need to be true for code black to run
// if (num === '1' || bool === false){
//   // Do something if first condition is true
//   console.log('condition 1');
// } else if (num === 2 && bool===true) {
//   // do something if the condition is a different value
//   console.log('conditon 2');
// } else {
//   // do something if no condition is met
//   console.log('no condition');
// }
// == loose equivalent, treats ex "2"and 2 as the same so "2"==2 true. ===strong equivalent "2"===2 false so not the same.

// Switch statement

switch (name) {
  case 'Joan':
    console.log('name is Joan');
  case 'Andy':
    console.log('name is Andy');
  case 'Erica':
    console.log('name is Erica');
    break;
  default:
    console.log('no match');

}

// Break = ESC so doesn't continue comparing 
