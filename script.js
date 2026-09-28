function draw() {
    return Math.floor(Math.random() * 75 + 1);
};
function letterResult(number) {
    const position = Math.ceil(number / 15);
    let letter;
    switch (position) {
        case 1:
            letter = 'B';
            document.querySelector(`.B li:nth-child(${number})`).style.opacity = 1;
            break;
        case 2:
            letter = 'I';
            document.querySelector(`.I li:nth-child(${number - 15})`).style.opacity = 1;
            break;
        case 3:
            letter = 'N';
            document.querySelector(`.N li:nth-child(${number - 30})`).style.opacity = 1;
            break;
        case 4:
            letter = 'G';
            document.querySelector(`.G li:nth-child(${number - 45})`).style.opacity = 1;
            break;
        case 5:
            letter = 'O';
            document.querySelector(`.O li:nth-child(${number - 60})`).style.opacity = 1;
            break;
    }
    return letter;
}

const drawBtn = document.querySelector('#draw-btn');
const ballResultNumber = document.querySelector('.ball-number');
const ballResultLetter = document.querySelector('.ball-letter');
const ballHistory_1 = document.querySelector('.history li:nth-child(1)')
const ballHistory_2 = document.querySelector('.history li:nth-child(2)')
const ballHistory_3 = document.querySelector('.history li:nth-child(3)')
const ballHistory_4 = document.querySelector('.history li:nth-child(4)')
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

    ballResultNumber.innerText = number.toString().padStart(2,'0');
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
    
});
