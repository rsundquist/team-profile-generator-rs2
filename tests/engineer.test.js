const Engineer = require('../lib/Engineer');

test('create engineer', () => {
    const engineer = new Engineer('Sean', 13, 'ssundquist@gmail.com','seansundquist');

    expect(engineer.github).toEqual(expect.any(String));
});


test('engineer github', () => {
    const engineer = new Engineer('Sean', 13, 'ssundquist@gmail.com','seansundquist');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.email.toString()));
});

test('engineer role', () => {
    const engineer = new Engineer('Sean', 13, 'ssundquist@gmail.com','seansundquist');

    expect(engineer.getRole()).toEqual("Engineer");
});