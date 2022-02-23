const userName = "Max";
// userName = "Maximilian";
let age = 30;

age = 29;
var result;

// function add(a: number, b: number) {
// 	result = a + b;
// 	return result;
// }

// if (age > 20) {
// 	let isOld = true;
// }

// console.log(isOld);

// console.log(result);

const add = (a: number, b: number) => a + b;

const printOutPut: (a: number | string) => void = (output) =>
	console.log(output);

const button = document.querySelector("button");

if (button) {
	button.addEventListener("click", (event) => console.log(event));
}

printOutPut(add(5, 2));
