// 🔥 QUEST 5: For Loops - Repeat Actions

// 1️⃣ Classic for loop
for (let i = 0; i < 5; i++) {
    console.log('Count:', i);
}

// 2️⃣ Loop through an array
const fruits = ["apple", "banana", "orange"];

for (let i = 0; i < fruits.length; i++) {
    console.log('Fruit:', fruits[i]);
}

// 3️⃣ Modern forEach
fruits.forEach(fruit =>{
    console.log(fruit);
})

// 4️⃣ Practice: names greeting
const names = ['Alex', 'Jordan', 'Taylor', 'Morgan', 'Casey'];

for (let i = 0; i < names.length; i++) {
    console.log('Hello, ' + names[i] + '!');
}