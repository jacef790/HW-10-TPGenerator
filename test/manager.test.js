const Manager = require('../lib/Manager');
const manager = new Manager('Jace', '1', 'email@email.com', '01');

test('test, constructor values for the manager object', () => {
    expect(manager.name).toBe('Jace');
    expect(manager.ID).toBe('1');
    expect(manager.email).toBe('email@email.com');
    expect(manager.office).toBe('01');
});

test('test, name from the getName()', () => {
    expect(manager.getName()).toBe('Jace');
});

test('test, id from the getId()', () => {
    expect(manager.getID()).toBe('1');
});

test('test, email from the getEmail()', () => {
    expect(manager.getEmail()).toBe('email@email.com');
});

test('test, office number from the getOffice()', () => {
    expect(manager.getOffice()).toBe('01');
});

test('test, role from the getRole()', () => {
    expect(manager.getRole()).toBe('Manager');
});
