var naoButton = document.getElementById('nao-button');
naoButton.addEventListener('mouseover', moveNaoButton);

function moveNaoButton() {
    var maxWidth = window.innerWidth - naoButton.clientWidth;
    var maxHeight = window.innerHeight - naoButton.clientHeight;
    var randomX = Math.floor(Math.random() * maxWidth);
    var randomY = Math.floor(Math.random() * maxHeight);
    naoButton.style.position = 'absolute';
    naoButton.style.left = randomX + 'px';
    naoButton.style.top = randomY + 'px';
}

naoButton.addEventListener('mouseenter', function() {
    moveNaoButton();
});

var simButton = document.getElementById('sim-button');
simButton.addEventListener('click', function() {
    var container = document.getElementById('container');
    container.innerHTML = '<h2>Obrigado por aceitar!</h2>';
});
