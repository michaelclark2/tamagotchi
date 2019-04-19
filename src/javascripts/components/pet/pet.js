import utils from '../../helpers/utils';
import './pet.scss';

class Pet {
  constructor(name) {
    this.name = name;
    this.strength = 100;
    this.energy = 100;
    this.fullness = 100;
    this.fun = 100;
  }

  get health() { return (this.strength + this.fullness + this.energy + this.fun) / 4; }

  render() {
    utils.printToDom('pet', '<div id="pet-img"></div>');

    this.el = document.getElementById('pet-img');
    const healthBar = document.getElementById('pet-health');
    healthBar.style.width = `${this.health}%`;

    let tick = 0;

    setInterval(() => {
      if (tick) {
        this.el.style.backgroundPosition = '0 -300px';
        tick -= 1;
      } else {
        this.el.style.backgroundPosition = '0 0px';
        tick += 1;
      }
    }, 2000);
  }
}

export default Pet;
