
class Pet {
  constructor(name) {
    this.name = name;
    this.strength = 100;
    this.energy = 100;
    this.fullness = 100;
    this.fun = 100;
  }

  get health() { return (this.strength + this.fullness + this.energy + this.fun) / 4; }
}

export default Pet;
