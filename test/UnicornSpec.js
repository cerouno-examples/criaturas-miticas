const expect  = require('chai').expect;
const Unicorn = require('../lib/Unicorn.js');

describe('Unicorn', function(){
  xit('has a name', function() {
    unicorn = new Unicorn('José');

    expect(unicorn).to.have.property('name');
    expect(unicorn.name).to.equal('José');
  })

  xit('is white by default', function(){
    unicorn = new Unicorn('María');

    expect(unicorn).to.have.property('color');
    expect(unicorn.color).to.equal('blanco');
    expect(unicorn.isWhite()).to.be.true;
  })

  xit('does not have to be white', function(){
    unicorn = new Unicorn('Juan', 'morado');

    expect(unicorn.color).to.equal('morado');
    expect(unicorn.isWhite()).to.not.be.true;
  })

  xit('says sparkly stuff', function(){
    unicorn = new Unicorn('Juan', 'morado');

    expect(unicorn.say('¡Maravilloso!')).to.equal('**;* ¡Maravilloso! *;**');
    expect(unicorn.say('No me agradas.')).to.equal('**;* No me agradas. *;**');
  })
})
