const hoursElement = document.querySelector('.hour strong');
const minutesElement = document.querySelector('.minutes strong');
const secondsElement = document.querySelector('.seconds strong');
const buttonElement = document.querySelector('.btn-stop');

function clock() {
    const currentTime = new Date();
    const hours = currentTime.getHours().toString().padStart(2, '0');
    const minutes = currentTime.getMinutes().toString().padStart(2, '0');
    const seconds = currentTime.getSeconds().toString().padStart(2, '0');

        hoursElement.innerHTML = hours
        minutesElement.innerHTML = minutes
        secondsElement.innerHTML = seconds
}

const idClockInterval = setInterval(clock, 1000);

buttonElement.addEventListener('click', () => {
    clearInterval(idClockInterval)
});