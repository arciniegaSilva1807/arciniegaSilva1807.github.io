// SLIDER DEL HEADER
var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    loop: true,
    grabCursor: true,

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});

// PRINCIPALES NFTs
var hearts = document.getElementsByClassName('info-reaction-heart');

for (var i = 0; i < hearts.length; i++) {
    hearts[i].addEventListener('click', (function(e) {
        
        this.classList.add = 'active';


    })(i), false);
}
