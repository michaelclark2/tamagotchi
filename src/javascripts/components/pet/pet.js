import utils from '../../helpers/utils';
import './pet.scss';

class Pet {
  constructor(name) {
    this.name = name;
    this.strength = 100;
    this.energy = 100;
    this.fullness = 30;
    this.fun = 100;
    this.ticker = null;
  }

  get health() { return (this.strength + this.fullness + this.energy + this.fun) / 4; }

  eat(food) {
    // No overfeeding
    if (food.fullness + this.fullness > 100) {
      this.fullness = 100;
      this.fun -= 20;
      return;
    }
    this.fullness += food.fullness;
    this.strength += food.strength;
    this.energy += food.energy;
    this.fun += food.fun;
  }

  render() {
    utils.printToDom('pet', '<div id="pet-img"></div>');

    this.el = document.getElementById('pet-img');
    const healthBar = document.getElementById('pet-health');

    let tick = 0;
    healthBar.style.width = `${this.health}%`;
    setInterval(() => {
      healthBar.style.width = `${this.health}%`;
      if (tick) {
        this.el.style.backgroundPosition = '0 -300px';
        tick -= 1;
      } else {
        this.el.style.backgroundPosition = '0 0px';
        tick += 1;
      }
      // this.fun -= 1;
      // this.strength -= 1;
      // this.fullness -= 1;
      // this.energy -= 1;
    }, 2000);
  }
}

export default Pet;
