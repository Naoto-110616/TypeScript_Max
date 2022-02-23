class Department {
	name: string;
	private employees: string[] = [];

	constructor(n: string) {
		this.name = n;
	}
	describe(this: Department) {
		console.log("Department " + this.name);
	}

	addEmployee(employees: string) {
		this.employees.push(employees);
	}

	printEmployeeInformation() {
		console.log(this.employees.length);
		console.log(this.employees);
	}
}

const accounting = new Department("Accounting");

accounting.addEmployee("Max");
accounting.addEmployee("Manu");

// accounting.addEmployee[2] = "Anna";

accounting.describe();
accounting.name = "NEW NAME";

accounting.printEmployeeInformation();

// const accountingCopy = { name: "DUMMY", describe: accounting.describe };
// accountingCopy.describe();
