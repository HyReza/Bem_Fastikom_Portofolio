const navMenuButton = document.querySelector('.nav-menu-button')
const navMenuCloseButton = document.querySelector('.nav-menu-close-button')
const navMenu = document.querySelector('.menu')

navMenuButton.addEventListener('click', function() {
    navMenu.classList.add('active')
})

navMenuCloseButton.addEventListener('click', function() {
    navMenu.classList.remove('active')
})

// NAVBAR ONSCROLL
const navbar = document.querySelector('#navbar')
const header = document.querySelector('#header')

let scrollPosition;
window.addEventListener('scroll', function() {
    scrollPosition = this.pageYOffset

    if (scrollPosition > header.clientHeight) {
        navbar.classList.add('onScroll')
    } else {
        navbar.classList.remove('onScroll')
    }
})