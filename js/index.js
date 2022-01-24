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
/* Testimonial Slider
    :element testimonials: .testimonial - all testimonials
    :mobileSlideTracker
*/
const testimonials = document.getElementsByClassName('testimonial');
const mobileSlideTracker = document.getElementsByClassName('mobile-slide-tracker');
const slidesDots = document.getElementsByClassName('slide-dot');

let slideNum = 0;
console.log(testimonials)
function startSlide() {
    // Display the next testimonial 
    setInterval(() => {
        const isActive = testimonials[slideNum].classList.contains('testimonial-active');
        if (slideNum == 3) {
            // Hide Last
            testimonials[3].classList.remove('testimonial-active');
            slidesDots[3].classList.remove('slide-active');
            slideNum = 0;
            // Display First
            testimonials[0].classList.add('testimonial-active');
            slidesDots[slideNum].classList.add('slide-active');
        }
        else {
            // Hide current testimonial
            testimonials[slideNum].classList.remove('testimonial-active');
            slidesDots[slideNum].classList.remove('slide-active');
            slideNum += 1;
        }
        // Display next testimonial
        testimonials[slideNum].classList.add('testimonial-active');
        slidesDots[slideNum].classList.add('slide-active');
    }, 3500);
}
startSlide();
// setInterval(nextSlide, )