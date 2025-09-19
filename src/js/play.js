import { checkDraw } from "./checkDraw.js";
import { checkWinner } from "./checkWinner.js";

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
                    return; 
                    
                }
                
                if (checkDraw(currentPlayer)) {
                    return;
                }
                
                currentPlayer = currentPlayer === players[0] ? players[1] : players[0]; 
            }
        })
    })
  } catch (e) {
    console.log("error", e);
  }
}

window.play = play;
  
