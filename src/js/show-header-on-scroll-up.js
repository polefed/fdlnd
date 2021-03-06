// ===================================================================================================================================================================================================================================================================================================================================================================================================================================
// ===================================================================================================================================================================================================================================================================================================================================================================================================================================

// show header on scroll up

let lastScroll = 0;
const header = document.querySelector('.header');
const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains('__hide');
window.addEventListener('scroll', () => {
    if (scrollPosition() > lastScroll && !containHide()) {
        header.classList.add('__hide');
    } else if (scrollPosition() < lastScroll && containHide()) {
        header.classList.remove('__hide');
    }
    lastScroll = scrollPosition();
})