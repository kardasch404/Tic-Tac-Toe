export function checkAntiDiagonal(player) {
    const numberOfCard = parseInt(document.getElementById("numberOfCard").value);
    let sum = 0;
  
    for (let i = 0; i < numberOfCard; i++) {
      const cardId = i * numberOfCard + (numberOfCard - 1 - i);
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
  
    if (sum === numberOfCard) {
      alert(player + " wins");
      return true;
    }
    return false;
  }
  