const playerChoices = document.querySelectorAll('.player-choices');
const playeScore = document.querySelector('#player-score');
const computerScore = document.querySelector('#computer-score');
const result = document.querySelector('#result')
const matchPlayer = document.querySelector('#match-player');
const matchComputer = document.querySelector('#match-computer');
const myGitHub = document.querySelector('#my-github')

const scores = {
    player : 0,
    computer: 0
}

const winner = (player,computer) => {
    matchPlayer.innerHTML = match(player)
    matchComputer.innerHTML = match('rock')

    setTimeout(() => {
        matchComputer.innerHTML = match(computer)
    }, 1000);

    if(player == computer){
        return 'draw'
    }

    if(player == 'rock'){
        if(computer == 'paper'){
            return 'computer'
        }else if(computer == 'scissors'){ 
            return 'player'
        }
    }

    if(player == 'paper'){
        if(computer == 'rock'){
            return 'player'
        }else if(computer == 'scissors'){
            return 'computer'
        }
    }

    if(player == 'scissors'){
        if(computer == 'rock'){
            return 'computer'
        }else if(computer == 'paper'){
            return 'player'
        }
    }
}

const computerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3)

    if(randomNumber == 0){
        return 'rock' 
    }else if(randomNumber == 1){
        return 'paper'
    }else{
        return 'scissors'
    }
}

const scoreBoard = (winnerMatch) => {
    result.innerHTML = 'Resultado : '
    setTimeout(() => {
        if(winnerMatch == 'player'){
            scores.player++
            playeScore.innerHTML = `<i class="fas fa-user"></i> Você : ${scores.player}`
            result.innerHTML = 'Resultado : Você'
        }if(winnerMatch == 'computer'){
            scores.computer++
            computerScore.innerHTML = `<i class="fas fa-robot"></i> Computador : ${scores.computer}`
            result.innerHTML = 'Resultado : Computador'
        }else if(winnerMatch == 'draw'){
            result.innerHTML = 'Resultado : Empate'
        }
    }, 1500);
}

const match = (param) => {
    if(param == 'rock'){
        return '<i class="far fa-hand-rock"></i>'
    }else if(param == 'paper'){
        return '<i class="far fa-hand-paper"></i>'
    }else if(param == 'scissors'){
        return '<i class="far fa-hand-scissors"></i>'
    }
}

playerChoices.forEach((choice) => {
    choice.addEventListener('click',() => {
        const player = choice.id
        const computer = computerChoice()
        const winnerMatch = winner(player,computer)
        scoreBoard(winnerMatch)
        console.log(player,computer,winnerMatch)
    })
})