let squares = document.getElementsByClassName('square')
        let changeButton = document.getElementById('change')
        let currentPlayer = 'X'
        
        function changePlayer () {
            if (currentPlayer === 'X') {
                currentPlayer = 'O'
            } else {
                currentPlayer = 'X'
            }
        }
        
        changeButton.addEventListener('click', changePlayer)

        for (let i = 0; i < squares.length; i++) {
            let square = squares[i]
            
            square.addEventListener('click', function () {
                if (square.innerHTML === '') {
                    square.innerHTML = currentPlayer
                    changePlayer () 
                }
        })
    }