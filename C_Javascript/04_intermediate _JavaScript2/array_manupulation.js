// Everything is an object in Javascript
// 1. Method (also knoown as an object Function)
// 2. Property
var animals = ['pigs', 'goats', 'sheep']

var count = animals.push('cows')
console.log(count)
// The push method adds a new value to the array
console.log(animals)

// Array.pop()
var plants = ['broccoli', 'cauliflower', 'cabbages', 'kale', 'tomato'];
var countPlantArray = plants.pop()
// The pop() method removes the last element from am array and returns the element.
console.log(countPlantArray)
// The pop is used to delete a value from the array
console.log(plants)

// Array.Shift()
var array1 = [1, 2, 3];
var firstElement = array1.shift();
console.log(array1);
// expected output: Array [2, 3]
console.log(firstElement);
// expected output: 1

// Array.Unshift()
var array2 = [1, 2, 3];
console.log(array2.unshift(4, 5));
//expected output: 5
console.log(array2);
// expected output: Array [4, 5, 1, 2, 3]

// Array.concat()
console.log('\n Array.concat Method')
var arr1 = ['a', 'b', 'c'];
var arr2 = ['d', 'e', 'f'];
var array3 = arr1.concat(arr2);

cobsole.log(array3);
//expected output:Array ["a", "b", "c", "d", "e", "f"]

// Array.indexof()
console.log('\n Array.indexOf Method')
var array3 = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// expected output: 1

// start from index 2
console.log(beasts.indexOf('bison', 2));
// expected output: 4

console.log(beasts.indexOf('giraffe'));
// expected output: -1

// Array.incudes()
console.log('\n Array.includes Method')
var array4 = [1, 2, 3];

console.log(array4.includes(2));
// expected output: true

var pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// expected output: true

console.log(pets.includes('at'));
// expected output: false


// Array.reverse()
console.log('\n Array.reverse Method')
var array5 = ['one', 'two', 'three'];
console.log('array5:', array5);
// expected output: "array1:" Array ["one", "two", "three"]

var reversed = array5.reverse();
console.log('reversed:', reversed);
// expected output: "reversed:" Array ["three", "two", "one"]

// Careful: reverse is destructive -- it changes the original array.
console.log('array5:', array5);
// expected output: "array1:" Array ["three", "two", "one"]


// Array.slice()
console.log('\n Array.slice Method')

var months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]
