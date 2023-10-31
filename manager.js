const Employee = require("./employee.js");

class Manager extends Employee{
    constructor(name, salary, title, employees = [], manager = null){
        super(name, salary, title, manager);
        this.employees = employees;
    }

    addEmployee(employee){
       // console.log(this.employees, employee);
        this.employees.push(employee);
    }
}
module.exports = Manager
const splinter = new Manager('Splinter', 100000, 'Sensei');
console.log('Before: ', splinter);

const leo = new Employee('Leonardo', 90000, 'Ninja', splinter);
const mikey = new Employee('Michelangelo', 90000, 'Ninja', splinter);
const donnie = new Employee('Donatello', 90000, 'Ninja', splinter);
const raph = new Employee('Raphael', 90000, 'Ninja', splinter);

console.log('After: ', splinter);
