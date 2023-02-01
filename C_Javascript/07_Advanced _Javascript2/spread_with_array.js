var anArray = ['Good', 'Better', 'Best']
console.log(anArray)


var newArray=  [...anArray, 'Happy', 'Happier', 'Happiest']
console.log(anArray)

//Example1:
const parts = ['shoulder', 'knees'];
const lyrics = ['head', ...parts, 'and', 'toes'];
console.log(parts)
console.log(lyrics)

//Example2:
let arr1 = [0, 1, 2];
const arr2 = [3, 4, 5];

arr1 = [...arr1, ...arr2];

//Classwork1

const FxArray = ['H', 'I', 'P']
console.log(FxArray)

const xArray = ['P', 'O', 'P', 'O']
console.log(xArray)

const yArray = ['T', 'A', 'M', 'U', 'S']
console.log(yArray)

const arr = [...FxArray, ...xArray,...yArray];

