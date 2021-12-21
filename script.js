let header = document.querySelector('header');
function changeHeader(){
    if(document.documentElement.scrollTop > 100 && screen.width>767){
    header.classList.add('active');
    }
    else{
        header.classList.remove('active');
    }
}
window.onscroll = function() {changeHeader()};