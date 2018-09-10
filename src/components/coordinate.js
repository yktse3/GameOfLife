import LiveSquare from './square/liveSquare';
import DeadSquare from './square/deadSquare';

export default class Coordinate {
  constructor(x, y) {
    if (x < 1 || y < 1) {
      throw new Error(`{${x}, ${y}} coordinates provided is not valid.`);
    }
    this.x = x;
    this.y = y;
    this.square = null;
    this.neighbors = [];
  }

  click() {
    this.square = new LiveSquare();
  }

  // provided another Coordinate, check if it is a neighbor
  isNeighbor(coordinate) {
    if (
      (this.x === coordinate.x && this.y === coordinate.y)
      || Math.abs(coordinate.x - this.x) > 1
      || Math.abs(coordinate.y - this.y) > 1
    ) {
      return false;
    }

    return true;
  }

  addNeighbor(coordinate) {
    this.neighbors.push(coordinate);
  }
}
