// btn show menu

var btn = document.querySelectorAll('.btn-menu');
var ShowMenu = document.querySelector('.show-menu');
var CloseMenu = document.querySelector('.close-menu');

btn.forEach((btn,index) => {
    btn.addEventListener('click', function handleClick(event) {
        ShowMenu.classList.toggle("show");
        CloseMenu.classList.toggle("hidden");
    });
});


// btn show menu notifications

var btnNotif = document.querySelectorAll('.btn-notif');
var ShowNotif = document.querySelector('.show-notif');
var CloseNotif = document.querySelector('.close-notif');

btnNotif.forEach((btnNotif,index) => {
    btnNotif.addEventListener('click', function handleClick(event) {
        ShowNotif.classList.toggle("showNotif");
        CloseNotif.classList.toggle("hidden");
    });
});


// sliders ......................

var swiper = new Swiper(".channels-tv", {
    slidesPerView: 3,
    spaceBetween: 10,
    loop:true,
    centeredSlides: true,
    grabCursor: true,
    navigation: {
        nextEl: ".channels-tv-button-next",
        prevEl: ".channels-tv-button-prev",
    },
    breakpoints: {
        1200: {
            slidesPerView: 6,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        750: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    },
});