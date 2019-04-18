import '../styles/index.scss';
import Pet from './components/pet/pet';

const init = () => {
  const pet = new Pet('Jigglypuff');
  pet.render();
};

init();
