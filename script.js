const carte = document.querySelectorAll('.carta');
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

carte.forEach(carta => carta.addEventListener('click', giraCarta));
