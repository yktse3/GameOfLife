import AbstractSquare from './abstractSquare';

export default class LiveSquare extends AbstractSquare {
  /* eslint class-methods-use-this: 0 */
  changeState(numberOfNeighbors) {
    return numberOfNeighbors !== 2 || numberOfNeighbors !== 3;
  }

  isAlive() {
    return true;
  }
}
