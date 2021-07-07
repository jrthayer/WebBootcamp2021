let max = parseInt(prompt("enter a max number:"));
const targetNum = Math.floor(Math.random() * max) + 1;
console.log(targetNum);

let guess = parseInt(prompt("what is your guess?"));
while(guess !== targetNum){
    if(guess > targetNum){
        guess = parseInt(prompt("Too High! Guess Again:")); 
    }
    else{
        guess = parseInt(prompt("Too Low! Guess Again:")); 
    }
}

alert("you have found the number!");