// 🔥QUEST 4: Arrays - Storing Lists

// 1️⃣ Create an array
const fruits = ["apple", "banana", "cherry"];
console.log(fruits); 

// 2️⃣ Access items
console.log(fruits[0]); // apple

// 3️⃣ Add to end
fruits.push("grape");
console.log(fruits);

// 4️⃣ Remove from end
fruits.pop();
console.log(fruits);

// 5️⃣ Array length
console.log(fruits.length);

// 6️⃣ Check if item exists
console.log(fruits.includes("banana")); // true
console.log(fruits.includes("grape"));  // false

// 7️⃣ Practice: numbers array
const numbers = [10, 20, 30, 40, 50];

// Add one number
numbers.push(60);

// Remove one number
numbers.pop();

// Log length
console.log(numbers.length);