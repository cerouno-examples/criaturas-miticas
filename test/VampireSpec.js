const expect  = require('chai').expect;
const Vampire = require('../lib/Vampire.js');

describe('Vampire', function(){
  xit('has a name', function() {
    vampire = new Vampire('Marcelo');

    expect(vampire).to.have.property('name');
    expect(vampire.name).to.equal('Marcelo');
  })

  xit('has a pet bat by default', function(){
    vampire = new Vampire('Lestat');

    expect(vampire).to.have.property('pet');
    expect(vampire.pet).to.equal('bat');
  })

  xit('can have other pets', function(){
    vampire = new Vampire('Spike', 'fox');

    expect(vampire.pet).to.equal('fox');
  })

  xit('is thirsty by default', function(){
    vampire = new Vampire('Angel');

    expect(vampire.isThirsty()).to.be.true;
  })

  xit('is not thirsty after drinking', function(){
    vampire = new Vampire('Graf Orlok');

    vampire.drink();
    expect(vampire.isThirsty()).to.not.be.true;
  })
})
