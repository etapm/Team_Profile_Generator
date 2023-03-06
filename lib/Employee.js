// Define the Employee class
class Employee {
  // Constructor method with name, id, and email parameters
  constructor(name, id, email) {
    // Assign the name, id, and email values to the corresponding properties of the new object
    this.name = name;
    this.id = id;
    this.email = email;
  }

  // Method to get the name of the employee
  getName() {
    return this.name;
  }

  // Method to get the ID of the employee
  getId() {
    return this.id;
  }

  // Method to get the email of the employee
  getEmail() {
    return this.email;
  }

  // Method to get the role of the employee, which is always 'Employee'
  getRole() {
    return "Employee";
  }
}

// Export the Employee class to be used in other modules
module.exports = Employee;
