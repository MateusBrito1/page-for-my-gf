const noButton = document.getElementById('no-button');
const yesButton = document.getElementById('yes-button');

noButton.addEventListener('mouseover', moveNoButton);

yesButton.addEventListener('click', () => {
    const container = document.getElementById('container');

    container.innerHTML = '';

    const message = document.createElement('h2');
    message.textContent = 'Quero viver pra sempre com você, você é o meu maior bem, te amo Vitorinha!';
    container.appendChild(message);

    const gif = document.createElement('img');
    gif.src = 'https://i.pinimg.com/originals/b5/e2/45/b5e245cfd05ae7f8fd026f44994ff42b.gif';
    gif.style.width = '150px';
    container.appendChild(gif);
});

function moveNoButton() {
    const maxWidth = window.innerWidth - noButton.clientWidth;
    const maxHeight = window.innerHeight - noButton.clientHeight;
    const randomX = Math.floor(Math.random() * maxWidth);
    const randomY = Math.floor(Math.random() * maxHeight);

    noButton.style.position = 'absolute';
    noButton.style.left = randomX + 'px';
    noButton.style.top = randomY + 'px';
}
