// "use strict";
// First level

// let sum = 0;

// for (let i = 1; i <= 3; ++i) {
//    sum = sum + Number(prompt(`Введіть число ${i}`,""));
// };
// alert((sum/3).toFixed(2));

// Second level

// const numRegex = /^-?\d*\.?\d+(e[-+]?\d+)?$/;
// let num,
//   sum = 0;
// for (let i = 1; i <= 3; ++i) {
//   num = Number(prompt(`Введіть число ${i}`, "").replace(/,/g, "."));
//   if (numRegex.test(num)) {
//     sum += num;
//   } else {
//     alert("Тільки числа:");
//     i--;
//   }
// }
// alert(`Середнє арифметичне ${(sum / 3).toFixed(2)}`);

// methods array

// const people = [
//   { name: "Vladlinen", budget: 4200 },
//   { name: "Elena", budget: 15100 },
//   { name: "Igor", budget: 4200 },
//   { name: "Kseniya", budget: 4200 },
// ];

// console.log(people.indexOf({}))

// let findedPerson;

// for (let person of people) {
//   if (person.budget === 4200) {
//     findedPerson = person;
//   }
// }

// console.log(findedPerson);

// console.log(people.filter((p) => p.budget > 5000).map((p) => p.budget));

// // const string = "Hello, how are you?";
// // const reversed = string.split("").toReversed().join("");
// // console.log(reversed);

// const num = 42; // integer
// const float = 4.42; // float
// const pow = 10e3;
// const big = 100000;
// console.dir(Number);

// // console.log(Math.pow(2, 53) - 1);
// // console.log(23 / undefined);
// // console.log(+str);

// // console.log(+(0.1 + 0.2).toFixed(5));

// // //BigInt
// // console.log(9999999999999999999999999999999999);

// // console.log(parseInt(10n)-4)
// // console.log(10n-BigInt(4))

// // const password = paassword.trim()

// // Function Declaration
// function greet(name) {
//   console.log("Hello-", name);
// }

// // Function Expression

// const greet2 = function (name) {
//   console.log("2 Hello-", name);
// };

// // greet("Vladilen");
// // greet2("Vladilen");

// // console.dir(greet);

// // setTimeout(greet, 1500);

// // setTimeout(function () {
// //   greet("Vlad");
// // }, 2000);

// // let counter

// const arrow = (name) => {
//   console.log("Hello-", name);
// };

// const arrow2 = (name) => console.log("hi")

// arrow("Hi!");

// const sum = (a,b =2) => a+b

// console.log(sum(40,2))
// console.log(sum())

// function sumAll(...numbers) {

//   console.log(numbers) {
//     res += num
//   }
//   return numbers.reduce((acc,cur)) =>acc +=cur), 0
// }

// function createPerson(name) {
//   const num = 1;
//   return function () {
//     console.log(name, "Hi!", num);
//   };
// }

// const createLastName = createPerson("vakoyt");
// console.log(createLastName());

// const person = {
//   name: "mk",
//   age: 29,
//   lang: ["r", "ua"],
//   adr: {
//     city: "TY",
//   },
// };
console.log("Hi");
console.log();
