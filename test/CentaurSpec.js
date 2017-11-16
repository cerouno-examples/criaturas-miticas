const expect  = require('chai').expect;
const Centaur = require('../lib/Centaur.js');

describe('Centaur', function(){
  xit('has a name', function() {
    var centaur = new Centaur('George');

    expect(centaur).to.have.property('name');
    expect(centaur.name).to.equal('George');
  })

  xit('has a breed', function() {
    var centaur = new Centaur('George', 'percherón');

    expect(centaur).to.have.property('breed');
    expect(centaur.breed).to.equal('percherón');
  })

  xit('can shoot an arrow', function() {
    var centaur = new Centaur('George', 'percherón');

    expect(centaur.shoot()).to.equal('¡Boing!');
  })

  xit('makes sound when running', function() {
    var centaur = new Centaur('George', 'percherón');

    expect(centaur.run()).to.equal('¡Clop clop clop!');
  })

  xit('is in good mood when it is created', function() {
    var centaur = new Centaur('George', 'percherón');

    expect(centaur.isCranky()).to.be.false;
  })

  xit('is standing up when it is created', function() {
    var centaur = new Centaur('George', 'percherón');

    expect(centaur.isStanding()).to.be.true;
  })

  xit('gets cranky when running or shooting a bow three times', function() {
    var centaur = new Centaur('George', 'percherón');

    expect(centaur.isCranky()).to.be.false;
    centaur.shoot();
    centaur.run();
    centaur.shoot();
    expect(centaur.isCranky()).to.be.true;
  })

  xit('does not shoot a bow when it gets cranky', function() {
    var centaur = new Centaur('George', 'percherón');

    expect(centaur.isCranky()).to.be.false;
    centaur.shoot();
    centaur.shoot();
    centaur.shoot();
    expect(centaur.isCranky()).to.be.true;
    expect(centaur.shoot()).to.equal('¡NO!');
  })

  xit('does not run when it gets cranky', function() {
    var centaur = new Centaur('George', 'percherón');

    expect(centaur.isCranky()).to.be.false;
    centaur.shoot();
    centaur.shoot();
    centaur.shoot();
    expect(centaur.isCranky()).to.be.true;
    expect(centaur.run()).to.equal('¡NO!');
  })

  xit('can sleep', function() {
    var centaur = new Centaur('George', 'percherón');

    expect(centaur).to.respondTo('sleep');
  })

  xit('does not sleep when standing', function() {
    var centaur = new Centaur('George', 'percherón');

    expect(centaur.isStanding()).to.be.true;
    expect(centaur.sleep()).to.equal('¡NO!');
  })

  xit('can lay down', function() {
    var centaur = new Centaur('George', 'percherón');

    expect(centaur).to.respondTo('layDown');
  })

  xit('is not standing after laying down', function() {
    var centaur = new Centaur('George', 'percherón');

    expect(centaur.isStanding()).to.be.true;
    centaur.layDown();
    expect(centaur.isStanding()).to.be.false;
  })

  xit('can sleep when laying down', function() {
    var centaur = new Centaur('George', 'percherón');

    centaur.layDown();
    expect(centaur.sleep()).to.not.equal('¡NO!');
  })

  xit('cannot shoot a bow when laying down', function() {
    var centaur = new Centaur('George', 'percherón');

    centaur.layDown();
    expect(centaur.shoot()).to.equal('¡NO!');
  })

  xit('cannot run when laying down', function() {
    var centaur = new Centaur('George', 'percherón');

    centaur.layDown();
    expect(centaur.run()).to.equal('¡NO!');
  })

  xit('can stand up', function() {
    var centaur = new Centaur('George', 'percherón');

    centaur.layDown();
    centaur.standUp();
    expect(centaur.isStanding()).to.be.true;
  })

  xit('is no longer cranky after it sleeps', function() {
    var centaur = new Centaur('George', 'percherón');

    centaur.shoot();
    centaur.run();
    centaur.shoot();

    expect(centaur.isCranky()).to.be.true;

    centaur.layDown();
    centaur.sleep();

    expect(centaur.isCranky()).to.be.false;

    centaur.standUp();

    expect(centaur.shoot()).to.equal('¡Boing!');
    expect(centaur.run()).to.equal('¡Clop clop clop!');
  })
})
