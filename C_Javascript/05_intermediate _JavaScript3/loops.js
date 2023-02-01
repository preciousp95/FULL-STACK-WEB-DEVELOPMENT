//LOOPs
// 1.) while
// 2.) do...while
// 3.) for

// while
// syntax: while ( condition ) {}
// The while loop will continue to run the codes inside the curly bracket untill the condition in the parentheses becomes false
// Example1:
var count = 0

while (count < 3) {
    console.log(count)
    count = count + 1
}

// Examples2:
var number = 0

while (number < 3) {
    number++
}

console.log(number)

// .do. while.loop
// . syntax
// .do.{
//.....//code.to be executed
// } while ( condition );

// // Example
let counter = 0;
let step = 5;

do {
    console.log(counter);
    counter = counter + step; // Stopping statenent
} while (counter <= 20);

// classwork
let call = 50;
let go = 30;

do {
    console.log(call);
    call = call + go; // Stopping statenent
} while (call <= 200);

// For loop
// Syntax: for (initialization condition increment){}
for (var i =0; i < 10; i++ ) {
    console.log(i)
}