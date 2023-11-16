const carte = document.querySelectorAll('.carta');
const modale = document.querySelector('modal');
const giocaDiNuovo = modale.querySelector('.giocaDiNuovo');

let cartaGirata = false;
let primaCarta, secondaCarta;
let bloccaBoard = false;

function giraCarta() {
    if(bloccaBoard) return;
    if(this === primaCarta) return;

    this.classList.add('flip');

    if(!cartaGirata){
        cartaGirata = true;
        primaCarta = this;
        return;
    }

    secondaCarta = this;

    controllaCorrispondenza();
}

function controllaCorrispondenza(){
    let corrisponde = primaCarta.dataset.forma === secondaCarta.dataset.forma;
    corrisponde ? disabilitaCarte() : rigiraCarte();
}

function disabilitaCarte(){
    primaCarta.removeEventListener('click', giraCarta);
    secondaCarta.removeEventListener('click', giraCarta);
    resetBoard();
    finePartita();
}

function rigiraCarte(){
    bloccaBoard = true;

    setTimeout(() => {
        primaCarta.classList.remove('flip');
        secondaCarta.classList.remove('flip');
        resetBoard();
    },1500)

}

function resetBoard(){
    [cartaGirata, bloccaBoard] =  [false, false];
    [primaCarta, secondaCarta] = [null, null];
}

(function mischia(){
    carte.forEach(carta => {
        const randPos = Math.floor(Math.random() * 12);
        carta.style.order = randPos;
    })
})();

function finePartita(){
    const carteGirate = document.querySelectorAll('.flip').length;
    if (carteGirate === 12){
        const body = document.body;
        modale.removeAttribute('hidden');
        body.classList.add("vittoria");
    }
}

carte.forEach(carta => carta.addEventListener('click', giraCarta));
giocaDiNuovo.addEventListener('click',() => location.reload());
