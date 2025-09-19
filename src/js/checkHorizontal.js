export function checkHorizontal(player) {
  const gameConfig = JSON.parse(localStorage.getItem('aria'));
    const numberOfCard = gameConfig.numberOfCard;
    const numberOfWin = gameConfig.numberOfWin;


  for (let row = 0; row < numberOfCard; row++) {
    for (let startCol = 0; startCol <= numberOfCard - numberOfWin; startCol++) 
      { 
      let sum = 0;
      
      for (let col = startCol; col < startCol + numberOfWin; col++) {
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
