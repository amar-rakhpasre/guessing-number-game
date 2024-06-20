// Number Guessing Game
const max = 1000;
const min = 1;
const answer = Math.floor(Math.random() * (max - min + 1)) + min;

let attempts = 0;
let guess;
let running = true;

const gameLoop = () => {
    if (running) {
        guess = window.prompt(`Guess a number between ${min}-${max}`);
        guess = Number(guess);

        if (isNaN(guess)) {
            window.alert("Please enter a valid number");
        } else if (guess < min || guess > max) {
            window.alert("Please enter a number between the specified range");
        } else {
            attempts++;
            if (guess < answer) {
                window.alert("TOO LOW! TRY AGAIN!");
            } else if (guess > answer) {
                window.alert("TOO HIGH! TRY AGAIN!");
            } else {
                window.alert(`CORRECT! The answer was ${answer}. It took you ${attempts} attempts`);
                running = false;
            }
        }

        // Schedule the next prompt
        if (running) {
            setTimeout(gameLoop, 0);
        }
    }
};

// Start the game loop
setTimeout(gameLoop, 0);

// Canvas Animation
let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");
let width = (canvas.width = window.innerWidth);
let height = (canvas.height = window.innerHeight);
let str = "A+jk js:2 @dfs 17 tr YY ufds M5r P87 #18 $!& ^dfs $Ew er JH # $ * . (! ;) ,: :";
let matrix = str.split("");
let font = 12;
let col = width / font;
let arr = [];

for (let i = 0; i < col; i++) {
    arr[i] = 1;
}

const draw = () => {
    ctx.fillStyle = "rgba(0,0,0,0.05)";
    ctx.fillRect(0, 0, width, height);
    ctx.fillStyle = "#00ff00";
    ctx.font = `${font}px system-ui`;

    for (let i = 0; i < arr.length; i++) {
        let txt = matrix[Math.floor(Math.random() * matrix.length)];
        ctx.fillText(txt, i * font, arr[i] * font);

        if (arr[i] * font > height && Math.random() > 0.975) {
            arr[i] = 0;
        }
        arr[i]++;
    }
};

setInterval(draw, 20);

window.addEventListener("resize", () => location.reload());
