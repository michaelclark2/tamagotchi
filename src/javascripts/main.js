import '../styles/index.scss';
import Game from './components/game/game';

const init = () => {
  // const pet = new Pet('Jigglypuff');
  // const progress = new Progress(pet);
  // const eatQuad = new EatQuad(pet);
  // eatQuad.render();
  // progress.render();
  // pet.render();
  const game = new Game('Tingle');
  game.start();
};

init();
