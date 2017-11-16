const expect = require('chai').expect;
const Hobbit = require('../lib/Hobbit.js');

describe('Hobbit', function(){
  xit('has a name', function() {
    var hobbit = new Hobbit('Bilbo');

    expect(hobbit).to.have.property('name');
    expect(hobbit.name).to.equal('Bilbo');
  })

  xit('has a different name', function() {
    var hobbit = new Hobbit('Peregrin');

    expect(hobbit.name).to.equal('Peregrin');
  })

  xit('has a homebody personality by default', function() {
    var hobbot = new Hobbit('Samwise');

    expect(hobbit).to.have.property('personality');
    expect(hobbit.personality).to.equal('hogareño');
  })

  xit('can have a different personality', function() {
    var hobbot = new Hobbit('Frodo', 'aventurero');

    expect(hobbit.personality).to.equal('aventurero');
  })

  xit('grows older when celebrating birthdays', function() {
    var hobbot = new Hobbit('Meriadoc');

    expect(hobbit.age).to.equal(0);

    hobbit.celebrate_birthday();
    expect(hobbit.age).to.equal(1);

    hobbit.celebrate_birthday();
    expect(hobbit.age).to.equal(2);

    hobbit.celebrate_birthday();
    expect(hobbit.age).to.equal(3);

    hobbit.celebrate_birthday();
    expect(hobbit.age).to.equal(4);

    hobbit.celebrate_birthday();
    expect(hobbit.age).to.equal(5);
  })

  xit('is a child at 32 years old', function() {
    var hobbot = new Hobbit('Gerontius');

    var age = 0;
    while (age < 32) {
      age++
      hobbit.celebrate_birthday();
    }

    expect(hobbit.age).to.equal(32);
    expect(hobbit.isAdult()).to.be.false;
  })

  xit('is an adult at 33 years old', function() {
    var hobbot = new Hobbit('Otho');

    var age = 0;
    while (age < 33) {
      age++
      hobbit.celebrate_birthday();
    }

    expect(hobbit.age).to.equal(33);
    expect(hobbit.isAdult()).to.be.true;
  })
})
