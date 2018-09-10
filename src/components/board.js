import Coordinate from './coordinate';

export default class Board {
  constructor(numberOfcolumn = 0, numberOfrow = 0) {
    if (numberOfcolumn <= 0 || numberOfrow <= 0) {
      throw new Error('Board must be at least 1x1');
    }
    this.create(numberOfcolumn, numberOfrow);
  }

  create(numberOfcolumn, numberOfrow) {
    this.buildCoordinate(numberOfcolumn, numberOfrow);
    this.defineNeighbors();
  }

  buildCoordinate(numberOfcolumn, numberOfrow) {
    this.coordinates = [];
    for (let i = 0; i < numberOfcolumn; i += 1) {
      for (let j = 0; j < numberOfrow; j += 1) {
        this.coordinates.push(new Coordinate(i, j));
      }
    }
  }

  defineNeighbors() {
    this.coordinates.map((coordinate) => {
      this.coordinates.map((coordinate2) => {
        if (coordinate.isNeighbor(coordinate2)) {
          coordinate.addNeighbor(coordinate2);
        }
        return true;
      });
      return true;
    });
  }
}
