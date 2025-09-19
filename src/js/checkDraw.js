export function checkDraw(currentPlayer) {
    const cards = document.querySelectorAll(".card");
    let emptyCards = 0;
    cards.forEach((card) => {
        if (card.innerText === "" || card.innerText === null) {
            emptyCards += 1;
        }
    })

    if (emptyCards === 0) {
        alert("It's a draw!");
        return true;
    }
    return false;
}
