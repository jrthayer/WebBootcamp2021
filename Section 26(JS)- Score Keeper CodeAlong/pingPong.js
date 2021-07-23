let player1 = 0;
let player2 = 0;

let p1Button = document.querySelector("button:nth-of-type(1)");
let p2Button = document.querySelector("button:nth-of-type(2)");
let resetButton = document.querySelector("button:nth-of-type(3)");
let scoreText = document.querySelector("h1");
let maxScoreElement = document.querySelector("#maxScore");
let maxScore = maxScoreElement.options[maxScoreElement.selectedIndex].value;

p1Button.addEventListener("click", function(){
    player1++;
    changeScore();
    checkScore();
});

p2Button.addEventListener("click", function(){
    player2++;
    changeScore();
    checkScore();
});

resetButton.addEventListener("click", function(){
    reset();
});

maxScoreElement.addEventListener("change", function(){
    maxScore = maxScoreElement.options[maxScoreElement.selectedIndex].value;
    reset();
});

function checkScore(){
    
    if(player1 >= maxScore || player2 >= maxScore){
        p1Button.disabled = true;
        p1Button.classList.add('disabled');
        p2Button.disabled = true;
        p2Button.classList.add('disabled');
    }
}

function changeScore(){
    scoreText.textContent = `${player1} to ${player2}`;
}

function reset(){
    player1 = 0;
    player2 = 0;
    changeScore();
    p1Button.disabled = false;
    p2Button.disabled = false;
    p1Button.classList.remove('disabled');
    p2Button.classList.remove('disabled');
}