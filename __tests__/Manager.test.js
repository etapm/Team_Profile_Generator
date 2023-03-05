// using Manager constructor
const Manager = require("../lib/Manager");

// creating manager object
test("creates a manager object", () => {
  const manager = new Manager("Luis", 83, "luisemail@gmail", 7);

  expect(manager.officeNumber).toEqual(expect.any(Number));
});

// gets role from getRole()
test("gets the role of the employee", () => {
  const manager = new Manager("Luis", 83, "luisemail@gmail.com");

  expect(manager.getRole()).toEqual("Manager");
});
