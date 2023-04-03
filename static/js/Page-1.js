'use strict'
let screenW = screen.width

const aside = document.getElementById('aside-navbar')
const btnDrop = document.getElementById('drop-icon')
const dropMenu = document.getElementById('drop_menu')
const overflov = document.getElementById('overflov')
const tol = document.getElementById('toldir')

    /* SCREEN FUNCTION */
function screenFunc() {
    aside.setAttribute('class', '');
    aside.classList.add('bg-dark', 'position-sticy', 'float-start', 'vh-100', 'p-2')
    aside.firstElementChild.lastElementChild.src = './image/menu.png'
    dropMenu.classList.add('d-none')
    btnDrop.addEventListener('click', () => {
        ochYop()
    })
}
    /* DROPDOWN < SCREEN */
function dropdown() {
    if (screenW <= 768) {
        screenFunc()
    } else {
        btnDrop.addEventListener('click', () => {
            ochYop()
        })
    }
}
dropdown()

function ochYop() {
    if (aside.classList.contains('a1')) {
        aside.setAttribute('class', '');
        aside.classList.add('bg-dark', 'position-sticy', 'float-start', 'vh-100', 'p-2', 'z_index_0')
        aside.firstElementChild.lastElementChild.src = './image/menu.png'
        dropMenu.classList.add('d-none')
        overflov.classList.remove('blur')
        tol.style.width = '57px'
    } else if (! aside.classList.contains('a1')) {
        aside.setAttribute('class', '');
        aside.classList.add('a1', 'position-sticy','bg-dark', 'd-inline-block', 'float-start', 'p-2', 'vh-100', 'style-height', 'style-w-18', 'z_index_0')
        aside.firstElementChild.lastElementChild.src = './image/toLeft.png'
        dropMenu.classList.remove('d-none')
        dropMenu.classList.add('d-flex', 'flex-column')
        overflov.classList.add('blur')
        tol.style.width = '288px'
    }
}


