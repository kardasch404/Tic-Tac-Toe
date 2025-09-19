export function checkMainDiagonal(player) {
  const gameConfig = JSON.parse(localStorage.getItem('aria'));
  const numberOfCard = gameConfig.numberOfCard;
  const numberOfWin = gameConfig.numberOfWin;

  for (let startRow = 0; startRow <= numberOfCard - numberOfWin; startRow++) {
    for (let startCol = 0; startCol <= numberOfCard - numberOfWin; startCol++) {
      let sum = 0;
      
      for (let i = 0; i < numberOfWin; i++) {
        const cardId = (startRow + i) * numberOfCard + (startCol + i);
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

