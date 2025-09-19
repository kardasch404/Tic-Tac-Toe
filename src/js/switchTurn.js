export function switchTurn(currentPlayer) {
    const player1Status = document.getElementById("player1-status");
    const player2Status = document.getElementById("player2-status");
    if (currentPlayer === 1) {
        player1Status.classList.add("active");
        player2Status.classList.remove("active");
        player1Status.querySelector(".status-text").textContent = "YOUR TURN";
        player2Status.querySelector(".status-text").textContent = "WAITING";
    } else {
        player2Status.classList.add("active");
        player1Status.classList.remove("active");
        player2Status.querySelector(".status-text").textContent = "YOUR TURN";
        player1Status.querySelector(".status-text").textContent = "WAITING";
    }
}

export function loadPlayerSymbols() {
    const aria = JSON.parse(localStorage.getItem("aria")) || { player1Symbol: "X" };
    const player1Symbol = aria.player1Symbol;
    const player2Symbol = player1Symbol === "X" ? "O" : "X";
    document.getElementById("player1-symbol").textContent = player1Symbol;
    document.getElementById("player2-symbol").textContent = player2Symbol;
}