import { loadScores } from './score.js';
import { loadPlayerSymbols, switchTurn } from './switchTurn.js';

export function RestartGame() {
    document.querySelectorAll('.card').forEach(card => card.textContent = '');
    switchTurn(1);
    loadScores();
    loadPlayerSymbols();
}