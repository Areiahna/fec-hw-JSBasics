// Declaring variables

let num1 = 23
let num2 = 7

console.log("num1:", num1)
console.log("num2:", num2)


//Arithimetic Operations

function sum(x, y) {
    let sum = x + y
    return sum
}

console.log("Sum", sum(num1, num2))

function difference(x, y) {
    let diff = x - y
    return diff
}

console.log("Difference:", difference(num1, num2))


function product(x, y) {
    let prod = x * y
    return prod
}
console.log("Product:", product(num1, num2))

function quotient(x, y) {
    let quo = x / y
    return quo
}

console.log("Quotient", quotient(num1, num2))


// Update variables
num1 = 12
num2 = 5

console.log("Updated num1:", num1)
console.log("Updates num2:", num2)


// Comparison Operators
console.log("Is num1 equal to num2?:", num1 === num2)
console.log("Is num1 greater than num2?:", num1 > num2)
console.log("Is num1 not equal to num2?:", num1 != num2)

function isPositive(x, y) {
    return x > 0 && y>0
}

console.log("Are both numbers positive?:", isPositive(num1, num2))

function isEven(x, y) {
    return x % 2 == 0 || y % 2 == 0
}

console.log("Is at least one number even?:", isEven(num1,num2))