import '../styles/index.scss';
import Pet from './components/pet/pet';
import Progress from './components/progress/progress';

const init = () => {
  const pet = new Pet('Jigglypuff');
  const progress = new Progress(pet);
  progress.render();
  pet.render();
};

init();
