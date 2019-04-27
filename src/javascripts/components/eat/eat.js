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
  constructor() {
    this.el = document.getElementById('eat');
  }

  printFood() {
    return foods.map(food => `
        <button class="food-btn" id="${food.id}food">${food.name}</button>
      `).join('');
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

  attachEvents(pet) {
    this.el.addEventListener('click', (e) => {
      if (e.target.id === 'eat-menu') {
        e.target.parentNode.nextSibling.classList.remove('hide');
      }
    });
    [...document.getElementsByClassName('food-btn')].forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const food = foods.find(f => f.id === parseInt(e.target.id, 10));
        pet.eat(food);
        pet.setBars();
      });
    });
  }

  render() {
    this.el.innerHTML = this.domString();
  }
}

export default EatQuad;
