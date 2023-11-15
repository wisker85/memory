const carte = document.querySelectorAll('.carta');
let cartaGirata = false;
let primaCarta, secondaCarta;

function giraCarta() {
    this.classList.add('flip');

    if(!cartaGirata){
        cartaGirata = true;
        primaCarta = this;
        return;
    }

    secondaCarta = this;
    cartaGirata = false;

    controllaCorrispondenza();
}

function controllaCorrispondenza(){
    let corrisponde = primaCarta.dataset.forma === secondaCarta.dataset.forma;
    corrisponde ? disabilitaCarte() : rigiraCarte();
}

function disabilitaCarte(){
    primaCarta.removeEventListener('click', giraCarta);
    secondaCarta.removeEventListener('click', giraCarta);
    
}

function rigiraCarte(){
    setTimeout(() => {
        primaCarta.classList.remove('flip');
        secondaCarta.classList.remove('flip');
    },1500)

}

carte.forEach(carta => carta.addEventListener('click', giraCarta));
