const Employee = require('../lib/employee');
const employee = new Employee('Jace', '1', 'email@email.com');

test('test, constructor values for the employee object', () => {
    expect(employee.name).toBe('Jace');
    expect(employee.ID).toBe('1');
    expect(employee.email).toBe('email@email.com');
});

test('test, name from the getName()', () => {
    expect(employee.getName()).toBe('Jace');
});

test('test, id from the getId()', () => {
    expect(employee.getID()).toBe('1');
});

test('test, email from the getEmail()', () => {
    expect(employee.getEmail()).toBe('email@email.com');
});

test('test, role from the getRole()', () => {
    expect(employee.getRole()).toBe('Employee');
});