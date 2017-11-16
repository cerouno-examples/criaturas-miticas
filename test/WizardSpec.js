const expect = require('chai').expect;
const Wizard = require('../lib/Wizard.js');

describe('Wizard', function(){
  xit('has a name', function() {
    var wizard = new Wizard('Eric');

    expect(wizard).to.have.property('name');
    expect(wizard.name).to.equal('Eric');
  })

  xit('can have a different name', function() {
    var wizard = new Wizard('Alex');

    expect(wizard.name).to.equal('Alex');
  })

  xit('is bearded by default', function() {
    var wizard = new Wizard('Ben');

    expect(wizard.isBearded()).to.be.true;
  })

  xit('is not always bearded', function() {
    var wizard = new Wizard('Valerie', bearded = false);

    expect(wizard.isBearded()).to.not.be.true;
  })

  xit('has powers', function() {
    var wizard = new Wizard('Sarah', bearded = false);

    expect(wizard.incantation('mover la mesa')).to.equal('abracadabra mover la mesa');
  })

  xit('has more powers', function() {
    var wizard = new Wizard('Rob', bearded = false);

    expect(wizard.incantation('abrir el refri')).to.equal('abracadabra abrir el refri');
  })
})
