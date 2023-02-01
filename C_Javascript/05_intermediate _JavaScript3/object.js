// The object is a data Type
// The symtax for an object is a curly bracket:()
// An object can take in tewo types of data:
// 1. Properties
// 2. Methods
// TO  place the property on method in an object, we use key and value pair seperated by a colon.
// An Example of an object with just properties
var address = {
    street: 'Okpoyo',
    zip: 4
}
// print the object to the console
console.log(address)
// Accessing data/values out of the object
// Dot Notation
console.log(address.street)
//Modifying objects
//Bracket Notation
address ['state'] = 'Rivers'
console.log(address)

// What is a Method?
// A method is a function that is created inside of an object
var car = {
    make: 'Camry',
    color: ' Silver',
    move: function () {
        console.log('zoom zoom zoom')
    }
}
car.move()
// window ia a global object
// alert and promt are among two methods available on the window Object.