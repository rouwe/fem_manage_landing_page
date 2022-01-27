(function menuSystem() {
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
    navOpen.addEventListener("click", openMenu)
    function openMenu() {
        // Opens menu
        headerNavBox.style.visibility = 'visible';
        headerNav.style.transform = 'translateX(0rem)';
        navOpen.style.display = 'none';
        navClose.style.display = 'block';
        bgOverlay.style.display = 'block';
        heroImg.style.visibility = 'hidden';
    }
    navClose.addEventListener("click", closeMenu)
    function closeMenu() {
        // Closes menu
        headerNavBox.style.visibility = 'hidden';
        headerNav.style.transform = 'translateX(1000rem)';
        navOpen.style.display = 'inline';
        navClose.style.display = 'none';
        bgOverlay.style.display = 'none';
        heroImg.style.visibility = 'visible';
    }
    // Close menu when clicking in overlay
    bgOverlay.addEventListener("click", closeMenu);
})();

(function sliderSystem() {
    /* Testimonial Slider
        :element testimonials: .testimonial - all testimonials
        :element slideDots: .slide-dot - slide tracker  
    */
    const testimonials = document.getElementsByClassName('testimonial');
    const slidesDots = document.getElementsByClassName('slide-dot');
    let slideNum = 0;
    let runOnce = false;
    
    function mobileSlider() {
        // Controls slider for mobile and tablet
        // testimonials[toActive].classList.add('testimonial-active');
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
    }
    function desktopSlider() {
        // Controls slider for desktop
        let firstSet = [slideNum, slideNum + 1, slideNum + 2];
        const displaySlide = (secondSlide, thirdSlide) => {
            // Display Slides
            testimonials[slideNum].style.gridArea = 'left';
            testimonials[slideNum].classList.add('testimonial-active');
            testimonials[secondSlide].style.gridArea = 'center';
            testimonials[secondSlide].classList.add('testimonial-active');
            testimonials[thirdSlide].style.gridArea = 'right';
            testimonials[thirdSlide].classList.add('testimonial-active');
        }
        const hideSlide = (firstSlide) => {
            // Hide the first slide
            testimonials[firstSlide].classList.remove('testimonial-active');
        }
        if (!runOnce) {
            for (const toActivate of firstSet) {
                testimonials[toActivate].classList.remove('testimonial-active');
            }
            runOnce = true;
        }
        switch(slideNum) {
            // Check slides to display and hide
            case 0:
                hideSlide(3);
                displaySlide(1, 2);
                slideNum += 1;
                break;
            case 1:
                hideSlide(0);
                displaySlide(2, 3);
                slideNum += 1;
                break;
            case 2:
                hideSlide(1);
                displaySlide(3, 0);
                slideNum += 1;
                break;
            case 3:
                hideSlide(2);
                displaySlide(0, 1);
                slideNum = 0;
                break;
        }
    }
    (function startSlider() {
        // Start Slider
        setInterval(() => {
        const windowWidth = window.innerWidth;
        if (windowWidth < 1024) {
            mobileSlider();
        } else {
            desktopSlider();
        }
        }, 2500);
    })()
})()