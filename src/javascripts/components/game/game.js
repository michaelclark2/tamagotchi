import Pet from '../pet/pet';
import EatQuad from '../eat/eat';
import PlayQuad from '../play/play';
import SleepQuad from '../sleep/sleep';

class Game {
  constructor(name) {
    this.pet = new Pet(name);
    this.eatQuad = new EatQuad();
    this.playQuad = new PlayQuad();
    this.sleepQuad = new SleepQuad();
  }

  render() {
    this.eatQuad.render();
    this.playQuad.render();
    this.sleepQuad.render();
    this.pet.render();
  }

  start() {
    this.render();
    this.eatQuad.attachEvents(this.pet);
    this.playQuad.attachEvents(this.pet);
    this.sleepQuad.attachEvents(this.pet);
  }
}

export default Game;
