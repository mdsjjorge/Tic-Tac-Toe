let squares = document.getElementsByClassName('square')
let currentPlayer = 'X'
let result = document.getElementById('result')
let winner = null
let reset = document.getElementById('reset')
let board = []
let activeGame = true
let winningCombos = [ [0,1,2],
                      [3,4,5],
                      [6,7,8],
                      [0,3,6],
                      [1,4,7],
                      [2,5,8],
                      [0,4,8],
                      [2,4,6] ]
    
  // [winningCombos[linha][coluna]]

reset.addEventListener('click', () => {
    for (let i = 0; i < squares.length; i++) {
        squares[i].innerHTML = ''
    }
    currentPlayer = "X"
    result.innerHTML = ""
    activeGame = true
    board = ["","","","","","","","",""]
})

const changePlayer = () => {
    if (currentPlayer === 'X') {
        currentPlayer = 'O'
    } else {
        currentPlayer = 'X'
    }
}

for (let i = 0; i < squares.length; i++) {
    let square = squares[i] 
    square.addEventListener('click', () => {
        if (activeGame && square.innerHTML === '') {
            screenRender (square)
            updateBoard (i)
            checkForWinner ()
            changePlayer ()
        } else if (activeGame && board[i] === "X") {
            alert(`Já tem 'X' ai`)
        } else if (activeGame && board[i] === "O") {
            alert(`Já tem 'O' ai`)
        } else if (!activeGame) {
            alert("O jogo acabou!!")
        }
    })  
}

const screenRender = (square) => {  
    if (currentPlayer == "X") {
        square.innerHTML = "X"
        square.style.color = "#ed1515"
    } else  {
        square.innerHTML = "O"
        square.style.color = "#3888f7"
    }
}
    
const updateBoard = (i) => {
    board[i] = currentPlayer
}

const checkForWinner = () => {
    for (let i=0; i < winningCombos.length; i++) {
        if (board[winningCombos[i][0]] === currentPlayer && 
            board[winningCombos[i][1]] === currentPlayer && 
            board[winningCombos[i][2]] === currentPlayer) {
        winner = currentPlayer
        result.innerHTML = `jogador ${winner} venceu!!`
        console.log(`winner is ${winner}`)
        activeGame = false
        }
    }
}
