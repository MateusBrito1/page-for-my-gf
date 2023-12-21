let naoButton = document.getElementById('nao-button');
naoButton.addEventListener('mouseover', moveNaoButton);

function moveNaoButton() {
    let maxWidth = window.innerWidth - naoButton.clientWidth;
    let maxHeight = window.innerHeight - naoButton.clientHeight;
    let randomX = Math.floor(Math.random() * maxWidth);
    let randomY = Math.floor(Math.random() * maxHeight);
    naoButton.style.position = 'absolute';
    naoButton.style.left = randomX + 'px';
    naoButton.style.top = randomY + 'px';
}

naoButton.addEventListener('mouseenter', function() {
    moveNaoButton();
});

let simButton = document.getElementById('sim-button');
simButton.addEventListener('click', function() {
    let container = document.getElementById('container');
    container.innerHTML = '<h2>Quero viver pra sempre com você, você é o meu maior bem, te amo muito vitorinha!</h2>';


    let myGif = document.createElement("img");
    myGif.src = "https://i.pinimg.com/originals/88/27/4b/88274b5f2aef162185bed9f359ece0cd.gif";
    myGif.style.width = '150px';
    container.appendChild(myGif);
});
