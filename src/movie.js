//Overwriting Light and Dark Mode
$(window).scroll(e => {
    if(window.scrollY == 0){
        if(localStorage.getItem('mode') == 'light'){
            $('.nav-mb-link').css('color', '#303030');
            $('.toggler').css('color', '#FFFFFF');
            $('.mb-toggler').css('color', '#303030');
            toLightMode();
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

//Setting Movie Informations
window.addEventListener('load', e => {
    fetch('../movies.json')
        .then(res => res.json())
        .then(data => {
            for(let i = 0;i < data.length; i++){
                if(localStorage.getItem('input') == data[i].movieName){
                    $('.pageTitle').text(data[i].movieName);
                    $('.moviePoster').attr('src', data[i].poster)
                    $('.movieName').text(data[i].movieName);
                    $('.movieSubInfo').text(`${data[i].releaseDate} - ${data[i].duration}`);
                    $('.ratingPercent').text(`${data[i].rating}/10`);
                    $('.trailerBtn').click(e => location.href = `${data[i].trailerLink}`)
                    $('.watchBtn').click(e => location.href = `${data[i].movieLink}`);
                    $('.movieDescription').text(data[i].description);
                    $('.genre').text(data[i].genre);
                    $('.movieDirector').text(data[i].director);
                    $('.movieWriter').text(data[i].writers);
                    $('.movieCasts').text(data[i].casts);
                }
            }
        })
})