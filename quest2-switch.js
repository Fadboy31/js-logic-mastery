// 🔥 Quest 2: Arrow Functions - Modern JS

// Traditional function converted to arrow function
const add = (ad, b) => a + b;
console.log(add(5, 3));  // 8

// One parameter arrow function
const double = x => x * 2;
console.log(double(7));  // 14

// Arrow function with code block
const greet = name => {
    const message = 'Hello, ${name}!';
    return message;
};
console.log(greet('MelekhFad'));  // Hello, MelekhFad!

// Practice: multiply
const multiply = (a, b) => a * b;
console.log(multiply(4, 7));  // 28