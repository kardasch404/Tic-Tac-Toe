function createBoard() {
  const board = document.querySelector(".board");
  const numberOfCardInput = document.getElementById("numberOfCard");
  
  let number = numberOfCardInput.value;
  if (!number || number < 3) {
    alert("Please enter a number");
    return;
  }

  board.innerHTML = "";
  
  let sumOfNumber = number * number;
  let id = 0 ; 
  for (let i = 0; i < sumOfNumber; i++) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerText = "";
    card.id = id ; 
    id++ ;
    board.appendChild(card);
  }

  board.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${number}, 1fr)`;
  board.style.gap = "2px";
  board.style.width = "500px";
  board.style.height = "500px";
  board.style.display = "grid";
}