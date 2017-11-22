const expect = require('chai').expect;
const Werewolf = require('../lib/Werewolf.js');

describe('Werewolf', function() {
  xit('has a name', function() {
    var werewolf = new Werewolf('David');

    expect(werewolf.name).to.equal('David');
  })

  xit('has a location', function() {
    var werewolf = new Werewolf('David');

    expect(werewolf.location).to.equal('David', 'London');
  })

  xit('is human by default', function() {
    var werewolf = new Werewolf('David');

    expect(werewolf.isHuman()).to.be.true;
  })

  xit('has a change method', function() {
    var werewolf = new Werewolf('David');

    expect(werewolf).to.respondTo('change');
  })

  xit('is not human when it changes', function() {
    var werewolf = new Werewolf('David');
    werewolf.change();
    expect(werewolf.isHuman()).to.be.false;
  })

  xit('is werewolf when it changes', function() {
    var werewolf = new Werewolf('David');
    werewolf.change();
    expect(werewolf.isWerewolf()).to.be.true;
  })

  xit('is human when it changes again', function() {
    var werewolf = new Werewolf('David');

    expect(werewolf.isHuman()).to.be.true;
    werewolf.change();
    expect(werewolf.isHuman()).to.be.false;
    werewolf.change();
    expect(werewolf.isHuman()).to.be.true;
  })

  xit('is werewolf when it changes again after changing to human', function() {
    var werewolf = new Werewolf('David');

    werewolf.change();
    expect(werewolf.isWerewolf()).to.be.true;
    werewolf.change();
    expect(werewolf.isWerewolf()).to.be.false;
    werewolf.change();
    expect(werewolf.isWerewolf()).to.be.true;
  })
})
