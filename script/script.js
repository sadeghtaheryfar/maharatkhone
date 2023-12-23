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