import Pet from '../pet/pet';
import EatQuad from '../eat/eat';

class Game {
  constructor(name) {
    this.pet = new Pet(name);
    this.eatQuad = new EatQuad();
  }

  render() {
    this.eatQuad.render();
    this.pet.render();
  }

  start() {
    this.render();
    this.eatQuad.attachEvents(this.pet);
  }
}

export default Game;
