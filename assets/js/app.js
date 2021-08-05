
const headerHeight = document.querySelector('header').clientHeight;
const screenHeight = `${window.screen.height - 2.4 * headerHeight}px`;
const banner = document.querySelector('.banner');
banner.style.height = screenHeight;
console.log(banner);

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})