const numbers = document.querySelectorAll('li')

numbers.forEach((number) => {
    number.onclick = (event) => {
        if (event.target.tagName === 'IMG') {
            return
        }
        const opacity = window.getComputedStyle(event.target).getPropertyValue('opacity');
        if (opacity === '1') {
            event.target.style.opacity = 0.1
        } else {
            event.target.style.opacity = 1
        }
    }
})

window.onload = () => {
    const B = generateList(1);
    const I = generateList(16);
    const N = generateList(31, 4);
    const G = generateList(46);
    const O = generateList(61);
    [B,I,N,G,O].forEach(list => list.sort((a,b) => a - b))

    
    document.querySelectorAll('.N li').forEach((li, index) => {
        console.log(N)
        if (index == 2) {
            return
        }
        if (index > 2) {
            li.innerText = N[index - 1]
            return
        }
        li.innerText = N[index]
    })

    document.querySelectorAll('.B li').forEach((li, index) => {
        li.innerText = B[index]
    })
    document.querySelectorAll('.I li').forEach((li, index) => {
        li.innerText = I[index]
    })
    document.querySelectorAll('.G li').forEach((li, index) => {
        li.innerText = G[index]
    })
    document.querySelectorAll('.O li').forEach((li, index) => {
        li.innerText = O[index]
    })
}

function generateNumber(min, list) {
    let number;
    do {
        number = Math.floor(Math.random() * 15 + min)
    } while(list.includes(number));
    return number;
};

function generateList(min, quantity = 5) {
    const list = [];
    while (list.length < quantity) {
        list.push(generateNumber(min, list))
    };
    return list;
};