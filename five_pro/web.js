const max = 1000;
const min = 1;
const answer = Math.floor(Math.random() * (max-min + 1)) + min;


let attempts = 0;
let guess;
let running = true;

while(running){

    guess = window.prompt(`guess a number between ${min}-${max}`)
    guess = Number(guess);

    if(isNaN(guess)){
        window.alert("Please Enter a Valid Number ");

    }else if(guess < min || guess > max){
        window.alert("Please Enter a Valid Number");
    }else{
        attempts++
        if(guess < answer){
            window.alert("TOO LOW! TRY AGAIN!");
        }else if(guess > answer){
            window.alert("TOO HIGH! TRY AGAIN!");
        }else{
            window.alert(`CORRECT! The Answer was ${answer}. It Took you ${attempts} Attempts`);
            running = false;
            
        }
    }

}  