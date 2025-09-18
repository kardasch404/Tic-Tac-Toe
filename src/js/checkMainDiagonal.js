export function checkMainDiagonal(player) {
  const numberOfCard = parseInt(document.getElementById("numberOfCard").value);
  let sum = 0;
  for (let i = 0; i < numberOfCard; i++) {
    const cardId = i * numberOfCard + i; // 0*4+0=0, 1*4+1=5, 2*4+2=10, 3*4+3=15
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
