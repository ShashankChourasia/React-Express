// Design a class for employee which takes id and name in during construction of object and has a salary property
// Design a class for manager which is employee and can have department property

class Employee {
  constructor(id, name) {
    if (!id || !name) throw new Error("Employee id and name are mandatory");
    this.id = id;
    this.name = name;
  }

  setSalary(salary) {
    this.salary = salary;
  }

  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  getSalary() {
    return this.salary;
  }
}

// const employee = new Employee(1, "Jack");
// employee.setSalary(1000);
// console.log(employee.getSalary());
// console.log(employee.getId());
// console.log(employee.getName());

class Manager extends Employee {
  setDepartment(name) {
    this.department = name;
  }

  getDepartment() {
    return this.department;
  }
}

const manager = new Manager(2, "John");
manager.setDepartment("Development");

console.log(manager.getDepartment());
