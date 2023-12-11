let step = '';
let winner = '';
let spanPosition = document.getElementById('spanPosition');
let victory = document.getElementById('victory');
let spanWin = document.getElementById('spanWin');
let btnNewGame = document.getElementById('btnNewGame');
let field = document.getElementById('field');
let item = document.querySelectorAll('.item');
// console.log(item)
let k = 0;
let win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
]

const pos = () => {
    if (step == 'cross') {
        step = 'zero';
        spanPosition.innerText = 'Нолики';
    } else {
        step = 'cross';
        spanPosition.innerText = 'Крестики';
    }
}
pos();

item.forEach((elem) => {
    elem.addEventListener('click', () => {
        if (!elem.classList.contains('zero') && !elem.classList.contains('cross')) {
            if (step == 'cross') {
                elem.classList.add('cross');
            }
            if (step == 'zero') {
                elem.classList.add('zero');
            }
            k++;
            pos();
        }
        zeroWin();
        crossWin();
        noWin();
        // console.log(item, win)
    })
})

let zeroWin = () => {
    for (let i = 0; i < win.length; i++) {
        if (
            item[win[i][0]].classList.contains('zero') &&
            item[win[i][1]].classList.contains('zero') &&
            item[win[i][2]].classList.contains('zero')
        ) {
            item[win[i][0]].classList.add('wincolor')
            item[win[i][1]].classList.add('wincolor')
            item[win[i][2]].classList.add('wincolor')

            winner = 'Нолики'
            endGame(winner);
            return 1
        }
    }
}

let crossWin = () => {
    for (let i = 0; i < win.length; i++) {
        if (
            item[win[i][0]].classList.contains('cross') && item[win[i][1]].classList.contains('cross') && item[win[i][2]].classList.contains('cross')
        ) {
            item[win[i][0]].classList.add('wincolor')
            item[win[i][1]].classList.add('wincolor')
            item[win[i][2]].classList.add('wincolor')
            winner = 'Крестики'
            endGame(winner);
            return 1
        }
    }
}

let noWin = () => {
    if (!crossWin() && !zeroWin() && (k >= 9)) {
        winner = 'Ничья';
        endGame(winner);
    }
}
let endGame = (winner) => {
    field.style.pointerEvents = 'none';
    victory.style.display = 'flex';
    spanWin.innerText = winner;
}

btnNewGame.addEventListener('click', () => {
    document.location.reload();
})