export function checkHorizontal(player) {
  const numberOfCard = parseInt(document.getElementById("numberOfCard").value);

//   const cards = document.querySelectorAll(".card");

  for (let row = 0; row < numberOfCard; row++) {
    let sum = 0;

    for (let col = 0; col < numberOfCard; col++) {
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
    if (sum === numberOfCard) {
      alert(player + "wins");
      return true;
    }
  }
  return false;
}
