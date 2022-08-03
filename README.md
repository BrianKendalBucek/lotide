# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @briankendalbucek/lotide`

**Require it:**

`const _ = require('@briankendalbucek/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(head)`: Return the first item in an array and undefined if the array is empty.
* `function2(tail)`: Returns everything minus the first item in the array. If array is empty returns [].
* `function3(without)`: Returns an array minus the unwanted elements.
* `function4(flatten)`: Returns a flat array compiled of all indexes in the multi-nested array.
* `function5(middle)`: Returns the middle element if array is odd, and two middle elements if even. If only one or two elements, it will return [].
* `function6(countOnly)`: Takes a collection of items and returns a count for a specific subset of those items. Limited to strings.
* `function7(countLetters)`: Returns counts for specified characters of an inputted string.
* `function8(letterPositions)`: Return all of the indices of where each character is found in the string.
* `function9(findKeyByValue)`: Return the first key with the value of the inputted object and value. Return undefined if not found.
* `function10(map)`: Returns a new array in function that takes two args. Both an array to map and a callback.
* `function11(takeUntil)`: Takes an array and a callback as parameters and returns a truthy value.
* `function12(findKey)`: Takes an object and a call back as parameters and returns a truthy value. Return undefind if no key is found.