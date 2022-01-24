/* Mobile Menu
    :element headerNav: .header-nav - contains the navigational items
    :element navOpen: .header-nav-open - opens up the menu
    :element navClose: .header-nav-close - closes the menu
    :element bgOverlay: .menu-bg-overlay - background overlay
    :element heroImg: .hero-img - background image to hide
*/
const headerNavBox = document.getElementsByClassName('header-nav-box')[0];
const headerNav = document.getElementsByClassName('header-nav')[0];
const navOpen = document.getElementsByClassName('header-nav-open')[0];
const navClose = document.getElementsByClassName('header-nav-close')[0];
const bgOverlay = document.getElementsByClassName('menu-bg-overlay')[0];
const heroImg = document.getElementsByClassName('hero-img')[0];
navOpen.addEventListener("click", () => {
    // Opens menu
    headerNavBox.style.visibility = 'visible';
    headerNav.style.transform = 'translateX(0rem)';
    navOpen.style.display = 'none';
    navClose.style.display = 'block';
    bgOverlay.style.display = 'block';
    heroImg.style.visibility = 'hidden';
})
navClose.addEventListener("click", () => {
    // Closes menu
    headerNavBox.style.visibility = 'hidden';
    headerNav.style.transform = 'translateX(1000rem)';
    navOpen.style.display = 'inline';
    navClose.style.display = 'none';
    bgOverlay.style.display = 'none';
    heroImg.style.visibility = 'visible';
})