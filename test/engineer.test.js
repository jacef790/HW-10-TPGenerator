const Engineer = require('../lib/Engineer');
const engineer = new Engineer('Jace', '1', 'email@email.comgmail.com', 'jacef');

test('test, constructor values for the engineer object', () => {
    expect(engineer.name).toBe('Jace');
    expect(engineer.ID).toBe('1');
    expect(engineer.email).toBe('email@email.comgmail.com');
    expect(engineer.gitHub).toBe('jacef');
});

test('test, name from the getName()', () => {
    expect(engineer.getName()).toBe('Jace');
});

test('test, id from the getId()', () => {
    expect(engineer.getID()).toBe('1');
});

test('test, email from the getEmail()', () => {
    expect(engineer.getEmail()).toBe('email@email.comgmail.com');
});

test('test, github username from the getGithub()', () => {
    expect(engineer.getGitHub()).toBe('jacef');
});

test('test, role from the getRole()', () => {
    expect(engineer.getRole()).toBe('Engineer');
});
