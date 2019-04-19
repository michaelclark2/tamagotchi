import utils from '../../helpers/utils';
import './progress.scss';

class Progress {
  constructor(pet) {
    this.pet = pet;
  }

  render() {
    const domString = `
      <h2 class="pet-name">${this.pet.name}</h2>
      <div class="pet-health-bar">
        <div id="pet-health"></div>
      </div>
    `;
    utils.printToDom('progress', domString);
  }
}

export default Progress;
