export function updateScore(winner) {
    const scores = JSON.parse(localStorage.getItem("gameScores")) || { player1: 0, player2: 0 };
    scores[winner]++;
    localStorage.setItem("gameScores", JSON.stringify(scores));
    document.getElementById("player1-score").textContent = scores.player1;
    document.getElementById("player2-score").textContent = scores.player2;
}

export function loadScores() {
    const scores = JSON.parse(localStorage.getItem("gameScores")) || { player1: 0, player2: 0 };
    document.getElementById("player1-score").textContent = scores.player1;
    document.getElementById("player2-score").textContent = scores.player2;
}