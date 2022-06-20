let squares = document.getElementsByClassName('square')
let currentPlayer = 'X'
let res = document.getElementById('#res')
let winner = null
let board = []
let winningCombos = [ [0,1,2],
                      [3,4,5],
                      [6,7,8],
                      [0,3,6],
                      [1,4,7],
                      [2,5,8],
                      [0,4,8],
                      [2,4,6] ]
    
  // [winningCombos[linha][coluna]]

function changePlayer () {
    if (currentPlayer === 'X') {
        currentPlayer = 'O'
    } else {
        currentPlayer = 'X'
    }
}

for (let i = 0; i < squares.length; i++) {
    let square = squares[i]    
    square.addEventListener('click', function () {
        if (square.innerHTML === '') {
            square.innerHTML = currentPlayer
            updateBoard (i)
            console.log(`board[${i}]= ${board[i]}`)
            checkForWinner ()
            changePlayer ()
        }
    })    
}

const updateBoard = (i) => {
    board[i] = currentPlayer
}


function checkForWinner() {
  for (var i=0; i < winningCombos.length; i++) {
      if (board[winningCombos[i][0]] === currentPlayer && 
          board[winningCombos[i][1]] === currentPlayer && 
          board[winningCombos[i][2]] === currentPlayer) {
      winner = currentPlayer;
      console.log(`winner is ${winner}`)
      return true;
      }
  }
  return false;
  }