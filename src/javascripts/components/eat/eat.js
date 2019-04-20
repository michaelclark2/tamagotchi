import './eat.scss';

const foods = [
  {
    id: 0,
    name: 'Donut',
    fullness: 10,
    energy: 5,
    fun: 10,
    strength: -5,
  },
  {
    id: 1,
    name: 'Pie',
    fullness: 12,
    energy: 3,
    fun: 15,
    strength: -10,
  },
  {
    id: 2,
    name: 'Salad',
    fullness: 10,
    energy: 10,
    fun: 5,
    strength: 0,
  },
  {
    id: 30,
    name: 'Rice',
    fullness: 15,
    energy: 10,
    fun: 5,
    strength: 5,
  },
];


class EatQuad {
  constructor(pet) {
    this.pet = pet;
    this.el = document.getElementById('eat');
  }

  printFood() {
    return foods.map(food => `
      <div class="food-btn">
        <h5 id="${food.id}food">${food.name}</h5>
      </div>`).join('');
  }

  domString() {
    return `
      <div class="fullness-bar"><div id="pet-fullness"></div></div>
      <div>
        <h1 id="eat-menu">Eat</h1></div><div class="buttons hide">
        ${this.printFood()}
      </div>
    `;
  }

  attachEvents() {
    this.el.addEventListener('click', (e) => {
      if (e.target.id === 'eat-menu') {
        e.target.parentNode.nextSibling.classList.remove('hide');
      }
    });
    [...document.getElementsByClassName('food-btn')].forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const food = foods.find(f => f.id === parseInt(e.target.id, 10));
        this.pet.eat(food);
        this.render();
      });
    });
  }

  render() {
    this.el.innerHTML = this.domString();
    document.getElementById('pet-fullness').style.width = `${this.pet.fullness}%`;
    this.attachEvents();
  }
}

export default EatQuad;
