const headerSwitch = document.querySelector('#header__switch')

const header = document.querySelector('#header')
const headerLogoicon = document.querySelector('#header__logo-icon')
const headerMenu = document.querySelector('#header__menu') 
const headerMenumain = document.querySelector('#header__menu-main')
const headerMenulinkSelected = document.querySelector('.header__menu-link--selected')
const headerMenuseparator = document.querySelector('#header__menu-seperator')

const footer = document.querySelector('#footer')


headerMenu.addEventListener('click', () => {
    headerMenumain.classList.toggle('header__menu-main--show')
})

headerSwitch.addEventListener('click', () => {
    // toggle significa que si no tiene una clase de la va a poner, sino se la va a quitar
    headerSwitch.classList.toggle('header__switch--active')

    document.body.classList.toggle('body--darkmode')

    headerLogoicon.classList.toggle('header__logo-icon--darkmode')
    header.classList.toggle('header--darkmode')
    headerMenumain.classList.toggle('header__menu-main--darkmode')
    headerMenulinkSelected.classList.toggle('header__menu-link--selected-darkmode')
    headerMenuseparator.classList.toggle('header__menu-seperator--darkmode')

    footer.classList.toggle('footer--darkmode')

    // Guardamos el modo en localstorage
    if (document.body.classList.contains('body--darkmode')) {
        localStorage.setItem('darkmode', 'true')
    } else {
        localStorage.setItem('darkmode', 'false')
    }
})

// Obtenemos el modo actual
if (localStorage.getItem('darkmode') === 'true') {
    headerSwitch.classList.add('header__switch--active')
    document.body.classList.add('body--darkmode')
    header.classList.add('header--darkmode')
    headerLogoicon.classList.add('header__logo-icon--darkmode')
    headerMenumain.classList.add('header__menu-main--darkmode')
    headerMenulinkSelected.classList.add('header__menu-link--selected-darkmode')
    headerMenuseparator.classList.add('header__menu-seperator--darkmode')
    footer.classList.add('footer--darkmode')

} else {
    headerSwitch.classList.remove('header__switch--active')
    document.body.classList.remove('body--darkmode')
    header.classList.remove('header--darkmode')
    headerLogoicon.classList.remove('header__logo-icon--darkmode')
    headerMenumain.classList.remove('header__menu-main--darkmode')
    headerMenulinkSelected.classList.remove('header__menu-link--selected-darkmode')
    headerMenuseparator.classList.remove('header__menu-seperator--darkmode')
    footer.classList.remove('footer--darkmode')

}

// Google Chrome Developer

// Idle Detection API
// const detector = new IdleDetector();
// detector.addEventListener('change', () => {
//     const { userState, screenState } = detector;

//     if (screenState === 'locked') {
//         // do something
//         document.body.classList.toggle('body--screenState')
//         console.log(header)
//     }

//     if (userState === 'idle') {
//         // do something
//         document.body.classList.toggle('body--userData')
//         console.log(footer)
//     }
// })