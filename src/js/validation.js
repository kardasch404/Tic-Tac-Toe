function validateAndCreateBoard() {
    const numberOfCard = parseInt(document.getElementById("numberOfCard").value);
    const numberOfWin = parseInt(document.getElementById("numberOfWin").value);
    
    if (numberOfCard < 3) {
        alert("Number of cases must be sup at 3!");
        return;
    }
    
    if (numberOfWin < 3) {
        alert("Number of cases to win must be sup at 3!");
        return;
    }
    
    if (numberOfWin > numberOfCard) {
        alert("Number of cases to win " + numberOfWin + " cannot be < " + numberOfCard + "");
        return;
    }
    
    createBoard();
    play();
}
