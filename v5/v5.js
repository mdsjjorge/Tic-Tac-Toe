let squares = document.getElementsByClassName('square')
let resultado = []
let jogadorAtual = 'X'
let contador = 0

// condições de vitória
//     [0,1,2],
//     [3,4,5],
//     [6,7,8],
//     [0,3,6],
//     [1,4,7],
//     [2,5,8],
//     [0,4,8],
//     [2,4,6] 

function mudarJogador () {
    if (jogadorAtual === 'X'){
        jogadorAtual = 'O'
    } else {
        jogadorAtual = 'X'
    }
}

for (let i = 0; i < squares.length; i++) {
    let square = squares[i]
    square.addEventListener('click', function () {
        if (square.innerHTML === ''){
            square.innerHTML = jogadorAtual
            resultado[i] = jogadorAtual
            mudarJogador ()
            vitoria ()            
            contador ++
            empate ()
        }
        console.log(contador);
        // console.log(`resultado [${i}] = ${resultado[i]}`);
    })
    
}

function empate () {
    if (contador == 9 && !vitoria()) {
        alert("empate")
    }
}

function vitoria () {
    if ((resultado[0] === 'X' && resultado[1] === 'X' && resultado[2] === 'X') ||
        (resultado[3] === 'X' && resultado[4] === 'X' && resultado[5] === 'X') ||
        (resultado[6] === 'X' && resultado[7] === 'X' && resultado[8] === 'X') ||
        (resultado[0] === 'X' && resultado[3] === 'X' && resultado[6] === 'X') ||
        (resultado[1] === 'X' && resultado[4] === 'X' && resultado[7] === 'X') ||
        (resultado[2] === 'X' && resultado[5] === 'X' && resultado[8] === 'X') ||
        (resultado[0] === 'X' && resultado[4] === 'X' && resultado[8] === 'X') ||
        (resultado[2] === 'X' && resultado[4] === 'X' && resultado[6] === 'X') ) {
        alert ("X ganhou")
        return true
    }
    if ((resultado[0] === 'O' && resultado[1] === 'O' && resultado[2] === 'O') ||
        (resultado[3] === 'O' && resultado[4] === 'O' && resultado[5] === 'O') ||
        (resultado[6] === 'O' && resultado[7] === 'O' && resultado[8] === 'O') ||
        (resultado[0] === 'O' && resultado[3] === 'O' && resultado[6] === 'O') ||
        (resultado[1] === 'O' && resultado[4] === 'O' && resultado[7] === 'O') ||
        (resultado[2] === 'O' && resultado[5] === 'O' && resultado[8] === 'O') ||
        (resultado[0] === 'O' && resultado[4] === 'O' && resultado[8] === 'O') ||
        (resultado[2] === 'O' && resultado[4] === 'O' && resultado[6] === 'O') ) {
        alert ("O ganhou")
        return true
    }
}