document.addEventListener("DOMContentLoaded", e => {
  function numberBetween(min, max) {
    return Math.floor(Math.random() * max) + min;
  }

  let answer = numberBetween(1, 100);
});