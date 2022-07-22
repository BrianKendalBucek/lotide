// const assertEqual = (actual, expected) => {
//   if (actual !== expected) {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//     return;
//   }

//   console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
// };

// Not too long ago, we implemented a findKeyByValue function in Lotide. 
// It was similar to, but more limited than, findKey from Lodash. 
// Now that we know about callbacks, let's make a more complex version of this in a similar way to what Lodash has.
// Again this challenge will help you practice your comfort with crafting higher-order functions that accept a callback.

//Implement the function findKey which takes in an object and a callback. 
//It should scan the object and return the first key for which the callback returns a truthy value. 
//If no key is found, then it should return undefined.

//EXAMPLE

// findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2) // => "noma"

//Feel free to take a look at our solution for findKeyByValue. 
//Some of the core logic will be the same (such as the looping over object keys part).