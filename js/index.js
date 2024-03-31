// 1-Misol
// 1 dan 100 gacha bo'lgan sonlarni faqat tublarini chiqarish

// function isPrime(num) {
//     if (num <= 1) return false;
//     if (num <= 3) return true;

//     if (num % 2 === 0 || num % 3 === 0) return false;

//     let i = 5;
//     while (i * i <= num) {
//         if (num % i === 0 || num % (i + 2) === 0) return false;
//         i += 6;
//     }
//     return true;
// }

// for (let i = 1; i <= 100; i++) {
//     if (isPrime(i)) {
//         console.log(i);
//     }
// }


// 2-Misol
// Login qilish dasturi


// const correctUsername = "username";
// const correctPassword = "password";

// function login() {
//   const username = prompt("Enter username:");
//   const password = prompt("Enter password:");

//   if (username === correctUsername && password === correctPassword) {
//     window.location.href = "index.html";
//   } else {
//     alert("Incorrect username or password. Please try again.");
//     login();
//   }
// }

// login();



// 3-Misol
// "Hello world" so'zini foydalanuvchi nechta kiritganini sanash prompt orqali

// let count = 0;

// while (true) {
//     let userInput = prompt("Type 'hello world' (or cancel to exit):");

//     if (userInput === null) {
//         break;
//     }

//     if (userInput.toLowerCase() === "hello world") {
//         count++;
//     }
// }

// console.log("Number of times 'hello world' was typed:", count);


// 4-Misol
// A dan B gacha sonlarning faqat juftlarini chiqarish

// let a = parseInt(prompt("Enter the starting number (a):"));
// let b = parseInt(prompt("Enter the ending number (b):"));

// console.log("Pairs of numbers from", a, "to", b, ":");

// for (let i = a; i <= b; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }