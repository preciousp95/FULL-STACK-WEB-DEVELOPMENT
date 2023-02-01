// more on objects:
//the object data type, just like an array can take in multiple data types.
// Nesting an object  and Array in an object:
var dog = {
    Name: 'Rottweiller',
    age: 3,
    puppies: {
        pup1: 'Litter1',
        pup2: 'Litter2'
    },
    puppiesAge: [0.5, 0.6]
}
// Acessing data from a nested object
console.log(dog.puppies.pup1)
console.log(dog.puppiesAge[0])
console.log(dog.puppiesAge[1])