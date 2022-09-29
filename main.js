const hamburger = document.getElementById('hamburger-menu');
const closeMenu = document.getElementById('close-menu');
const navList = document.getElementById('nav-list');

hamburger.addEventListener('click', () => {
    navList.style.display = 'block'
    closeMenu.style.display = 'block'
    hamburger.style.display = 'none'

})

closeMenu.addEventListener('click', () => {
    navList.style.display = 'none'
    closeMenu.style.display = 'none'
    hamburger.style.display = 'block'

})
