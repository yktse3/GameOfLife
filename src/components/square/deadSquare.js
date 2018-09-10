import AbstractSquare from './abstractSquare';

export default class DeadSquare extends AbstractSquare {
  /* eslint class-methods-use-this: 0 */
  changeState(numberOfNeighbors) {
    return numberOfNeighbors === 3;
  }

  isAlive() {
    return false;
  }
}
