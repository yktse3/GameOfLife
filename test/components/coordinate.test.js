import Coordinate from '../../src/components/coordinate';

const assert = require('assert');

describe('Coordinate', function () {
  beforeEach(() => {
    this.coordinate = new Coordinate(3, 3);
  });

  it('should throw exception when passing invalid coordinates', () => {
    assert.throws(() => {
      new Coordinate(0, 0);
    }, Error, '{0, 0} coordinates provided is not valid.');
  });

  it('should check if given coordinate is neighbor', () => {
    assert.equal(this.coordinate.isNeighbor(new Coordinate(2, 2)), true);
    assert.equal(this.coordinate.isNeighbor(new Coordinate(2, 3)), true);
    assert.equal(this.coordinate.isNeighbor(new Coordinate(2, 4)), true);
    assert.equal(this.coordinate.isNeighbor(new Coordinate(3, 2)), true);
    assert.equal(this.coordinate.isNeighbor(new Coordinate(3, 4)), true);
    assert.equal(this.coordinate.isNeighbor(new Coordinate(4, 2)), true);
    assert.equal(this.coordinate.isNeighbor(new Coordinate(4, 3)), true);
    assert.equal(this.coordinate.isNeighbor(new Coordinate(4, 4)), true);

    assert.equal(this.coordinate.isNeighbor(new Coordinate(1, 1)), false);
    assert.equal(this.coordinate.isNeighbor(new Coordinate(5, 5)), false);
    assert.equal(this.coordinate.isNeighbor(new Coordinate(5, 1)), false);
    assert.equal(this.coordinate.isNeighbor(new Coordinate(1, 5)), false);
  });

  it('should add neighbor', () => {
    this.coordinate.addNeighbor(new Coordinate(4, 3));
    assert.equal(this.coordinate.neighborCount(), 1);
  });
});
