        
        let squares = document.getElementsByClassName('square')
        // let changeButton = document.getElementById('change')
        let currentPlayer = 'X'
        let res = document.getElementById('#res')
        let arr = ['','','','','','','','','']
        
        function changePlayer () {
            if (currentPlayer === 'X') {
                currentPlayer = 'O'
            } else {
                currentPlayer = 'X'
            }
        }
        
        // changeButton.addEventListener('click', changePlayer)

        for (let i = 0; i < squares.length; i++) {
            let square = squares[i]
            // arr[i] = squares[i]
            
            square.addEventListener('click', function () {
                if (square.innerHTML === '') {
                    square.innerHTML = currentPlayer
                    let pass = currentPlayer
                    // square.value = currentPlayer
                    changePlayer () 
                    counter (i,pass)
                    // console.log (i, pass)
                    // console.log(`square[${i}]: ${square.value}`)
                    // console.log(`squares[${i}]: ${squares[i]}`)
                    // console.log(square[i])
                }
            })
            
        }

        function counter (i, pass) {
            let counterX = pass
            arr[i] = counterX
            console.log(arr)
            // if (arr[0] == arr[1] && arr[1] == arr[2]) {
            //     res.innerHTML = 'alguem ganhou'
            // }
        }

        // [0, 1, 2]
        // [3, 4, 5]
        // [6, 7, 8]
        // [0, 3, 6]
        // [1, 4, 7]
        // [2, 5, 8]
        // [0, 4, 8]
        // [2, 4, 6]

        // if (square[0] === 'X' && square[1] === 'X' && square[2] === 'X' ) {
        //     res.innerHTML = 'X ganheu'
        // }

        // for (let i = 0; i < squares.length; i++) {
        //     let square = squares[i]
            
        //     square.addEventListener('click', function () {
        //         if (square.innerHTML === '') {
        //             square.innerHTML = currentPlayer
        //             changePlayer () 

        //         }
        //     })
        // }