let playerScore = 0;

const paper = document.getElementById('paper');
const rock = document.getElementById('rock');
const scissors = document.getElementById('scissors');
const options = document.getElementsByClassName('selector')[0];
const gameScore = document.getElementById('score');
const inGame = document.getElementsByClassName('in-game')[0];


function computerChoice() {
    const choices = ['paper', 'rock', 'scissors'];
    const randomChoice = Math.floor(Math.random() * 3);
    const compChoice = choices[randomChoice];
    return compChoice;
}

function game(playerChoice){
    const compChoice = computerChoice();
    const overallChoice = playerChoice + compChoice;

    switch (overallChoice) {
      
        case 'rockscissors':
        case 'scissorspaper':
        case 'paperrock':
           
            playerScore += 1;
            
            options.style.display = 'none';
           
            inGame.style.display = 'block';
            inGame.innerHTML = `
            <div class="final-selection">
                <div class="player-pick">
                    <h1 class="player-title">YOU PICKED</h1>
                    <div class="background-icon2 player-${playerChoice} player-${playerChoice}-color">
                        <div class="selection2">
                            <img src = "images/icon-${playerChoice}.svg" id="${playerChoice}" alt="${playerChoice}">
                        </div>
                    </div>
                </div>
                <div class="play-again">
                    <h1>YOU WIN</h1>
                    <button class="play-btn">Play Again</button>
                </div>
                <div class="computer-pick">
                    <h1 class="comp-title">THE HOUSE PICKED</h1>
                    <div class="background-icon2 computer-${compChoice} computer-${compChoice}-color">
                        <div class="selection2">
                            <img src = "images/icon-${compChoice}.svg" id="${compChoice}" alt="${compChoice}">
                        </div>
                    </div>
                </div>
            </div>
            `
             
            gameScore.innerHTML = playerScore;
            break;
        
        // case2
        case 'scissorsrock':
        case 'paperscissors':
        case 'rockpaper':
            options.style.display = 'none';
            inGame.style.display = 'block';
            inGame.innerHTML = `
            <div class="final-selection">
                <div class="player-pick">
                    <h1 class="player-title">YOU PICKED</h1>
                    <div class="background-icon2 player-${playerChoice} player-${playerChoice}-color">
                        <div class="selection2">
                            <img src = "images/icon-${playerChoice}.svg" id="${playerChoice}" alt="${playerChoice}">
                        </div>
                    </div>
                </div>
                <div class="play-again">
                    <h1>YOU LOSE</h1>
                    <button class="play-btn">Play Again</button>
                </div>
                <div class="computer-pick">
                    <h1 class="comp-title">THE HOUSE PICKED</h1>
                    <div class="background-icon2 computer-${compChoice} computer-${compChoice}-color">
                        <div class="selection2">
                            <img src = "images/icon-${compChoice}.svg" id="${compChoice}" alt="${compChoice}">
                        </div>
                    </div>
                </div>
            </div>
            `
            break;

        // case3
        case 'scissorsscissors':
        case 'paperpaper':
        case 'rockrock':
            options.style.display = 'none';
            inGame.style.display = 'block';
            inGame.innerHTML = `
            <div class="final-selection">
                <div class="player-pick">
                    <h1 class="player-title">YOU PICKED</h1>
                    <div class="background-icon2 player-${playerChoice} player-${playerChoice}-color">
                        <div class="selection2">
                            <img src = "images/icon-${playerChoice}.svg" id="${playerChoice}" alt="${playerChoice}">
                        </div>
                    </div>
                </div>
                <div class="play-again">
                    <h1>IT'S A DRAW</h1>
                    <button class="play-btn">Play Again</button>
                </div>
                <div class="computer-pick">
                    <h1 class="comp-title">THE HOUSE PICKED</h1>
                    <div class="background-icon2 computer-${compChoice} computer-${compChoice}-color">
                        <div class="selection2">
                            <img src = "images/icon-${compChoice}.svg" id="${compChoice}" alt="${compChoice}">
                        </div>
                    </div>
                </div>
            </div>
            `
            break;
    }

    const playbtn = document.querySelector(".play-btn");
    
    playbtn.addEventListener("click", () => {
        options.style.display = 'grid';
        inGame.style.display = 'none';
    });
}


const modal = document.getElementById('simpleModal');
const modalBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');

modalBtn.addEventListener('click', openModal);
 
closeBtn.addEventListener('click', closeModal);


function openModal() {
    modal.style.display = 'block';
}

function closeModal(){
    modal.style.display = 'none';
}


function main () {
    
    paper.addEventListener('click', () => {
        game('paper');
    })

    
    rock.addEventListener('click', () => {
        game('rock');
    })

    
    scissors.addEventListener('click', () => {
        game('scissors');
    })
}
main();