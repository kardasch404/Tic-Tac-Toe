export function createXandOcard() {
  try {
    const aria = JSON.parse(localStorage.getItem("aria"));
    const numberOfCard = aria.numberOfCard;
    const player1Symbol = aria.player1Symbol;
    const player2Symbol = player1Symbol === "X" ? "O" : "X";

    const player1Container = document.getElementById("player1");
    const player2Container = document.getElementById("player2");

    player1Container.innerHTML = "";
    player2Container.innerHTML = "";

    const sumOfNumber = numberOfCard * numberOfCard;
    let player1Cards, player2Cards;

    if (sumOfNumber % 2 === 0) {
      player1Cards = sumOfNumber / 2;
      player2Cards = sumOfNumber / 2;
    } else {
      player1Cards = Math.ceil(sumOfNumber / 2);
      player2Cards = Math.floor(sumOfNumber / 2);
    }

    for (let i = 0; i < player1Cards; i++) {
      const card = document.createElement("div");
      card.classList.add("player-card");
      card.innerText = player1Symbol;
      card.style.color = "red";
      player1Container.appendChild(card);
    }
    for (let i = 0; i < player2Cards; i++) {
      const card = document.createElement("div");
      card.classList.add("player-card");
      card.innerText = player2Symbol;
      card.style.color = "blue";
      player2Container.appendChild(card);
    }
  } catch (error) {
    console.error("error creating player cards", error);
  }
}
