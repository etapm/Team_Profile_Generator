const Employee = require("../lib/employee");

test("Employee constructor creates an object with name, ID, and email properties", () => {
  const employee = new Employee("Omar", 37, "omarsemail@gmail.com");

  expect(employee).toMatchObject({
    name: expect.any(String),
    id: expect.any(Number),
    email: expect.any(String),
  });
});

test("getName() method returns the name of an employee object", () => {
  const employee = new Employee("Omar", 37, "omarsemail@gmail.com");

  expect(employee.getName()).toEqual(`Omar`);
});

test("getId() method returns the ID of an employee object", () => {
  const employee = new Employee("Omar", 37, "omarsemail@gmail.com");

  expect(employee.getId()).toEqual(37);
});

test("getEmail() method returns the email of an employee object", () => {
  const employee = new Employee("Omar", 37, "omarsemail@gmail.com");

  expect(employee.getEmail()).toEqual(`omarsemail@gmail.com`);
});

test('getRole() method returns the role of an employee object as "Employee"', () => {
  const employee = new Employee("Omar", 37, "omarsemail@gmail.com");

  expect(employee.getRole()).toEqual(`Employee`);
});
