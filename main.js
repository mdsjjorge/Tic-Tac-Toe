let squares = document.getElementsByClassName('square')
let currentPlayer = 'X'
let result = document.getElementById('result')
let winner = null
let reset = document.getElementById('reset')
let putStrikers = document.querySelector(".strike");
let board = []
let counter = 0
let currentScoreX = 0;
let currentScoreO = 0;
let activeGame = true
let winningCombos = [ 
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6] 
]
    
// [winningCombos[linha][coluna]]

// ========================================
// muda jogador
// ========================================

const changePlayer = () => {
    if (currentPlayer === 'X') {
        currentPlayer = 'O'
    } else {
        currentPlayer = 'X'
    }
}

// ========================================
// atualiza board
// ========================================

const updateBoard = (i) => {
    board[i] = currentPlayer
}

// ========================================
// renderiza square a partir do click
// ========================================

const squareRender = (square) => {  
    if (currentPlayer == "X") {
        square.innerHTML = "X"
        square.style.color = "#ddea27"
    } else  {
        square.innerHTML = "O"
        square.style.color = "#1af4b2"
    }
}

// ========================================
// renderiza a linha de vitória
// ========================================

const lineRender = (i) => {
    putStrikers.setAttribute('class',`strike strike-${i}`);
}

// ========================================
// atualiza pontuação
// ========================================

const updateScore = (winner) => {
    let scoreX = document.querySelector('.scoreX')
    let scoreO = document.querySelector('.scoreO')

    if (winner === 'X') {
        currentScoreX ++
    } else {
        currentScoreO ++
    }
    scoreX.innerHTML = currentScoreX
    scoreO.innerHTML = currentScoreO
}

// ========================================
// verifica vencedor
// ========================================

const checkForWinner = () => {
    for (let i=0; i < winningCombos.length; i++) {
        if (board[winningCombos[i][0]] === currentPlayer && 
            board[winningCombos[i][1]] === currentPlayer && 
            board[winningCombos[i][2]] === currentPlayer) {
            winner = currentPlayer
            result.innerHTML = `${winner} venceu!!`
            lineRender(i)
            updateScore(winner)
            activeGame = false
            return true
        }
    }     
    return false
}

// ========================================
// verifica empate
// ========================================

const checkForTie = () => {
    if (counter == 9 && !checkForWinner()) {
        result.innerHTML = "empatou!"
    }
}

// ========================================
// preenche os squares
// ========================================

for (let i = 0; i < squares.length; i++) {
    let square = squares[i] 
    square.addEventListener('click', () => {
        counter ++
        if (activeGame && square.innerHTML === '') {
            squareRender (square)
            updateBoard (i)
            checkForWinner ()
            checkForTie ()
            changePlayer ()
        } else if (activeGame && board[i] !== '' ) {
            result.innerHTML = `Já tem ${board[i]} ai.`                
        } else if (!activeGame) {
            result.innerHTML = `O jogo acabou! ${winner} venceu!`
        }
    })  
}

// ========================================
// reset
// ========================================

reset.addEventListener('click', () => {
    for (let i = 0; i < squares.length; i++) {
        squares[i].innerHTML = ''
    }
    currentPlayer = "X"
    result.innerHTML = "on"
    activeGame = true
    board = []
    counter = 0
    putStrikers.setAttribute('class',`strike`);
})

