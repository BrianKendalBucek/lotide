// const assertEqual = (actual, expected) => {
//   if (actual !== expected) {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//     return;
//   }

//   console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
// };

// Implement the definition for function eqObjects which will
// take in two objects and returns true or false, based on a perfect match.
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

const eqObjects = function(object1, object2) {
  // let flag = false;
  if(Object.entries(object1).length !== Object.entries(object2).length) {
    return false;
  }
  for (const iterator3 of Object.entries(object1)) {
    // object2.iterator3;
  let key = iterator3[0];
    console.log("Object 1: ", key, object1[key]);    
    console.log("Object 2: ", key, object2[key]);  
    if(object2[key] !== object1[key]){
      return false;
    }  
  }
  return true;
};


// const ab = { a: "1", b: "2", c: "3" };
// const ba = { b: "2", a: "1", c: "3" };

// const ab = { a: "1", b: "2", c: "3", d: "3"};
// const ba = { b: "2", a: "1", c: "3" };

// const ab = { a: "1", b: "2", c: "3" };
// const ba = { b: "2", a: "1", c: "3", d: "3" };

// assertEqual(eqObjects(ab, ba));