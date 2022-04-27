const Employee = require('../lib/employee');
const employee = new Employee('Jace', '1', 'email@email.com');

test('test if we can get the constructor values for the employee object', () => {
    expect(employee.name).toBe('Jace');
    expect(employee.ID).toBe('1');
    expect(employee.email).toBe('email@email.com');
});

test('test if we can get the name from the getName() method', () => {
    expect(employee.getName()).toBe('Jace');
});

test('test if we can get the id from the getId() method', () => {
    expect(employee.getID()).toBe('1');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(employee.getEmail()).toBe('email@email.com');
});

test('test if we can get the role from the getRole() method', () => {
    expect(employee.getRole()).toBe('Employee');
});