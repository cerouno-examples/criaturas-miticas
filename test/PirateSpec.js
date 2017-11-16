const expect = require('chai').expect;
const Pirate = require('../lib/Pirate.js');

describe('Pirate', function(){
  xit('has a name', function() {
    var pirate = new Pirate('Jack');

    expect(pirate).to.have.property('name');
    expect(pirate.name).to.equal('Jack');
  })

  xit('has a different name', function() {
    var pirate = new Pirate('Blackbeard');

    expect(pirate.name).to.equal('Blackbeard');
  })

  xit('has a job by default', function() {
    var pirate = new Pirate('Jack');

    expect(pirate).to.have.property('job');
    expect(pirate.job).to.equal('malandro');
  })

  xit('has a different job', function() {
    var pirate = new Pirate('Jack', 'cocinero');

    expect(pirate.job).to.equal('cocinero');
  })

  xit('is not cursed by default', function() {
    var pirate = new Pirate('Jack');

    expect(pirate.isCursed()).to.not.be.true;
  })

  xit('becomes cursed after commiting enough terrible acts', function() {
    var pirate = new Pirate('Jack');

    expect(pirate.isCursed()).to.not.be.true;

    pirate.commitTerribleAct();
    expect(pirate.isCursed()).to.not.be.true;

    pirate.commitTerribleAct();
    expect(pirate.isCursed()).to.not.be.true;

    pirate.commitTerribleAct();
    expect(pirate.isCursed()).to.be.true;
  })
})
