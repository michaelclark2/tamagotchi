import Pet from '../pet/pet';
import EatQuad from '../eat/eat';
import PlayQuad from '../play/play';

class Game {
  constructor(name) {
    this.pet = new Pet(name);
    this.eatQuad = new EatQuad();
    this.playQuad = new PlayQuad();
  }

  render() {
    this.eatQuad.render();
    this.playQuad.render();
    this.pet.render();
  }

  start() {
    this.render();
    this.eatQuad.attachEvents(this.pet);
    this.playQuad.attachEvents(this.pet);
  }
}

export default Game;
