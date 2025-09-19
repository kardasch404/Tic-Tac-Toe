export function checkVertical(player) {
  const numberOfCard = parseInt(document.getElementById("numberOfCard").value);
  const numberOfWin = parseInt(document.getElementById("numberOfWin").value);

  // Check each column
  for (let col = 0; col < numberOfCard; col++) {
    // Check sliding windows in this column
    for (let startRow = 0; startRow <= numberOfCard - numberOfWin; startRow++) {
      let sum = 0;
      
      // Check window of numberOfWin consecutive positions
      for (let row = startRow; row < startRow + numberOfWin; row++) {
        const cardId = row * numberOfCard + col;
        const card = document.getElementById(cardId.toString());

        if (card) {
          const cardValue = card.innerText;
          if (cardValue === player) {
            sum += 1;
          } else if (cardValue === "" || cardValue === null) {
            sum += -1;
          } else {
            sum += 0;
          }
        }
      }
      
      if (sum === numberOfWin) {
        alert(player + " wins");
        return true;
      }
    }
  }
  return false;
}