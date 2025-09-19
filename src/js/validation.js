function validateAndCreateBoard() {
    const numberOfCard = parseInt(document.getElementById("numberOfCard").value);
    const numberOfWin = parseInt(document.getElementById("numberOfWin").value);
    const player1Symbol = document.getElementById("player1").value;
    const aria = {'numberOfCard': numberOfCard, 'numberOfWin': numberOfWin, 'player1Symbol': player1Symbol};
    
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
    
    localStorage.setItem('aria', JSON.stringify(aria));
    window.location.href = "./ariagame.html";
}
