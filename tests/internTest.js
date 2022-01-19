const Intern = require('../lib/Intern');

test('create intern', () => {
    const intern = new Intern('Savannah', 13, 'sheinz@gmail.com','MSU');

    expect(intern.school).toEqual(expect.any(String));
});


test('school', () => {
    const intern = new Intern('Savannah', 13, 'sheinz@gmail.com','MSU');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('intern role', () => {
    const intern = new Intern('Savannah', 13, 'sheinz@gmail.com','MSU');

    expect(intern.getRole()).toEqual("Intern");
});