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
                square.innerHTML = currentPlayer
                updateBoard (i)
                // console.log(`board[${i}]= ${board[i]}`)
                checkForWinner ()
                changePlayer ()
            } else if (activeGame && board[i] === "X") {
                alert(`Num tá vendo que já tem 'X' ai?`)
            } else if (activeGame && board[i] === "O") {
                alert(`Num tá vendo que já tem 'O' ai?`)
            } else if (!activeGame) {
                alert("O jogo acabou!!")
            }
            // console.log(activeGame)  
            }  )  
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

// ====================================
// alternative logic
// ====================================

    // let roundWon = false
    // for (let j=0; j <= winningCombos.length; j++) {
    //     const winCondition = winningCombos[j];
    //     const a = board[winCondition[0]];
    //     const b = board[winCondition[1]];
    //     const c = board[winCondition[2]];
    //     console.log(`a=${a},b=${b},c=${c} `)
    //     if (a === '' || b === '' || c === '') {
    //         roundWon = false;
    //         continue;
    //     } 
    //     if (a === b && b === c) {
    //         winner = currentPlayer
    //         roundWon = true;
    //         console.log(`winner is ${winner}`)
    //         alert(`winner is  ${winner}`)
    //         break;
    //     }
    // }
    // if (roundWon) {
    //     alert(`winner is ${currentPlayer}`)
    // }

}
