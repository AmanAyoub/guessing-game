document.addEventListener("DOMContentLoaded", e => {
  function numberBetween(min, max) {
    return Math.floor(Math.random() * max) + min;
  }

  let answer = numberBetween(1, 100);
  let submit = document.querySelector("input[type='submit'");
  let input = document.querySelector("#guess");
  let guessesCount = 0;
  let paragraph = document.querySelector("main > p");

  submit.addEventListener("click", event => {
    event.preventDefault();
    
    let guess = parseInt(input.value, 10);
    let message;
    guessesCount += 1;

    if (Number.isNaN(guess) || guess < 1) {
      message = "Invalid input. Enter an integer between 1 and 100";
    } else {
      if (guess === answer) {
        message = `You guessed it! It took you ${guessesCount} guess${guessesCount === 1 ? "" : "es"}`;
        submit.setAttribute("disabled", "true");
      } else if (guess > answer) {
        message = `My number is lower than ${guess}`;
      } else if (guess < answer) {
        message = `My number is higher than ${guess}`;
      }
    }

    paragraph.textContent = message;
  });

  let newGame = document.querySelector("a");
  newGame.addEventListener("click", event => {
    event.preventDefault();

    paragraph.textContent = "Guess a number between 1 and 100";
    answer = numberBetween(1, 100);
    guessesCount = 0;
    submit.removeAttribute("disabled");
    input.value = "";
  });
});