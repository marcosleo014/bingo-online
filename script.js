function draw() {
    return Math.floor(Math.random() * 75 + 1);
};

function letterResult(number) {
    const position = Math.ceil(number / 15);
    let letter;
    switch (position) {
        case 1:
            letter = 'B';
            const ballDrawnB = document.querySelector(`.B li:nth-child(${number})`)
            ballDrawnB.style.opacity = 1;
            ballDrawnB.classList.add('ballDrawnAnimation');
            break;
        case 2:
            letter = 'I';
            const ballDrawnI = document.querySelector(`.I li:nth-child(${number - 15})`);
            ballDrawnI.style.opacity = 1;
            ballDrawnI.classList.add('ballDrawnAnimation');
            break;
        case 3:
            letter = 'N';
            const ballDrawnN = document.querySelector(`.N li:nth-child(${number - 30})`)
            ballDrawnN.style.opacity = 1;
            ballDrawnN.classList.add('ballDrawnAnimation');
            break;
        case 4:
            letter = 'G';
            const ballDrawnG = document.querySelector(`.G li:nth-child(${number - 45})`)
            ballDrawnG.style.opacity = 1;
            ballDrawnG.classList.add('ballDrawnAnimation');
            break;
        case 5:
            letter = 'O';
            const ballDrawnO = document.querySelector(`.O li:nth-child(${number - 60})`)
            ballDrawnO.style.opacity = 1;
            ballDrawnO.classList.add('ballDrawnAnimation');
            break;
    }
    return letter;
}

const drawBtn = document.querySelector('#draw-btn');
const ballResult = document.querySelector('.ball-result');
const ballResultNumber = document.querySelector('.ball-number');
const ballResultLetter = document.querySelector('.ball-letter');
const ballHistory_1 = document.querySelector('.history li:nth-child(1)')
const ballHistory_2 = document.querySelector('.history li:nth-child(2)')
const ballHistory_3 = document.querySelector('.history li:nth-child(3)')
const ballHistory_4 = document.querySelector('.history li:nth-child(4)')
const ballHistory_5 = document.querySelector('.history li:nth-child(5)')
const ballsList = []

drawBtn.addEventListener('click', (event) => {

    // sortear e inserir número na lista de bolas sorteadas
    if (ballsList.length === 75) {
        return alert('Todos os números já foram sorteados')
    };
    let number = draw();
    while (ballsList.includes(number)) {
        number = draw();
    };
    ballsList.push(number);

    setTimeout(() => {
        ballResultNumber.innerText = number.toString().padStart(2, '0');
        ballResultLetter.innerText = letterResult(number);

        if (ballsList.length > 0) {
            ballHistory_1.style.opacity = 1;
            ballHistory_1.innerText = ballsList[ballsList.length - 1];
        }
        if (ballsList.length > 1) {
            ballHistory_2.style.opacity = 1;
            ballHistory_2.innerText = ballsList[ballsList.length - 2];
        }
        if (ballsList.length > 2) {
            ballHistory_3.style.opacity = 1;
            ballHistory_3.innerText = ballsList[ballsList.length - 3];
        }
        if (ballsList.length > 3) {
            ballHistory_4.style.opacity = 1;
            ballHistory_4.innerText = ballsList[ballsList.length - 4];
        }
    }, 1000);

    ballHistory_5.classList.add('popIn');
    if (ballsList.length === 1) {
        ballHistory_1.style.opacity = 0;
    } else if (ballsList.length > 1) {
        ballHistory_1.classList.add('outRight');
    };
    if (ballsList.length > 2) {
        ballHistory_2.classList.add('outRight');
    };
    if (ballsList.length > 3) {
        ballHistory_3.classList.add('outRight');
    }
    if (ballsList.length > 4) {
        ballHistory_4.classList.add('fadeOutRight');
    };
    setTimeout(() => {
        ballHistory_1.classList.remove('outRight');
        ballHistory_2.classList.remove('outRight');
        ballHistory_3.classList.remove('outRight');
        ballHistory_4.classList.remove('fadeOutRight');
        ballHistory_5.classList.remove('popIn');
    }, 1000);

    ballResult.classList.add('ballResultAnimation');
    drawBtn.disabled = true;
    setTimeout(() => {
        ballResult.classList.remove('ballResultAnimation');
        drawBtn.disabled = false;
    }, 1000);

});


// ======================================================================


const btnGenerateCard = document.querySelector('.btn-generate-card');
const modal = document.querySelector('.confirmation-modal');
const btnCloseModal = document.querySelector('.close-modal');
const btnConfirm = document.querySelector('.confirmation-modal a');

btnConfirm.onclick = () => {
    modal.style.display = 'none'
    document.querySelector('main').classList.remove('blur');
};
btnCloseModal.onclick = () => {
    modal.style.display = 'none'
    document.querySelector('main').classList.remove('blur');
};
btnGenerateCard.onclick = () => {
    modal.style.display = 'flex'
    document.querySelector('main').classList.add('blur');
};

