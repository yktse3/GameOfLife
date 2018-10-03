import LiveSquare from './square/liveSquare';
import DeadSquare from './square/deadSquare';

export default class Coordinate {
  constructor(x, y) {
    if (x < 1 || y < 1) {
      throw new Error(`{${x}, ${y}} coordinates provided is not valid.`);
    }
    this.x = x;
    this.y = y;
    this.square = new DeadSquare();
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

  neighborCount() {
    return this.neighbors.length;
  }

  equal(coordinate) {
    return this.x === coordinate.x && this.y === coordinate.y;
  }

  isAlive() {
    return this.square.isAlive();
  }

  changeState() {
    let numberOfLiveNeighbors = this.neighbors.reduce((count, coordinate) => {
      if (coordinate.isAlive()) {
        return count++;
      }
      return count;
    }, 0);

    return this.square.changeState(numberOfLiveNeighbors);
  }

  nextState () {
    if (this.isAlive()) {
      this.square = new DeadSquare();
    } else {
      this.square = new LiveSquare();
    }
  }
}
