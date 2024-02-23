//Light mode and Dark mode
function toDarkMode(){
    $('.navbar').css('background-color', '#303030');

    $('.mobile-nav').css('background-color', 'rgba(48,48,48,0.8)');
    $('.mobile-nav  .nav-link').css('color','#FFFFFF');
    $('.mobile-nav').css('border', '1px solid #FFFFFF')
    $('.list-icon').css('color', '#FFFFFF');

    $('.toggler').removeClass('bi-brightness-high-fill');
    $('.toggler').addClass('bi-moon-stars-fill');
    $('.toggler').css('color','#FFFFFF');
    $('.colorToggle').css('background-color', 'rgba(200,200,200,0.35)')
    $('.text').css('color', '#FFFFFF');
    $('.subText').css('color', '#cccccc')
    $(document.body).css('background-color', '#303030');
    $('.searchBar').css('background-color', 'rgb(80,80,80)');
    $('.trailerBtn').css('background-color', 'rgba(255,255,255,0.3)');
    localStorage.setItem('mode', 'dark');
}

function toLightMode(){
    $('.navbar').css('background-color', '#FFFFFF');

    $('.mobile-nav').css('background-color', 'rgba(255,255,255,0.8)');
    $('.mobile-nav  .nav-link').css('color','#303030');
    $('.mobile-nav').css('border', ' 1px solid #303030')
    $('.list-icon').css('color', '#303030');
    
    $('.toggler').removeClass('bi-moon-stars-fill');
    $('.toggler').addClass('bi-brightness-high-fill');
    $('.toggler').css('color','#303030');
    $('.colorToggle').css('background-color', 'rgba(210,210,210,0.5)')
    $('.text').css('color', '#303030');
    $('.subText').css('color', '#656565')
    $(document.body).css('background-color', '#FFFFFF');
    $('.searchBar').css('background-color', 'rgb(210,210,210)');
    $('.trailerBtn').css('background-color', 'rgba(48,48,48,0.3)');
    localStorage.setItem('mode', 'light');
}

//Setting Light and Dark Mode
switch(localStorage.getItem('mode')){
    case 'light':
        toLightMode()
        break;
    case 'dark':
        toDarkMode()
        break;
    case null:
        toLightMode()
        break;
}

$('.colorToggle').click(e => {
    if(localStorage.getItem('mode') == 'light'){
        toDarkMode();
    }else{
        toLightMode();
    }
})

// Changing Navbar BG-Color on Scroll

if(window.scrollY == 0){
    $('.navbar').css('background-color', 'transparent');
}

$(window).scroll(e => {
    if(window.scrollY == 0){
        if(localStorage.getItem('mode') == 'light'){
            $('.navbar-brand').css('color', '#FFFFFF');
            $('.list-icon').css('color', '#FFFFFF');
            $('.nav-link').css('color', '#FFFFFF');
            $('.nav-mb-link').css('color', '#303030');
            $('.toggler').css('color', '#FFFFFF');
            $('.mb-toggler').css('color', '#303030');
        }
        $('.navbar').css('background-color','transparent');
    }else{
        if(localStorage.getItem('mode') == 'light'){
            $('.navbar').css('background-color', '#FFFFFF');
            toLightMode();
        }else{
            $('.navbar').css('background-color', '#303030');
            toDarkMode();
        }
    }
})

// Toggling Navigation Menu
let isVisible = false;
$('.mobile-nav').hide();
$('.mobile-nav').removeClass('d-none');

$('.list-icon').click(e => {
    if(isVisible == false){
        isVisible = true;
        $('.list-icon').removeClass('bi-list');
        $('.list-icon').addClass('bi-x');
        $('.mobile-nav').fadeIn(150);
    }else{
        isVisible = false;
        $('.list-icon').removeClass('bi-x');
        $('.list-icon').addClass('bi-list');
        $('.mobile-nav').fadeOut(150);
    }
})

$('li').click(e => {
    isVisible = false;
    $('.list-icon').removeClass('bi-x');
    $('.list-icon').addClass('bi-list');
    $('.mobile-nav').fadeOut(150);
})

