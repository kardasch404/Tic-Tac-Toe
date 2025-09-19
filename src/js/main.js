import { loadScores } from './score.js';
import { loadPlayerSymbols, switchTurn } from './switchTurn.js';
import { RestartGame } from './RestartGame.js';
import { createBoard } from './createBoard.js';
import { play } from './play.js';

window.RestartGame = RestartGame;

function loadingBord() {
    try {
        const aria = JSON.parse(localStorage.getItem("aria"));
        const numberOfCard = aria.numberOfCard;
        const numberOfWin = aria.numberOfWin;
        const player1Symbol = aria.player1Symbol;
        
        window.gameConfig = {
            numberOfCard: numberOfCard,
            numberOfWin: numberOfWin,
            player1Symbol: player1Symbol
        };

        createBoard(numberOfCard);
        play();
    } catch (err) {
        alert("error starting game");
        window.location.href = "./index.html";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    loadingBord();
    loadScores();
    loadPlayerSymbols();
    switchTurn(1);
});