document.addEventListener("DOMContentLoaded", e => {
  function numberBetween(min, max) {
    return Math.floor(Math.random() * max) + min;
  }

  let answer = numberBetween(1, 100);
  let submit = document.querySelector("input[type='submit'");
  let input = document.querySelector("#guess");
  let guessesCount = 0;

  submit.addEventListener("click", event => {
    event.preventDefault();
    
    let guess = parseInt(input.value, 10);
    let message;
    guessesCount += 1;

    if (guess === answer) {
      message = `You guessed it! It took you ${guessesCount} guesses`;
    } else if (guess > answer) {
      message = `My number is lower than ${guess}`;
    } else if (guess < answer) {
      message = `My number is higher than ${guess}`;
    }

    let paragraph = document.querySelector("main > p");
    paragraph.textContent = message;
  });
});