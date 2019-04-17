import '../styles/index.scss';
import Pet from './components/pet/pet';

const init = () => {
  const pet = new Pet('Jigglypuff');
  console.error(pet);
  pet.eat(30);
  console.error(pet.health);
};

init();
