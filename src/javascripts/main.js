import '../styles/index.scss';
import Pet from './components/pet/pet';
import Progress from './components/progress/progress';
import EatQuad from './components/eat/eat';

const init = () => {
  const pet = new Pet('Jigglypuff');
  const progress = new Progress(pet);
  const eatQuad = new EatQuad(pet);
  eatQuad.render();
  progress.render();
  pet.render();
};

init();
