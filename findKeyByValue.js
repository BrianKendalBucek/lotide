const assertEqual = require('./assertEqual');

const findKeyByValue = (obj, find) => {
  
  for (const key of Object.keys(obj)) {
    const value = obj[key];
    if (value === find) {
      return key;
    }
  }
};

module.exports = findKeyByValue;

//function which takes in an obj and a value
//it should scan the obj and return the first key which contains the given value.
//if no key with that given value is found, then it should return undefined.

// const tvShows = {
//   romance: "ER",
//   drama: "The Wire",
//   comedy: "Dumber"
// };

//I want to loop through and have the loop recognize the matching value.
//Once it recognizes, assign to variable.
//I want to then, return the key for that value.

// assertEqual(findKeyByValue(tvShows, "The Wire"), "drama");
// assertEqual(findKeyByValue(tvShows, "That 70's Show"), undefined);