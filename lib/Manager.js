// Importing the Employee constructor
const Employee = require("./Employee");

// Manager constructor extends Employee constructor
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    // Calling the Employee constructor
    super(name, id, email);

    // Set the office number for the manager
    this.officeNumber = officeNumber;
  }

  // Override employee role to Manager
  getRole() {
    return "Manager";
  }
}

// Exporting the Manager class
module.exports = Manager;
