# ARIA GAME - Tic-Tac-Toe Dynamique

Un jeu Tic-Tac-Toe moderne et configurable développé avec JavaScript, HTML et CSS natifs.

**Démo en ligne**: [ARIA GAME](https://tic-tac-toe-fawn-three-98.vercel.app)

## Fonctionnalités

- **Grille dynamique**: Configurez la taille de la grille (3x3, 4x4, 5x5, etc.)
- **Conditions de victoire personnalisables**: Définissez le nombre de cases alignées pour gagner
- **Interface moderne**: Design responsive avec gradients et animations
- **Architecture modulaire**: Code JavaScript organisé en modules ES6
- **Sauvegarde locale**: Configuration et scores sauvegardés dans localStorage

## Structure du Projet

```
ARIA-GAME/
├── src/
│   ├── css/
│   │   ├── style.css          
│   │   ├── board.css          
│   │   ├── card.css           
│   │   ├── button.css         
│   │   └── player-card.css    
│   └── js/
│       ├── validation.js      
│       ├── loadingBord.js     
│       ├── createBoard.js     
│       ├── play.js            
│       ├── checkWinner.js     
│       ├── checkHorizontal.js 
│       ├── checkVertical.js   
│       ├── checkMainDiagonal.js 
│       ├── checkAntiDiagonal.js 
│       ├── checkDraw.js       
│       ├── switchTurn.js      
│       ├── score.js           
│       └── RestartGame.js     
├── index.html                 
├── ariagame.html             
└── README.md
```

## Comment Jouer

1. **Configuration**: Choisissez la taille de la grille et le nombre de cases à aligner
2. **Symbole**: Sélectionnez votre symbole (X ou O)
3. **Jeu**: Cliquez sur les cases pour placer votre symbole
4. **Victoire**: Alignez le nombre requis de symboles horizontalement, verticalement ou en diagonale

## Algorithme de Victoire

Le système utilise un algorithme de scoring unique:

### Système de Points
- **Symbole du joueur**: +1 point
- **Symbole adverse**: 0 point  
- **Case vide**: -1 point

### Vérifications

#### 1. Horizontale (`checkHorizontal`)
```
Grille 4x4:  1  2  3  4
             5  6  7  8
             9 10 11 12
            13 14 15 16

Relations: +1 ou -1 entre cases adjacentes
```

#### 2. Verticale (`checkVertical`)
```
Colonnes:  1  5  9 13
           2  6 10 14
           3  7 11 15
           4  8 12 16

Relations: +numberOfCard ou -numberOfCard
```

#### 3. Diagonale Principale (`checkMainDiagonal`)
```
Diagonale: 1 → 6 → 11 → 16

Relations: +(numberOfCard + 1) ou -(numberOfCard + 1)
```

#### 4. Diagonale Inverse (`checkAntiDiagonal`)
```
Diagonale: 4 → 7 → 10 → 13

Relations: +(numberOfCard - 1) ou -(numberOfCard - 1)
```

### Condition de Victoire
```javascript
if (sum === numberOfWin) {
    alert(player + " wins");
    return true;
}
```

## Gestion des Données

### Configuration Locale
```javascript
const gameConfig = {
    numberOfCard: 4,        
    numberOfWin: 4,         
    player1Symbol: "X"      
};
localStorage.setItem('aria', JSON.stringify(gameConfig));
```

### Fonctions de Score
- `updateScore()`: 
- `loadScores()`: 

## Fonctions Principales

### `validateAndCreateBoard()`
Valide la configuration et lance le jeu:
- Vérifie que numberOfCard ≥ 3
- Vérifie que numberOfWin ≥ 3
- Vérifie que numberOfWin ≤ numberOfCard
- Sauvegarde la configuration
- Redirige vers le jeu

### `checkWinner(player)`
Module principal qui vérifie toutes les conditions:
```javascript
export function checkWinner(player) {
    return checkHorizontal(player) ||
           checkVertical(player) || 
           checkMainDiagonal(player) ||
           checkAntiDiagonal(player) ||
           checkDraw(player);
}
```

### `switchTurn()`
Alterne entre les joueurs X et O


## Installation

1. Clonez le repository
```bash
git clone https://github.com/kardasch404/Tic-Tac-Toe.git
```
2. Ouvrez `index.html` dans votre navigateur


## Technologies

- **HTML5** 
- **CSS3** 
- **JavaScript ES6**: Modules, LocalStorage
- **Architecture modulaire**

