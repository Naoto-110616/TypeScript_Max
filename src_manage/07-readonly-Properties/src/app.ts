class Department {
	// private readonly id: string;
	// private name: string;
	private employees: string[] = [];

	constructor(private readonly id: string, public name: string) {
		// this.id = id;
		// this.name = n;
	}
	describe(this: Department) {
		console.log(`Department (${this.id}): ${this.name}`);
	}

	addEmployee(employees: string) {
		this.id = "d2";
		this.employees.push(employees);
	}

	printEmployeeInformation() {
		console.log(this.employees.length);
		console.log(this.employees);
	}
}

const accounting = new Department("D1", "Accounting");

accounting.addEmployee("Max");
accounting.addEmployee("Menu");

// accounting.addEmployee[2] = "Anna";

accounting.describe();
accounting.name = "NEW NAME";

accounting.printEmployeeInformation();

// const accountingCopy = { name: "DUMMY", describe: accounting.describe };
// accountingCopy.describe();
