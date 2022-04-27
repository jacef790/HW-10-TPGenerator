const Intern = require('../lib/Intern');
const intern = new Intern('Jace', '1', 'email@email.com', 'UTEP');

test('test if we can get the constructor values for the engineer object', () => {
    expect(intern.name).toBe('Jace');
    expect(intern.ID).toBe('1');
    expect(intern.email).toBe('email@email.com');
    expect(intern.school).toBe('UTEP');
});

test('test if we can get the name from the getName()', () => {
    expect(intern.getName()).toBe('Jace');
});

test('test if we can get the id from the getId()', () => {
    expect(intern.getID()).toBe('1');
});

test('test if we can get the email from the getEmail()', () => {
    expect(intern.getEmail()).toBe('email@email.com');
});

test('test if we can get the school name from the getSchool()', () => {
    expect(intern.getSchool()).toBe('UTEP');
});

test('test if we can get the role from the getRole()', () => {
    expect(intern.getRole()).toBe('Intern');
});
