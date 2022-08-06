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
`Mocha`
`Chai`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`


## Documentation

The following functions are currently implemented:

* `Head`: Return the first item in an array and undefined if the array is empty.
* `Tail`: Returns everything minus the first item in the array. If array is empty returns [].
* `Without`: Returns an array minus the unwanted elements.
* `Flatten`: Returns a flat array compiled of all indexes in the multi-nested array.
* `Middle`: Returns the middle element if array is odd, and two middle elements if even. If only one or two elements, it will return [].
* `CountOnly`: Takes a collection of items and returns a count for a specific subset of those items. Limited to strings.
* `CountLetters`: Returns counts for specified characters of an inputted string.
* `LetterPositions`: Return all of the indices of where each character is found in the string.
* `FindKeyByValue`: Return the first key with the value of the inputted object and value. Return undefined if not found.
* `Map`: Returns a new array in function that takes two args. Both an array to map and a callback.
* `TakeUntil`: Takes an array and a callback as parameters and returns a truthy value.
* `FindKey`: Takes an object and a call back as parameters and returns a truthy value. Return undefind if no key is found.