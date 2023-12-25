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


// btn show mini menu

var miniMenu = document.querySelector('#mini-menu');


miniMenu.addEventListener('click', function handleClick(event) {
    document.body.classList.toggle('mini-menu');
});



// sliders ......................

var swiper = new Swiper(".channels-tv", {
    slidesPerView: 3,
    spaceBetween: 10,
    loop:true,
    grabCursor: true,
    navigation: {
        nextEl: ".channels-tv-button-next",
        prevEl: ".channels-tv-button-prev",
    },
    breakpoints: {
        1200: {
            slidesPerView: 6,
            spaceBetween: 25,
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


var swiper = new Swiper(".persian-period", {
    slidesPerView: 'auto',
    spaceBetween: 10,
    loop:true,
    grabCursor: true,
    navigation: {
        nextEl: ".persian-period-button-next",
        prevEl: ".persian-period-button-prev",
    },
    breakpoints: {
        1200: {
            slidesPerView: 4,
            spaceBetween: 15,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        850: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
    },
});


var swiper = new Swiper(".university", {
    slidesPerView: 'auto',
    spaceBetween: 10,
    loop:true,
    grabCursor: true,
    navigation: {
        nextEl: ".university-button-next",
        prevEl: ".university-button-prev",
    },
    breakpoints: {
        1200: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
    },
});


var swiper = new Swiper(".best-users", {
    slidesPerView: 3,
    spaceBetween: 10,
    loop:true,
    grabCursor: true,
    navigation: {
        nextEl: ".most-view-button-next",
        prevEl: ".most-view-button-prev",
    },
    breakpoints: {
        1024: {
            slidesPerView: 6,
            spaceBetween: 20,
        },
        750: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    },
});


var swiper = new Swiper(".most-view", {
    slidesPerView: 2,
    spaceBetween: 10,
    loop:true,
    grabCursor: true,
    navigation: {
        nextEl: ".most-view-button-next",
        prevEl: ".most-view-button-prev",
    },
    breakpoints: {
        1024: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        750: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    },
});
