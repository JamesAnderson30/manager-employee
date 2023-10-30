const Employee = require("./employee.js");

class Manager extends Employee{
    constructor(name, salary, title, employees = [], manager = null){
        super(name, salary, title, manager);
        if(Array.isArray(this.employees)){this.employees = employees}

       else this.employees = [employees];
    }

    addEmployee(employee){
    //    console.log(this.employees, employee);

        this.employees.push(employee);
    }

    totalSubSalary(){
        let sum =0;
        for(let employee of this.employees){
            if(employee instanceof Employee){
            sum += employee.salary
          }

          else if (employee instanceof Manager){
             sum += employee.totalSubSalary()
          }
        }
        return sum
    }
    calculateBonus(multiplier){
      return  (this.salary + this.totalSubSalary()) * multiplier
    //   for(let employee of this.employees){
    //       if(this instanceof Employee){
    //       sum += employee.salary
    //     } else if (this instanceof Manager){

    //     }
    //   }
    }



}


const splinter = new Manager('Splinter', 100000, 'Sensei');
const leo = new Manager('Leonardo', 90000, 'Ninja', splinter);
const raph = new Manager('Raphael', 90000, 'Ninja', leo);
const mikey = new Employee('Michelangelo', 85000, 'Grasshopper', raph);
const donnie = new Employee('Donatello', 85000, 'Grasshopper', raph);

console.log(splinter.calculateBonus(0.05)); // => 22500
console.log(leo.calculateBonus(0.05)); // => 17500
console.log(raph.calculateBonus(0.05)); // => 13000
module.exports = Manager
// const splinter = new Manager('Splinter', 100000, 'Sensei');
// console.log('Before: ', splinter);



// // const leo = new Employee('Leonardo', 90000, 'Ninja', splinter);
// // const mikey = new Employee('Michelangelo', 90000, 'Ninja', splinter);
// // const donnie = new Employee('Donatello', 90000, 'Ninja', splinter);
// // const raph = new Employee('Raphael', 90000, 'Ninja', splinter);

// console.log('After: ', splinter);
