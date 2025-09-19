import { createBoard } from "./createBoard.js";
import { play } from "./play.js";

function loadingBord ()
{
  try {
    const aria = JSON.parse(localStorage.getItem("aria"));
    const numberOfCard = aria.numberOfCard;
    const numberOfWin = aria.numberOfWin;
    const player1Symbol = aria.player1Symbol;
    
    const gameConfig = {
      numberOfCard: numberOfCard,
      numberOfWin: numberOfWin,
      player1Symbol: player1Symbol
    };
    
    window.gameConfig = gameConfig;

    createBoard(numberOfCard);
    play();
  } catch (err) {
    alert("error starting game");
    window.location.href = "./index.html";
  }

}

window.loadingBord = loadingBord;
window.addEventListener('load', () => {
    if (typeof loadingBord === 'function') {
      loadingBord();
    }
  });
  