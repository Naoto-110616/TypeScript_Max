// const names: Array<string> = []; // string[]
// // names[0].split(" ");

// const promise: Promise<number> = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		resolve(10);
// 	}, 2000);
// });

// promise.then((data) => {
// 	// data.split(" ");
// });

function merge<T extends object, U extends object>(objA: T, objB: U) {
	return Object.assign(objA, objB);
}

const mergedObj = merge({ name: "Max" }, { age: 30 });
console.log(mergedObj.age);

interface Lengthy {
	length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
	let descriptionsText = "Got no value.";
	if (element.length === 1) {
		descriptionsText = "Got 1 element.";
	} else if (element.length > 1) {
		descriptionsText = "Got " + element.length + " elements.";
	}
	return [element, descriptionsText];
}

console.log(countAndDescribe([]));

function extractAndConvert<T extends object, U extends keyof T>(
	obj: T,
	key: U
) {
	return "Value:" + obj[key];
}

extractAndConvert({ name: "Max" }, "name");
