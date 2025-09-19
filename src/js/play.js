import { checkDraw } from "./checkDraw.js";
import { checkWinner } from "./checkWinner.js";
import { updateScore } from "./score.js";
import { switchTurn } from "./switchTurn.js";

export function play() {
  try {

    const aria = JSON.parse(localStorage.getItem("aria"));
    const player1Symbol = aria.player1Symbol;
    const player2Symbol = player1Symbol === "X" ? "O" : "X";
    const players = [player1Symbol, player2Symbol];
    const cards = document.querySelectorAll(".card");
    let currentPlayer = players[0];
    
    cards.forEach((card) => {
        card.addEventListener("click", () => {
            if (card.innerText === ""){
                card.innerText = currentPlayer;
                card.style.color = currentPlayer === players[0] ? 'red' : 'blue';
                
  
                if (checkWinner(currentPlayer)) {
                    const winner = currentPlayer === players[0] ? 'player1' : 'player2';
                    updateScore(winner);
                    return; 
                    
                }
                
                if (checkDraw(currentPlayer)) {
                    return;
                }
                
                currentPlayer = currentPlayer === players[0] ? players[1] : players[0];
                const playerNumber = currentPlayer === players[0] ? 1 : 2;
                switchTurn(playerNumber);
            }
        })
    })
  } catch (e) {
    console.log("error", e);
  }
}

window.play = play;
  
