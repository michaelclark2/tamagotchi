import './play.scss';

const activities = [
  {
    id: 0,
    name: 'Tickle',
    fun: 20,
    energy: 10,
  },
  {
    id: 1,
    name: 'Chess',
    fun: 10,
    energy: 5,
  },
  {
    id: 2,
    name: 'Sport Ball',
    fun: 30,
    energy: 20,
  },
];


class PlayQuad {
  constructor() {
    this.el = document.getElementById('play');
  }

  printActivities() {
    return activities.map(act => `
      <button class="play-btn" id="${act.id}play">${act.name}</button>
    `).join('');
  }

  domString() {
    return `
      <div class="fun-bar"><div id="pet-fun"></div></div>
      <div>
        <h1 id="play-menu">Play</h1></div><div class="buttons hide">
        ${this.printActivities()}
      </div>
    `;
  }

  attachEvents(pet) {
    this.el.addEventListener('click', (e) => {
      if (e.target.id === 'play-menu') {
        e.target.parentNode.nextSibling.classList.remove('hide');
      }
    });

    [...document.getElementsByClassName('play-btn')].forEach((btn) => {
      btn.addEventListener('click', (e) => {
        document.querySelector('#play .buttons').classList.add('hide');
        const activity = activities.find(a => a.id === parseInt(e.target.id, 10));
        pet.play(activity);
        pet.setBars();
      });
    });
  }

  render() {
    this.el.innerHTML = this.domString();
  }
}

export default PlayQuad;
