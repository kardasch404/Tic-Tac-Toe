import { createXandOcard } from "./createXandOcard.js";

export function createBoard(numberOfCard) {
  const board = document.querySelector(".board");

  board.innerHTML = "";
  
  let sumOfNumber = numberOfCard * numberOfCard;
  let id = 0 ; 
  for (let i = 0; i < sumOfNumber; i++) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerText = "";
    card.id = id ; 
    id++ ;
    board.appendChild(card);
  }
  
  createXandOcard();

  board.style.gridTemplateColumns = `repeat(${numberOfCard}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${numberOfCard}, 1fr)`;
  board.style.gap = "2px";
  board.style.width = "500px";
  board.style.height = "500px";
  board.style.display = "grid";
}