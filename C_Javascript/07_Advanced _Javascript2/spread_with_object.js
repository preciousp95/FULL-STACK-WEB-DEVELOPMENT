var anObject = {
    name: 'Harry',
    school: 'Locktech',
    age:  24
}
console.log(anObject)

var newObject = {
    ...anObject,
    color: 'red skinned',
    race:'indian'
}
// console.log(newObject)

// Example1:
const obj1 = { z: 'bar', x: 42 };
const obj2 = { w: 'baz', y: 13 };

const mergedObject = {...obj1, ...obj2 };
console.log(mergedObj)
