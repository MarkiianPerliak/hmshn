// 1

let count = 0

let coolId = setInterval(() => {
    count++
    console.log(count)
    if (count === 5) {
    clearInterval(coolId)
}
}, 1000)

// 2
    const boxes = document.querySelectorAll('.box');
    let scaleUp = true;

    const intervalId = setInterval(() => {
for (let i = 0; i < boxes.length; i++) {
  boxes[i].style.transform = scaleUp ? 'scale(1.5)' : 'scale(1)';
}

      scaleUp = !scaleUp;
    }, 500);
    setTimeout(() => {
      clearInterval(intervalId);
      console.log("Стоп");
    }, 10000);

// 3
    let score = 0;
    let timeLeft = 10;

    const scoreDisplay = document.getElementById('score');
    const messageDisplay = document.getElementById('message');
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const points = parseInt(button.getAttribute('data-points'));
        score += points;
        scoreDisplay.textContent = `Лічильник: ${score}`;
      });
    });

    const timer = setInterval(() => {
      timeLeft--;
      if (timeLeft === 0) {
        clearInterval(timer);
        messageDisplay.textContent = `Час вийшов! Ваш результат: ${score} очок.`;
        buttons.forEach(button => button.disabled = true);
      }
    }, 1000);

// 4 

const coolinput = document.querySelector(".coolinput");
const kokobutton = document.querySelector(".kokobutton");

kokobutton.addEventListener("click", (event) => {
const goodNumber = Number(`${coolinput.value}000`)

setTimeout(() => {
console.log(`Пройшло ${coolinput.value} секунд`)
}, goodNumber)
})