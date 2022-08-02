const assertEqual = require('./assertEqual');

const head = (arr) => {
  let first = arr[0];
  return first;
};

// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual(head([]), 5);
// assertEqual(head([1]), 1);

const tail = arrTwo => {
  return arrTwo.slice(1);
};

module.exports = tail;

// let result = tail([1, 2, 3, 4, 5]);
// console.log(result);

// assertEqual(result[0], 2);
// assertEqual(result[1], 3);
// assertEqual(result[2], 4);

// result = tail(["Words", "To", "Be", "Taken", "Literally"]);

// assertEqual(result[0], "To");
// assertEqual(result[1], "Be");
// assertEqual(result[2], "Taken");