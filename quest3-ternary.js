// 🔥 Quest 3: If/Else - Making Decisions

// 1️⃣ Basic if/else statement
const age = 18;

if (age >= 18) {
    console.log('Ypu can vote!');
} else {
    console.log('You are too young to vote.');
}

// 2️⃣ If/else with multiple conditions
const score = 85;

if (score >= 90) {
    console.log('Grade: A');
} else if (score >= 80) {
    console.log('Grade: B');
} else if (score >= 70) {
    console.log('Grade: C');
} else {
    console.log('Keep Studying!');
}

// 3️⃣ Practice: Function to check number
const checkNumber = num => {
    if (num > 0) {
        return 'Positive Number';
    } else if (num < 0) {
        return 'Negative Number';
    } else {
        return 'Zero';      
    }

    // Test the function
    console.log(checkNumber(10));  // Positive 
    console.log(checkNumber(-5));   // Negative 
    console.log(checkNumber(0));    // Zero
}