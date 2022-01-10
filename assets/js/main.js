document.addEventListener('DOMContentLoaded', () => {

    window.addEventListener('scroll', () => {
        let scrolling = window.scrollY;
		if(scrolling  > 50) {
            document.querySelector('.custom-nav').style.display = 'block';
		} else {
            document.querySelector('.custom-nav').style.display = 'none';
        }    
    });
});