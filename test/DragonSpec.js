const expect  = require('chai').expect;
const Dragon = require('../lib/Dragon.js');

describe('Dragon', function(){
  xit('has a name', function() {
    dragon = new Dragon('Ramoth');

    expect(dragon).to.have.property('name');
    expect(dragon.name).to.equal('Ramoth');
  })

  xit('has a color', function() {
    dragon = new Dragon('Ramoth', 'dorado');

    expect(dragon).to.have.property('color');
    expect(dragon.color).to.equal('dorado');
  })

  xit('has a rider', function() {
    dragon = new Dragon('Ramoth', 'dorado', 'Lessa');

    expect(dragon).to.have.property('rider');
    expect(dragon.rider).to.equal('Lessa');
  })

  xit('has a different name', function() {
    dragon = new Dragon('Mnementh');

    expect(dragon.name).to.equal('Mnementh');
  })

  xit('has a different color', function() {
    dragon = new Dragon('Mnementh', 'bronce');

    expect(dragon.color).to.equal('bronce');
  })

  xit('has a different rider', function() {
    dragon = new Dragon('Mnementh', 'bronce', 'F\'lar');

    expect(dragon.rider).to.equal('F\'lar');
  })

  xit('is born hungry', function() {
    dragon = new Dragon('Canth', 'café', 'F\'nor');

    expect(dragon.isHungry()).to.be.true;
  })

  xit('eats a lot', function() {
    dragon = new Dragon('Canth', 'café', 'F\'nor');

    expect(dragon.isHungry).to.be.true;

    dragon.eat();
    expect(dragon.isHungry).to.be.true;

    dragon.eat();
    expect(dragon.isHungry).to.be.true;

    dragon.eat();
    expect(dragon.isHungry).to.not.be.true;
  })
})
