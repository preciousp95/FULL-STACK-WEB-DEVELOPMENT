var object1 = {
    street: 'Ekere',
    zip: 123456,
    country: 'Nigeria',
}
// Object destructuring:
var { street, zip, country } = object1
console.log(street)
console.log(zip)
console.log(country)

// Examples1:
var user = {
    id: 42,
    isVerified: true,
};
var { id, isVerified } = user

console.log(id);
console.log(isVerified);