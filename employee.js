class Employee{
    constructor(name, salary, title, manager = null){
        this.name = name;
        this.salary = salary;
        this.title = title;
        this.manager = manager;

        if(manager){
            manager.addEmployee(this);
        }

    }

    calculateBonus(multiplier){
        if(this instanceof Employee){
            return this.salary * multiplier
        } else if (this instanceof Manager){

        }

    }

}

module.exports = Employee
