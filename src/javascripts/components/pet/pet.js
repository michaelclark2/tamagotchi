import utils from '../../helpers/utils';
import './pet.scss';
import Progress from '../progress/progress';

class Pet {
  constructor(name) {
    this.name = name;
    this.strength = 100;
    this.energy = 100;
    this.fullness = 100;
    this.fun = 100;
    this.progress = new Progress(this);
  }

  get health() { return (this.strength + this.fullness + this.energy + this.fun) / 4; }

  eat(food) {
    // No overfeeding
    if (food.fullness + this.fullness > 100) {
      this.fullness = 100;
      this.fun -= 20;
      this.setBars();
      return;
    }
    this.fullness += food.fullness;
    this.strength += food.strength;
    this.energy += food.energy;
    this.fun += food.fun;
    this.setBars();
  }

  play(activity) {
    // Too much playing is boring
    if (activity.fun + this.fun > 100) {
      this.fun -= 20;
      this.energy -= activity.energy;
      this.setBars();
      return;
    }
    this.fun += activity.fun;
    this.energy -= activity.energy;
    this.setBars();
  }

  setBars() {
    // update the status bars
    document.getElementById('pet-fullness').style.width = `${this.fullness}%`;
    document.getElementById('pet-fun').style.width = `${this.fun}%`;
    this.progress.render();
  }

  render() {
    utils.printToDom('pet', '<div id="pet-img"></div>');
    this.setBars();
    this.el = document.getElementById('pet-img');

    let tick = 0;
    setInterval(() => {
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
