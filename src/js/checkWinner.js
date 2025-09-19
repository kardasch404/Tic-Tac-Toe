import { checkVertical } from "./checkVertical.js";
import { checkHorizontal } from "./checkHorizontal.js";
import { checkMainDiagonal } from "./checkMainDiagonal.js";
import { checkAntiDiagonal } from "./checkAntiDiagonal.js";
import { checkDraw } from "./checkDraw.js";

    export function checkWinner(player) {
    return checkHorizontal(player) ||
    checkVertical(player) || 
    checkMainDiagonal(player) ||
    checkAntiDiagonal(player) ||
    checkDraw(player);
    
}

window.checkWinner = checkWinner;