const expect = require('chai').expect;
const Medusa = require('../lib/Medusa.js');

describe('Medusa', function(){
  xit('has a name', function() {
    var medusa = new Medusa('Cassiopeia');

    expect(medusa).to.have.property('name');
    expect(medusa.name).to.equal('Cassiopeia');
  })

  xit('can stare', function() {
    var medusa = new Medusa('Cassiopeia');

    expect(medusa).to.respondTo('stare');
  })

  xit('has statues', function() {
    var medusa = new Medusa('Cassiopeia');

    expect(medusa).to.have.property('statues');
    expect(medusa.statues).to.be.an('array');
  })

  xit('does not have statues when created', function() {
    var medusa = new Medusa('Cassiopeia');

    expect(medusa.statues).to.be.empty;
  })

  xit('has a statue after staring a person', function() {
    var medusa = new Medusa('Cassiopeia');
    var victim = new Person('Perseus');

    medusa.stare(victim);
    expect(medusa.statues.length).to.equal(1);
    expect(medusa.statues[0].name).to.equal('Perseus');
  })

  xit('has a it turns person into stone', function() {
    var medusa = new Medusa('Cassiopeia');
    var victim = new Person('Perseus');

    expect(victim.isStoned()).to.be.false;
    medusa.stare(victim);
    expect(victim.isStoned()).to.be.true;
  })
})
