// Importing Manager constructor from lib folder
const Manager = require("../lib/manager");

// Testing if Manager object is created
test("creates a manager object", () => {
  const manager = new Manager("Luis", 83, "luisemail@gmail.com", 7);

  expect(manager.officeNumber).toEqual(expect.any(Number));
});

// Testing if getRole() returns employee role
test("returns employee role", () => {
  const manager = new Manager("Luis", 83, "luisemail@gmail.com", 7);

  expect(manager.getRole()).toEqual("Manager");
});
