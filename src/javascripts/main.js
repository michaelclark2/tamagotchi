import '../styles/index.scss';
import Game from './components/game/game';

const init = () => {
  const game = new Game('Chauncy');
  game.start();
};

init();
