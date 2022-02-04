document.addEventListener('DOMContentLoaded', () => {

    if(window.innerWidth >= 1200) {
        window.addEventListener('scroll', () => {
            let scrolling = window.scrollY;
            if(scrolling  > 50) {
                document.querySelector('.custom-nav').style.display = 'block';
            } else {
                document.querySelector('.custom-nav').style.display = 'none';
            }    
        });
    }
});