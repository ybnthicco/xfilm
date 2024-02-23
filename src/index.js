//Checking Color Scheme(only for index.html)
if(localStorage.getItem('mode') == 'light'){
    $('.navbar-brand').css('color', '#FFFFFF');
    $('.nav-link').css('color', '#FFFFFF');
    $('.list-icon').css('color', '#FFFFFF');
    $('.toggler').css('color', '#FFFFFF');
    $('.nav-mb-link').css('color', '#303030');
    $('.mb-toggler').css('color', '#303030');
}

// Searching Movies
let movieItems = document.querySelectorAll('.movie-card');

    //Text Input Event
$('.searchInput').change(e => {
    if(e.target.value != ""){
        $('.heading').hide();
        $('.movieContainer').hide();
        $('.searchResultSection').removeClass('d-none');
        $('.resultHeading > h5').text(`Search results for "${e.target.value}"`);
        movieItems.forEach(item => {
            if(item.querySelector('.card-title').textContent.toLowerCase().includes(e.target.value.toLowerCase())){
                let result = item.cloneNode(true);
                result.classList.remove('mx-md-0');
                $('.resultContainer').append(result);
                console.log(result);
            }
        })
    }
})
    //Empty Text Event
$('.searchInput').keyup(e => {
    if(e.target.value == ""){
        $('.heading').show();
        $('.movieContainer').show();
        $('.searchResultSection').addClass('d-none');
        $('.resultContainer').empty();
    }
})


//Movie Card FadeIn Reveal
function itemReveal(){
    let headings = $('.heading');
    let movies = $('.movie-card');

    for(let i = 0; i < headings.length; i++){
        let top = headings[i].getBoundingClientRect().top;
        if(top < (window.innerHeight || document.documentElement.clientHeight)){
            headings[i].style.opacity = "1";
        }
    }

    for(let i = 0; i < movies.length; i++){
        let top = movies[i].getBoundingClientRect().top;
        if(top < (window.innerHeight || document.documentElement.clientHeight)){
            movies[i].style.opacity = "1";
        }
    }
}

window.addEventListener('load', itemReveal);
window.addEventListener('scroll', itemReveal);

//Play-icon placement
document.querySelectorAll('.play-icon').forEach(item => {
    item.style.top = `calc(50% - 40.5px + 0.5rem + 0.15rem)`;
})

//Movie Card Hover Effect

$('.card-img-top').mouseenter(e => {
    e.target.style.filter = "brightness(50%)"

    e.target.nextElementSibling.style.opacity = 1;
})


$('.card-img-top').mouseleave(e => {
    e.target.style.filter = "brightness(100%)"
    e.target.nextElementSibling.style.opacity = 0;
})

//Redirecting into Individual Movie Page
//Saving Input to Local Storage

$('.movie-card').click(e => {
    localStorage.setItem('input', e.currentTarget.querySelector('.card-title').textContent);
    location.href = 'movie.html';
})
