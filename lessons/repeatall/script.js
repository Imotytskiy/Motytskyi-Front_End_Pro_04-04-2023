// "use strict";

// import { common } from "@mui/material/colors";


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


// const width = 5;
// const height = 10;

// function calcRectArea(width, height) {
//   return width*height;
// }

// console.log(calcRectArea(width,height));

// class Rectangle {
  // width;
  // height;
 
// constructor(w , h) {
//    this.width = w;
//    this.height = h;
// }

//   calcArea(){
//     return this.width * this.height;
//   }
// }
// const rect = new Rectangle ( w = 5, h = 10)
// console.log(rect.calcArea());

// let num = 42;
// let firstName = 'Ihor';

// num = 10;

// const isProgrammer = true;

// firstName = 23;/* hjhfkafkadsjf
// sfjlasdfa
//  */

// isProgrammer = false;

// console.log(isProgrammer);


// let $  = 'test';
// let num = myNum;

// console.log()
/* 1


 */

// let num = 1;

// let num2 = 3;
// let num3;

// num3 = num2 + num

// console.log(num3);
// const result = document.getElementById('result');

// console.log(result.textContent);
// result.textContent = 42;

// const inputFirst = document.getElementById('input1');

// const sum = Number(input1.value)*input1.value;

// console.log(typeof(inputFirst));

// const submitButton = document.getElementById('submit');
// submitButton.onclick = function (){
//     resultElement.textContent = Number(input1.value) + NUmber (inpu2.value);
// }


function printResult(result) {
  if (result < 0){
    resultElement.style.color = 'red'
  } else {
    resultElement.style.color = 'green'
  }
  resuleElement.textContent 
}

