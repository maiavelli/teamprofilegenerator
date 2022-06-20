const Engineer = require('..lib/Engineer');
const engineer = new Engineer('Lisa', '1', 'lisa@test.com', 'lisasgithub');

test('test if we can get the constructor values for engineer object', () => {
    expect(engineer.name).toBe('Lisa');
    expect(engineer.id).toBe('1');
    expect(engineer.email).toBe('lisa@test.com');
    expect(engineer.github).toBe('lisasgithub');
});

test('test if we can retrieve engineer name using getName() method', () => {
    expect(engineer.getName()).toBe('Lisa');
});

test('test if we can retrieve engineer id using getId() method', () => {
    expect(engineer.getId()).toBe('1');
});

test('test if we can retrieve engineer email using getId() method', () => {
    expect(engineer.getEmail()).toBe('lisa@test.com');
});

test('test if we can retrieve engineer office number using getGithub() method', () => {
    expect(engineer.getOfficeNumber()).toBe('lisasgithub');
});

test('test if we can retrieve engineer role using getRole() method', () => {
    expect(engineer.getRole()).toBe('Engineer');
});