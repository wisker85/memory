const carte = document.querySelectorAll('.carta');

function giraCarta() {
    this.classList.toggle('flip');
}

carte.forEach(carta => carta.addEventListener('click', giraCarta));
