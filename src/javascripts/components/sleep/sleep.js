import './sleep.scss';

class SleepQuad {
  constructor() {
    this.el = document.getElementById('sleep');
  }

  printSleep() {
    return Array(5).fill(0).map((x, i) => `
      <button class="sleep-btn" id="${i + 1}sleep">Sleep for ${i + 1} minutes</button>
    `).join('');
  }

  domString() {
    return `
    <div>
      <div class="buttons hide">
        ${this.printSleep()}
      </div>
      <h1 id="sleep-menu">Sleep</h1>
    </div>
    <div class="energy-bar"><div id="pet-energy"></div></div>
    `;
  }

  attachEvents(pet) {
    this.el.addEventListener('click', (e) => {
      if (e.target.id === 'sleep-menu') {
        e.target.parentNode.querySelector('.buttons').classList.remove('hide');
      }
    });

    [...document.getElementsByClassName('sleep-btn')].forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        pet.sleep(parseInt(e.target.id, 10));
      });
    });
  }

  render() {
    this.el.innerHTML = this.domString();
  }
}

export default SleepQuad;
