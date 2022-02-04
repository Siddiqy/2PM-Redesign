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

    document.addEventListener('click', (e) => {

        if(e.target.className === "nav-link home" || e.target.className === "nav-link home2"){
            document.querySelector('.nav-link.home').classList.add('active');
            document.querySelector('.nav-link.home2').classList.add('active');

            document.querySelector('.nav-link.features').classList.remove('active');
            document.querySelector('.nav-link.features2').classList.remove('active');
            document.querySelector('.nav-link.pricing').classList.remove('active');
            document.querySelector('.nav-link.pricing2').classList.remove('active');
            document.querySelector('.nav-link.contact').classList.remove('active');
            document.querySelector('.nav-link.contact2').classList.remove('active');
        }

        if(e.target.className === "nav-link features" || e.target.className === "nav-link features2"){
            document.querySelector('.nav-link.features').classList.add('active');
            document.querySelector('.nav-link.features2').classList.add('active');

            document.querySelector('.nav-link.home').classList.remove('active');
            document.querySelector('.nav-link.home2').classList.remove('active');
            document.querySelector('.nav-link.pricing').classList.remove('active');
            document.querySelector('.nav-link.pricing2').classList.remove('active');
            document.querySelector('.nav-link.contact').classList.remove('active');
            document.querySelector('.nav-link.contact2').classList.remove('active');
        }

        if(e.target.className === "nav-link pricing" || e.target.className === "nav-link pricing2"){
            document.querySelector('.nav-link.pricing').classList.add('active');
            document.querySelector('.nav-link.pricing2').classList.add('active');

            document.querySelector('.nav-link.home').classList.remove('active');
            document.querySelector('.nav-link.home2').classList.remove('active');
            document.querySelector('.nav-link.features').classList.remove('active');
            document.querySelector('.nav-link.features2').classList.remove('active');
            document.querySelector('.nav-link.contact').classList.remove('active');
            document.querySelector('.nav-link.contact2').classList.remove('active');
        }
        
        if(e.target.className === "nav-link contact" || e.target.className === "nav-link contact2"){
            document.querySelector('.nav-link.contact').classList.add('active');
            document.querySelector('.nav-link.contact2').classList.add('active');

            document.querySelector('.nav-link.home').classList.remove('active');
            document.querySelector('.nav-link.home2').classList.remove('active');
            document.querySelector('.nav-link.features').classList.remove('active');
            document.querySelector('.nav-link.features2').classList.remove('active');
            document.querySelector('.nav-link.pricing').classList.remove('active');
            document.querySelector('.nav-link.pricing2').classList.remove('active');
        }
    });
});